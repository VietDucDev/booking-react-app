import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { auth } from "../pages/log-firebase/Firebase";

interface Hotel {
  sn: number;
  title: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavBar = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);
  const navigate = useNavigate();
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  });

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/home";
      console.log("User logged out successfully!");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  }

  const handleOpen = () => setOpenModal(true);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
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
          <ListItem sx={{ color: "#003c43", fontWeight: "bold" }}>
            <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
            <span>Đăng xuất</span>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List sx={{ marginLeft: "5px" }}>
        <ListItem
          sx={{
            bgcolor: "whitesmoke",
            borderRadius: "8px",
          }}
        >
          <Link
            to="discount"
            className="text-dark text-decoration-none d-flex align-items-center"
            style={{
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-gift mr-2"></i>
            Ưu đãi
          </Link>
        </ListItem>
      </List>

      <List sx={{ marginLeft: "5px" }}>
        <ListItem sx={{ fontWeight: "bold" }}>Danh mục khách sạn</ListItem>
        {hotelList.map((hotel) => (
          <ListItem
            className="dropdown-item py-2 rounded mb-1"
            key={hotel.sn}
            style={{
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => showAllHotels(hotel.title)}
          >
            {hotel.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

  // console.log("navbar-rerender");

  return (
    <nav className="fixed-top bg-white shadow">
      <div
        className="container col-11 px-md-5 px-sm-4 d-flex justify-content-between align-items-center"
        style={{ height: "65px" }}
      >
        <div className="d-flex align-items-center">
          <Link to="home">
            <img
              src="./public/images/logo.png"
              alt="logo"
              width={70}
              className="mr-0 mr-lg-3"
            />
          </Link>
          <div className="d-lg-flex d-md-none d-sm-none d-none">
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

        <div
          className="align-items-center d-flex d-sm-flex d-md-none d-lg-none border rounded-pill p-2 pl-3"
          onClick={handleOpen}
        >
          Bạn muốn đi đâu nào?
          <div
            className="text-white rounded-circle d-flex align-items-center justify-content-center ml-3"
            style={{
              backgroundColor: "#003c43",
              width: "35px",
              height: "35px",
              cursor: "pointer",
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="align-items-center d-none d-sm-none d-md-none d-lg-flex">
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
          {user ? (
            <div className="dropdown dropstart">
              <button
                className="btn px-2"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "14px" }}
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
                <Link to="/home" className="text-decoration-none">
                  <li
                    className="dropdown-item py-2 my-2"
                    style={{ color: "#003c43", fontWeight: "600" }}
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    Đăng xuất
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <a href="/login_logout">Đăng nhập</a>
          )}
        </div>

        <button
          className="btn px-2 d-lg-none d-md-block d-sm-block"
          style={{
            fontSize: "25px",
            color: "#003c43",
          }}
          onClick={toggleDrawer(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </div>

      <div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </nav>
  );
};

export default NavBar;
