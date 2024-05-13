import { Fragment, useEffect, useState } from "react";
import "../../style/sass/hotel-booking-scss/HotelBooking.scss";
import { auth } from "../log-firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { BookRoomProps } from "../room-page/RoomPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../reducers/HotelsSlice";
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
  const selectedRoom = useSelector(
    (state: BookRoomProps) => state.booking.selectedRoom
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);
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
  }, []);

  const handleBackToHomePage = () => {
    navigate(`/roomPage/${selectedRoom.hotelId}`);
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
        dispatch(bookRoom(dataBookRoom));
        navigate("/hotelBooking");
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

  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${hours}h${minutes} ngày ${day}/${month}/${year}`;

  const calculateDays = (): number => {
    const { startDate, endDate } = range[0];
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    return 0;
  };

  const calculateHours = (
    checkInTime: Dayjs | null,
    checkOutTime: Dayjs | null
  ): number => {
    if (!checkInTime || !checkOutTime) return 0;

    const duration = dayjs.duration(checkOutTime.diff(checkInTime));
    const hours = duration.hours();
    const minutes = duration.minutes();
    const time = hours + minutes / 60;
    return parseFloat(time.toFixed(2));
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
                  <p
                    className="mb-2 font-italic"
                    style={{ fontWeight: "bold" }}
                  >
                    Nhận phòng
                  </p>
                  {isDate ? (
                    <input
                      type="text"
                      className="date"
                      readOnly
                      onClick={handleOpen}
                      value={`14:00 - ${format(
                        range[0].startDate,
                        "dd/MM/yyyy"
                      )}`}
                    />
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        onChange={(newValue) => setCheckInTime(newValue)}
                      />
                    </LocalizationProvider>
                  )}
                  <p
                    className="my-2 font-italic"
                    style={{ fontWeight: "bold" }}
                  >
                    Trả phòng
                  </p>
                  {isDate ? (
                    <>
                      <input
                        type="text"
                        className="date"
                        readOnly
                        onClick={handleOpen}
                        value={`12:00 - ${format(
                          range[0].endDate,
                          "dd/MM/yyyy"
                        )}`}
                      />
                      <p style={{ marginTop: "20px" }}>
                        (Để đặt phòng theo ngày, quý khách vui lòng liên hệ trực
                        tiếp khách sạn để chọn giờ phù hợp)
                      </p>
                    </>
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
                      <strong>
                        {calculateHours(checkInTime, checkOutTime)} giờ
                      </strong>
                    </p>
                  )}
                </div>
                <p>
                  Giảm giá: <span className="font-weight-bold">10%</span>
                </p>
                <hr />
                <div className="font-weight-bold">
                  <span className="text-uppercase">Tổng:</span>{" "}
                  {isDate
                    ? selectedRoom.roomData.price * calculateDays() * 0.9
                    : // Adjusted calculation based on calculateHours
                      (calculateHours(checkInTime, checkOutTime) <= 2
                        ? selectedRoom.roomData.price
                        : selectedRoom.roomData.price *
                          calculateHours(checkInTime, checkOutTime) *
                          0.9
                      ).toLocaleString("vi-VN")}{" "}
                  đ - Thanh toán trực tiếp
                </div>
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
                      bookedTime: formattedDate,
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
      >
        <Fade in={open}>
          <Box sx={style}>
            <DateRange
              onChange={(item) => setRange([item.selection as any])}
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
