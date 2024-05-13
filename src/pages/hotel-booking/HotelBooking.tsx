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
import Swal from "sweetalert2";

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

  console.log(selectedRoom);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isDate, setIsDate] = useState(true);

  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(dayjs());
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(dayjs());

  const [range, setRange] = useState<any>([
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

  const handleBookingSendApi = async (dataBookRoom: BookRoomProps) => {
    try {
      const confirmResult = await Swal.fire({
        title: "Xác nhận đặt phòng ?",
        text: "Kiểm tra chính xác thông tin trước khi đặt phòng bạn nhé!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Hủy bỏ",
        confirmButtonText: "Xác nhận",
      });

      if (confirmResult.isConfirmed) {
        const response = await CheckoutHotelService.postCheckoutHotel(
          dataBookRoom
        );
        dispatch(bookRoom(dataBookRoom));
        navigate("/hotelBooking");
        console.log(response);
      }
    } catch (error) {
      console.error("Error buying hotel", error);
      Swal.fire({
        icon: "error",
        title: "Checkout Failed",
        text: "An error occurred during checkout. Please try again later.",
      });
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

  const durationInt = duration ? parseInt(duration.substring(0, 2)) : 0;

  const prepareTheBill = (price: number) => {
    switch (true) {
      case durationInt >= 0 && durationInt < 2:
        return price * 2;
      case durationInt >= 2 && durationInt < 4:
        return price * 3;
      case durationInt >= 4 && durationInt < 6:
        return price * 4;
      case durationInt >= 6 && durationInt < 24:
        return price * 5;
      default:
        return price * 0;
    }
  };
  return (
    <Fragment>
      {user ? (
        <div id="hotel-booking" className="container col-11 col-md-10">
          <div id="header" onClick={handleBackToHomePage}>
            <i className="fa-solid fa-arrow-left mr-2"></i>
            <span>Quay về</span>
          </div>

          <div id="order">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3 px-2">
              <h4 className="font-weight-bold mb-3 mb-lg-0">
                Lựa chọn của bạn
              </h4>
              <div>
                <button
                  className={
                    isDate ? "btn btn-outline-info mr-3" : "btn btn-info mr-3"
                  }
                  onClick={() => setIsDate(false)}
                >
                  Theo giờ
                </button>
                <button
                  className={isDate ? "btn btn-info" : "btn btn-outline-info"}
                  onClick={() => setIsDate(true)}
                >
                  Theo ngày
                </button>
              </div>
            </div>

            {/* BOOKING */}
            <div className="d-flex flex-column flex-md-row">
              <div className="col-12 col-md-5 mb-3 mb-md-0 px-0 mr-0 mr-md-3">
                <img
                  src={selectedRoom.roomData.roomImages[0]}
                  alt="booking-hotel"
                  className="img-fluid rounded h-100"
                />
              </div>

              <div className="col-12 col-md-7 px-0">
                <div>
                  <h4 className="font-weight-bold">{selectedRoom.hotelName}</h4>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#003c43",
                      textTransform: "uppercase",
                    }}
                  >
                    {selectedRoom.roomData.roomName}
                  </p>
                  <p>{selectedRoom.hotelAddress}</p>
                </div>

                <div>
                  <p className="mb-2 font-italic">Nhận phòng</p>
                  {isDate ? (
                    <input
                      type="text"
                      className="date"
                      readOnly
                      onClick={handleOpen}
                      value={`20:00 - ${format(
                        range[0].startDate,
                        "dd/MM/yyyy"
                      )}`}
                    />
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={dayjs().startOf("day").hour(0)}
                        onChange={(newValue) => setCheckInTime(newValue)}
                      />
                    </LocalizationProvider>
                  )}
                  <p className="my-2 font-italic">Trả phòng</p>
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
                        value={checkInTime}
                        onChange={(newValue) => setCheckOutTime(newValue)}
                      />
                    </LocalizationProvider>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-3 mt-4"
            style={{ borderRadius: "12px", border: "1px solid #ccc" }}
          >
            <p
              className="mb-2 font-weight-bold text-center text-uppercase"
              style={{ fontSize: "25px", color: "#003c43" }}
            >
              Chi tiết thanh toán
            </p>

            <div className="d-flex flex-column flex-md-row">
              <div className="col-12 col-md-6">
                <p>
                  Email: <strong>{user.email}</strong>
                </p>
                <p className="mb-3">
                  Số điện thoại: <strong>0987654321</strong>
                </p>
              </div>

              <div className="col-12 col-md-6">
                <div>
                  <p>
                    Giá phòng:{" "}
                    <span className="font-weight-bold">
                      {selectedRoom.roomData.price.toLocaleString("vi-VN")} đ
                    </span>
                  </p>
                </div>
                <div>
                  {isDate ? (
                    <p>
                      Số ngày thuê:{" "}
                      <span className="font-weight-bold">
                        {calculateDays()} ngày
                      </span>
                    </p>
                  ) : (
                    <p>
                      Số giờ thuê:{" "}
                      <span className="font-weight-bold">
                        {durationInt} giờ
                      </span>
                    </p>
                  )}
                </div>
                <p>
                  Giảm giá: <span className="font-weight-bold">10%</span>
                </p>
                <hr />
                {isDate ? (
                  <div className="font-weight-bold">
                    <span className="text-uppercase">Tổng:</span>{" "}
                    {(
                      selectedRoom.roomData.price *
                      5 *
                      calculateDays() *
                      0.9
                    ).toLocaleString("vi-VN")}{" "}
                    đ - Thanh toán trực tiếp
                  </div>
                ) : (
                  <div className="font-weight-bold">
                    <span className="text-uppercase">Tổng:</span>{" "}
                    {(
                      prepareTheBill(selectedRoom.roomData.price) * 0.9
                    ).toLocaleString("vi-VN")}{" "}
                    đ - Thanh toán trực tiếp
                  </div>
                )}
                <div className="dropdown">
                  <p></p>
                </div>
                <Button
                  className="total-submit"
                  variant="contained"
                  onClick={() => {
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
