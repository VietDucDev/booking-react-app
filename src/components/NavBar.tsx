import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Hotel {
  sn: number;
  title: string;
}

const NavBar = () => {
  const [hotelList, setHotelList] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Hotel[]>(
          "http://localhost:3000/hotelCollection"
        );
        const data = res.data;
        setHotelList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
<<<<<<< HEAD
      <header className="fixed-top bg-white shadow">
        <div className="py-3 d-flex justify-content-center">
          <Link to="home" className="mx-2 text-decoration-none">
            Home Page
          </Link>
          <Link to="hotelList" className="mx-2 text-decoration-none">
            Son Tung MTP
          </Link>
          <Link to="roomPage" className="mx-2 text-decoration-none">
            Viet Duc
          </Link>
          <Link to="hotelBooking" className="mx-2 text-decoration-none">
            Duc dai ca
=======
      <nav className="fixed-top bg-white shadow-sm px-5 py-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link to="home">
            <img
              src="./public/images/logo.png"
              alt="logo"
              width={70}
              className="mx-3"
            />
>>>>>>> 2e1158f30cbf6b8365bbac6bc669e84ffc4c8fa5
          </Link>
          <div className="d-flex justify-content-center align-items-center">
            <Link
              to="discount"
              className="mx-2 text-dark text-decoration-none d-flex align-items-center"
              style={{
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-gift mr-2"></i>
              Ưu đãi
            </Link>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0",
                }}
              >
                Danh mục khách sạn
              </button>
              <div className="dropdown-menu shadow px-2">
                {hotelList.map((hotel) => (
                  <div
                    className="dropdown-item py-2 rounded mb-1"
                    key={hotel.sn}
                    style={{ fontSize: "14px" }}
                  >
                    {hotel.title}
                  </div>
                ))}
              </div>
            </div>
            <Link to="hotelList" className="mx-2 text-decoration-none">
              Son Tung MTP
            </Link>
            <Link to="login_logout" className="mx-2 text-decoration-none">
              Viet Duc
            </Link>
            <Link to="hotelBooking" className="mx-2 text-decoration-none">
              Duc dai ca
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn text-capitalize d-flex align-items-center"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "14px", letterSpacing: "0" }}
            >
              <img
                src="https://go2joy.vn/_nuxt/vn-flag.98e62614.svg"
                alt="vietnam_flag"
                style={{ marginRight: "6px" }}
              />
              Tiếng việt
            </button>
            <div className="dropdown-menu mt-2">
              <a className="dropdown-item py-2 my-1" href="#">
                English
              </a>
              <a className="dropdown-item py-2 my-1" href="#">
                中文
              </a>
              <a className="dropdown-item py-2 my-1" href="#">
                Español
              </a>
            </div>
          </div>
          <div className="dropdown dropstart">
            <button
              className="btn text-capitalize"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "14px", letterSpacing: "0" }}
            >
              <div
                className="rounded-circle text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#003c43",
                }}
              >
                U
              </div>
            </button>
            <ul className="dropdown-menu mt-2">
              <li
                className="dropdown-item"
                style={{ borderBottom: "1px solid gray" }}
              >
                <h6>Doan Hoang</h6>
                <i className="fa-solid fa-phone"></i>(+84) 818512944
              </li>
              <li>
                <a className="dropdown-item py-2 my-2" href="">
                  <i className="fa-regular fa-circle-user mr-2"></i> Tài khoản
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 my-2" href="">
                  <i className="fa-solid fa-clock-rotate-left mr-2"></i> Đặt
                  phòng của tôi
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 my-2" href="">
                  <i className="fa-regular fa-heart mr-2"></i>Danh sách yêu
                  thích
                </a>
              </li>
              <Link to="/login" className="text-decoration-none">
                <li
                  className="dropdown-item py-2 my-2"
                  style={{ color: "#ff6400" }}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                  Đăng xuất
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
