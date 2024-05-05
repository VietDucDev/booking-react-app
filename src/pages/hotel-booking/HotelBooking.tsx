import { Fragment, useEffect, useState } from "react";
import "./HotelBooking.scss";
import { auth } from "../log-firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { BookRoomProps, Room } from "../RoomPage/RoomPage";
import { useSelector } from "react-redux";
import { selectSelectedRoom } from "../../reducers/bookingSlice";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../reducers/HotelsSlice";

const HotelBooking = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  const selectedRoom = useSelector(selectSelectedRoom);
  const dispatch = useDispatch();

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
                  <strong>22:00 - 17/04/2024</strong>
                  <p>Trả phòng</p>
                  <strong>12:00 - 18/04/2024</strong>
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
                  onClick={() =>
                    handleBookRoom({
                      hotelId: selectedRoom.hotelId,
                      hotelName: selectedRoom.hotelName,
                      hotelAddress: selectedRoom.hotelAddress,
                      roomId: selectedRoom.roomId,
                      roomData: selectedRoom.roomData,
                    })
                  }
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
    </Fragment>
  );
};

export default HotelBooking;
