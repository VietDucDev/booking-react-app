import axios from "axios";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

    let isValid = true;
    let validationErrors: FormErrors = {};
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email là bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email không hợp lệ";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Mật khẩu là bắt buộc";
    }

    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        res.data.map((user: { email: string; password: string }) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              toast.success("Đăng nhập thành công", {
                autoClose: 2500,
                pauseOnHover: false,
              });
              navigate(`/home`);
            } else if (user.password !== formData.password) {
              isValid = false;
              validationErrors.password = "Sai mật khẩu";
            }
          }
        });

        setErrors(validationErrors);
        setValid(isValid);
      })
      .catch((err) => {
        console.log(err);
        6;
      });
  };

  return (
    <div style={{ margin: "100px auto", width: "fit-content" }}>
      <form onSubmit={handleSubmit} className="border p-4">
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
        <button className="btn btn-primary">Đăng nhập</button>
        <p className="mt-3">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
