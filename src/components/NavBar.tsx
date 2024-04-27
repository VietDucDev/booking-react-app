import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

interface Hotel {
  sn: number;
  title: string;
}

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ marginLeft: "5px" }}>
        <ListItem>
          <div
            className="rounded-circle text-white d-flex align-items-center justify-content-center mr-2"
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "#003c43",
            }}
          >
            N
          </div>
        </ListItem>

        <ListItem sx={{ marginTop: "10px", color: "#003c43" }}>
          <i className="fa-solid fa-circle-user mr-2"></i>
          <span>Tài khoản</span>
        </ListItem>

        <Link to="/home">
          <ListItem sx={{ color: "#003c43" }}>
            <i className="fa-solid fa-hotel mr-2"></i>
            <span>Đặt phòng của tôi</span>
          </ListItem>
        </Link>

        <ListItem sx={{ color: "#003c43" }}>
          <i className="fa-solid fa-heart mr-2"></i>
          <span>Danh sách yêu thích</span>
        </ListItem>

        <Link to="/login">
          <ListItem sx={{ color: "#003c43" }}>
            <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
            <span>Đăng xuất</span>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const navigate = useNavigate();

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

  const showAllHotels = (hotelType: string) => {
    navigate(`/hotel-list?hotel_type=${hotelType}`);
  };

  return (
    <nav className="fixed-top bg-white shadow-sm py-2">
      <div className="container col-11 px-lg-5 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to="home">
            <img
              src="./public/images/logo.png"
              alt="logo"
              width={70}
              className="mr-3"
            />
          </Link>
          <div className="d-flex">
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
                    onClick={() => showAllHotels(hotel.title)}
                  >
                    {hotel.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown d-lg-block d-md-block d-sm-none">
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
          <div className="dropdown dropstart d-lg-block d-md-block d-sm-none">
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
                N
              </div>
            </button>
            <ul className="dropdown-menu mt-2">
              <li
                className="dropdown-item"
                style={{ borderBottom: "1px solid gray" }}
              >
                <h6>Nguyễn Văn A</h6>
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
                  style={{ color: "#003c43", fontWeight: "600" }}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                  Đăng xuất
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="d-sm-flex align-items-center d-lg-none d-md-none d-sm-block">
          <div className="dropdown d-lg-none d-md-none d-sm-block">
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
              VN
            </button>
            <div className="dropdown-menu mt-2">
              <a
                className="dropdown-item py-2 my-1 d-inline-flex align-items-center"
                href=""
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                  alt="UK"
                  width={20}
                  className="mr-2"
                />
                EN
              </a>
              <a
                className="dropdown-item py-2 my-1 d-inline-flex align-items-center"
                href=""
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                  alt="UK"
                  width={20}
                  className="mr-2"
                />
                CN
              </a>
              <a
                className="dropdown-item py-2 my-1 d-inline-flex align-items-center"
                href=""
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png"
                  alt="UK"
                  width={20}
                  className="mr-2"
                />
                ES
              </a>
            </div>
          </div>
          <button
            className="btn"
            style={{
              outline: "1px solid #003c43",
              fontSize: "18px",
            }}
            onClick={toggleDrawer(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
