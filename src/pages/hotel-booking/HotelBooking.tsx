import { Fragment, useEffect, useState } from "react";
import "../../style/sass/hotel-booking-scss/HotelBooking.scss";
import { auth } from "../log-firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { BookRoomProps } from "../room-page/RoomPage";
import { useSelector } from "react-redux";
import { selectSelectedRoom } from "../../reducers/bookingSlice";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../reducers/HotelsSlice";
import CheckoutHotelService from "../../sever-interaction/CheckoutHotelService";

import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration"; // Import plugin

dayjs.extend(duration); // Kích hoạt plugin
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

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
  const [isDate, setIsDate] = useState(true);

  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(dayjs());
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(dayjs());

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

  const calculateDays = (): number => {
    const { startDate, endDate } = range[0];
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    return 0;
  };

  const formatTime = (time: Dayjs | null): string => {
    return time ? time.format("HH:mm DD-MM-YYYY") : "";
  };

  // Hàm tính thời gian giữa hai thời điểm
  const calculateDuration = (
    checkInTime: Dayjs | null,
    checkOutTime: Dayjs | null
  ): string | null => {
    // Kiểm tra xem có đủ thông tin không
    if (!checkInTime || !checkOutTime) return null;

    // Tính khoảng thời gian giữa hai thời điểm
    const duration = dayjs.duration(checkOutTime.diff(checkInTime));

    // Trả về thời gian trong định dạng phù hợp (vd: giờ:phút)
    return `${duration.hours()} giờ ${duration.minutes()} phút`;
  };

  const duration: string | null = calculateDuration(checkInTime, checkOutTime);

  console.log(duration);

  return (
    <Fragment>
      {user ? (
        <div id="hotel-booking">
          <div id="header" onClick={handleBackToHomePage}>
            <i className="fa-solid fa-arrow-left mr-2"></i>
            <p>Quay về trang chủ</p>
          </div>
          <div id="order">
            <div className="d-flex justify-content-between">
              <p className="mb-2 fz20">
                <strong>Lựa chọn của bạn</strong>
              </p>
              <div>
                <button
                  className={isDate ? "btn" : "btn pickTimeBtn"}
                  onClick={() => setIsDate(false)}
                >
                  Theo giờ
                </button>
                <button
                  className={isDate ? "btn pickTimeBtn" : "btn"}
                  onClick={() => setIsDate(true)}
                >
                  Theo ngày
                </button>
              </div>
            </div>
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
                  <p className="mb-2">Nhận phòng</p>
                  {isDate ? (
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
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        // label="Giờ nhận phòng"
                        // value={value}
                        onChange={(newValue) => setCheckInTime(newValue)}
                      />
                    </LocalizationProvider>
                  )}
                  <p className="mb-2">Trả phòng</p>
                  {isDate ? (
                    <input
                      type="text"
                      className="date"
                      readOnly
                      onClick={handleOpen}
                      value={`10:00 - ${format(
                        range[0].endDate,
                        "dd/MM/yyyy"
                      )}`}
                    />
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        // label="Giờ trả phòng"
                        value={checkInTime}
                        onChange={(newValue) => setCheckOutTime(newValue)}
                      />
                    </LocalizationProvider>
                  )}
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
                  {isDate ? (
                    <Fragment>
                      <p>Số ngày thuê</p>
                      <p>{calculateDays()} ngày</p>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <p>Số giờ thuê</p>
                      <p>{duration}</p>
                    </Fragment>
                  )}
                </div>
                <div className="total-box">
                  <p>Giảm giá</p>
                  <p>10%</p>
                </div>
                <hr />
                <div className="total-box">
                  <strong>Tổng thanh toán</strong>
                  <strong>
                    {(
                      selectedRoom.roomData.price *
                      calculateDays() *
                      0.9
                    ).toLocaleString("vi-VN")}{" "}
                    đ
                  </strong>
                </div>
                <div className="dropdown">
                  <p>Thanh toán trực tiếp</p>
                </div>
                <Button
                  className="total-submit"
                  variant="contained"
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
                >
                  Đặt phòng
                </Button>
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
              minDate={new Date()}
            />
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default HotelBooking;
