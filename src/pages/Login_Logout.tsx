import "react-toastify/dist/ReactToastify.css";
import { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../style/sass/_signup_sign_in.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./log-firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

interface FormValues {
  fname?: string;
  lname?: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Login_Logout = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to manage button's disabled state

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const initialValues: FormValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  // log with firebase
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = async (values: FormValues) => {
    setIsButtonDisabled(true); // Disable the button on click

    // Delay the sign-in process by 2.5 seconds
    setTimeout(async () => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        // console.log("User logged in Successfully");
        window.location.href = "/home";
      } catch (error: any) {
        alert(error.message);
      } finally {
        setIsButtonDisabled(false); // Re-enable the button after the timeout
      }
    }, 2000);
  };

  const handleRegister = async (value: FormValues) => {
    setIsButtonDisabled(true); // Disable the button on click

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: value.fname,
          lastName: value.lname,
        });
      }
      toast.success("Đăng ký tài khoản thành công", {
        autoClose: 2000,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  // end log with firebase

  const validate = (values: FormValues) => {
    const errors: any = {};

    // Xác thực email
    if (!values.email.includes("@")) {
      errors.email = "Email phải chứa ký tự @";
    }

    // Xác thực mật khẩu
    if (values.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    // So sánh mật khẩu với mật khẩu xác nhận
    if (!isSignIn) {
      // So sánh mật khẩu với mật khẩu xác nhận
      if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "Mật khẩu xác nhận phải giống với mật khẩu";
      }
    }
    console.log(errors);

    return errors;
  };
  return (
    <Fragment>
      <div className="signin-signup-conatiner">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={
            isSignIn
              ? (value: FormValues) => handleSubmit(value)
              : (value: FormValues) => handleRegister(value)
          }
        >
          {({ resetForm }) => (
            <Form
              className={
                isSignIn ? "container" : "container right-panel-active"
              }
              id="container"
            >
              {/* đăng ký */}
              <div className="form-container sign-up-container">
                <div className="form">
                  <h2>Đăng ký</h2>
                  <div className="social-container">
                    <a href="#" className="social facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social google">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="social linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <span>hoặc sử dụng email để đăng ký</span>
                  <Field type="text" name="fname" placeholder="Tên" />
                  <ErrorMessage
                    name="fname"
                    component="div"
                    className="error"
                  />
                  <Field type="text" name="lname" placeholder="Họ" />
                  <ErrorMessage
                    name="lname"
                    component="div"
                    className="error"
                  />
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <Field
                    type="password"
                    name="passwordConfirm"
                    placeholder="Nhập lại mật khẩu"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="error"
                  />
                  <LoadingButton
                    variant="contained"
                    loading={isButtonDisabled}
                    type="submit"
                  >
                    Đăng ký
                  </LoadingButton>
                  <div className="form-conversion">
                    Bạn đã có tài khoản?{" "}
                    <strong
                      onClick={() => {
                        toggleForm();
                        resetForm();
                      }}
                    >
                      Đăng nhập
                    </strong>
                  </div>
                </div>
              </div>

              {/* đăng nhập */}
              <div className="form-container sign-in-container">
                <div className="form">
                  <h2>Đăng nhập</h2>
                  <div className="social-container">
                    <a href="#" className="social facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social google">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="social linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <span>hoặc sử dụng tài khoản của bạn</span>
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <a href="#">Quên mật khẩu?</a>
                  <LoadingButton
                    type="submit"
                    loading={isButtonDisabled}
                    variant="contained"
                  >
                    <span>Đăng nhập</span>
                  </LoadingButton>
                  <div className="form-conversion">
                    Bạn chưa có tài khoản?{" "}
                    <strong
                      onClick={() => {
                        toggleForm();
                        resetForm();
                      }}
                    >
                      Đăng ký
                    </strong>
                  </div>
                </div>
              </div>

              <div className="overlay-container d-sm-none d-md-block">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h4>WELCOME TO</h4>
                    <h1>9ROOM</h1>
                    <p>Nền tảng đặt phòng tốt nhất cho chuyến đi của bạn! </p>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Nhập thông tin của bạn và bắt đầu hành trình </p>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default Login_Logout;
