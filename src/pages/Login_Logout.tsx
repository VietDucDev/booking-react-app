import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../style/sass/_signup_sign_in.scss";

interface FormValues {
  name?: string;
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
    name: "",
    email: "",
    password: "",
  };
  return (
    <Fragment>
      <div className="signin-signup-conatiner">
        <Formik
          initialValues={initialValues}
          // validate={}
          onSubmit={(value: FormValues) => {
            console.log("submit: ", value);
          }}
        >
          {({ resetForm }) => (
            <Form
              className={
                isSignIn ? "container" : "container right-panel-active"
              }
              id="container"
            >
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
                  <Field type="text" name="name" placeholder="Tên" />
                  <ErrorMessage name="name" component="div" />
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
    </Fragment>
  );
};

export default Login_Logout;
