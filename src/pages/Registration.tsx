import axios from "axios";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [, setValid] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    let isValid = true;
    let validationErrors: FormErrors = {};
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Not a valid email";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Password is required!";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/users", formData)
        .then(() => {
          alert("Dang ky thanh cong");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div
      style={{ margin: "100px auto", width: "fit-content" }}
      className=" border p-4"
    >
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nhập mail vào đây"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>
      <p>
        Đã có tài khoản?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Đăng nhập tại đây
        </Link>
      </p>
    </div>
  );
};

export default Registration;
