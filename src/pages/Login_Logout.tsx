import "react-toastify/dist/ReactToastify.css";
import { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../style/sass/_signup_sign_in.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./log-firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

interface FormValues {
  fname?: string;
  lname?: string;
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const Login_Logout = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const initialValues: FormValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  // log with firebase
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = async (value: FormValues) => {
    console.log(value);

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleRegister = async (value: FormValues) => {
    console.log(value);

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      const user = auth.currentUser;
      console.log(user);
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
  return (
    <Fragment>
      <div className="signin-signup-conatiner">
        <Formik
          initialValues={initialValues}
          // validate={}
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
                  <ErrorMessage name="fname" component="div" />
                  <Field type="text" name="lname" placeholder="Họ" />
                  <ErrorMessage name="lname" component="div" />
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage name="password" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Nhập lại mật khẩu"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit">Đăng ký</button>
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
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage name="password" component="div" />
                  <a href="#">Quên mật khẩu?</a>
                  <button type="submit">Đăng nhập</button>
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
              <div className="overlay-container">
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

      <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer>
    </Fragment>
  );
};

export default Login_Logout;
