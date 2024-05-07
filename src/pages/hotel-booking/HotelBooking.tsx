import { Fragment, useEffect, useState } from "react";
import "../../style/sass/hotel-booking-scss/HotelBooking.scss";
import { auth } from "../log-firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { BookRoomProps, Room } from "../RoomPage/RoomPage";
import { useSelector } from "react-redux";
import { selectSelectedRoom } from "../../reducers/bookingSlice";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../reducers/HotelsSlice";
import CheckoutHotelService from "../../sever-interaction/CheckoutHotelService";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HotelBooking = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  const selectedRoom = useSelector(selectSelectedRoom);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const handleBackToHomePage = () => {
    navigate("/home");
  };

  const handleBookRoom = (dataBookRoom: BookRoomProps) => {
    dispatch(bookRoom(dataBookRoom));
    navigate("/hotelBooking");
  };

  const handleBookingSendApi = async (dataBookRoom: BookRoomProps) => {
    try {
      // Thực hiện gọi phương thức postCheckoutHotel từ service

      const response = await CheckoutHotelService.postCheckoutHotel(
        dataBookRoom
      );
      // Xử lý kết quả trả về (nếu cần)
      console.log("Buy successful", response);
    } catch (error) {
      // Xử lý lỗi (nếu có)
      console.error("Error buying hotel", error);
    }
  };
  console.log(format(range[0].startDate, "dd/MM/yyyy"));

  return (
    <Fragment>
      {user ? (
        <div id="hotel-booking">
          <div id="header" onClick={handleBackToHomePage}>
            <i className="fa-solid fa-arrow-left mr-2"></i>
            <p>Quay về trang chủ</p>
          </div>
          <div id="order">
            <p className="mb-2 fz20">
              <strong>Lựa chọn của bạn</strong>
            </p>
            <div className="booking-info">
              <div className="hotel-selected">
                <div className="img">
                  <img
                    src={selectedRoom.roomData.roomImages[0]}
                    alt="booking-hotel"
                  />
                </div>
                <div className="content">
                  <p>{selectedRoom.hotelName}</p>
                  <strong>{selectedRoom.roomData.roomName}</strong>
                  <p>{selectedRoom.hotelAddress}</p>
                </div>
              </div>

              <div className="hotel-time">
                <div className="img">
                  <img
                    src={selectedRoom.roomData.roomImages[1]}
                    alt="booking-hotel"
                  />
                </div>
                <div className="content">
                  <p>Nhận phòng</p>
                  <input
                    type="text"
                    className="date"
                    readOnly
                    onClick={handleOpen}
                    value={`22:00 - ${format(
                      range[0].startDate,
                      "dd/MM/yyyy"
                    )}`}
                  />
                  <p>Trả phòng</p>
                  <input
                    type="text"
                    className="date"
                    readOnly
                    onClick={handleOpen}
                    value={`22:00 - ${format(range[0].endDate, "dd/MM/yyyy")}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="checkout">
            <p className="mb-2 fz20">
              <strong>Chi tiết thanh toán</strong>
            </p>
            <div className="checkout-box">
              <div className="checkout-info">
                <div className="info-box">
                  <p>Email</p>
                  <strong>{user.email}</strong>
                </div>
                <div className="info-box">
                  <p>Số điện thoại</p>
                  <strong>0987654321</strong>
                </div>
              </div>
              <div className="checkout-total">
                <div className="total-box">
                  <p>Giá phòng</p>
                  <p>{selectedRoom.roomData.price.toLocaleString("vi-VN")} đ</p>
                </div>
                <div className="total-box">
                  <p>Giảm giá</p>
                  <p>0</p>
                </div>
                <hr />
                <div className="total-box">
                  <strong>Tổng thanh toán</strong>
                  <strong>
                    {selectedRoom.roomData.price.toLocaleString("vi-VN")} đ
                  </strong>
                </div>
                <div className="dropdown">
                  <p>Thanh toán trực tiếp</p>
                </div>
                <button
                  onClick={() => {
                    handleBookRoom({
                      hotelId: selectedRoom.hotelId,
                      hotelName: selectedRoom.hotelName,
                      hotelAddress: selectedRoom.hotelAddress,
                      roomId: selectedRoom.roomId,
                      roomData: selectedRoom.roomData,
                    });
                    handleBookingSendApi({
                      hotelId: selectedRoom.hotelId,
                      hotelName: selectedRoom.hotelName,
                      hotelAddress: selectedRoom.hotelAddress,
                      roomId: selectedRoom.roomId,
                      roomData: selectedRoom.roomData,
                    });
                  }}
                  className="total-submit"
                >
                  Đặt phòng
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "must login"
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <DateRange
              onChange={(item) => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              direction="horizontal"
              className="calendarElement"
            />
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default HotelBooking;
