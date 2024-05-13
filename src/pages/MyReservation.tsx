import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { cancelRoom } from "../reducers/HotelsSlice";
import { BookRoomProps } from "./room-page/RoomPage";
import Swal from "sweetalert2";
import noResultImage from "../../public/images/No_result_img.gif";
import CheckoutHotelService from "../sever-interaction/CheckoutHotelService";
import { Button } from "@mui/material";

const MyReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookedHotels } = useSelector((state: RootState) => state.bookedRooms);

  const handleShowRoomDetail = (id: string) => {
    navigate(`/roomPage/${id}`);
  };

  const handleCancleBooking = async (hotel: BookRoomProps) => {
    const confirmResult = await Swal.fire({
      title: "Bạn có chắc chắn muốn hủy đặt phòng?",
      text: "Bấm OK để xác nhận.",
      icon: "question",
      iconColor: "#04413C",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy bỏ",
      confirmButtonText: "OK",
      color: "#04413C",
    });
    if (confirmResult.isConfirmed) {
      dispatch(cancelRoom(hotel));
    }
  };

  const handleBackToHomePage = () => {
    navigate("/home");
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await CheckoutHotelService.deleteCheckoutHotel(id);
      console.log("Delete successful", response);
    } catch (error) {
      console.error("Error deleting hotel", error);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center px-4 px-lg-0"
        style={{ marginTop: "65px" }}
      >
        <div className="my-4">
          <div className="d-flex align-items-center flex-wrap">
            <Button
              className="btn btn-primary col-12 col-lg-6"
              onClick={handleBackToHomePage}
              variant="contained"
            >
              <i className="fa-solid fa-arrow-left"></i> Quay về trang chủ
            </Button>

            <h2 className="col-12 col-lg-6 my-4 text-center font-weight-bold">
              Đặt phòng của tôi
            </h2>
          </div>

          <div className="container px-0">
            {bookedHotels.length === 0 ? (
              <div className="mt-5 text-center">
                <img
                  src={noResultImage}
                  alt=""
                  style={{ width: "300px", textAlign: "center" }}
                />
                <h4>Bạn chưa có đặt phòng</h4>
                <p className="text-secondary">
                  Hãy đặt phòng để tận hưởng nhé!
                </p>
              </div>
            ) : (
              <div>
                {bookedHotels.map((hotel, index) => (
                  <div
                    className="mb-4"
                    key={index}
                    style={{
                      border: "1px solid #DDDDDD",
                      borderRadius: "7px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="d-flex justify-content-between p-3 align-items-center">
                      <p
                        className="m-0 font-weight-bold"
                        style={{ fontSize: "20px", color: "#003c43" }}
                      >
                        {hotel.hotelName}
                      </p>
                      <p
                        className="m-0 text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleShowRoomDetail(hotel.hotelId)}
                      >
                        Chi tiết
                      </p>
                    </div>

                    <div
                      className="d-flex justify-content-between align-items-center p-3"
                      style={{
                        borderTop: "1px solid #DDDDDD",
                        borderBottom: "1px solid #DDDDDD",
                      }}
                    >
                      <div className="d-flex flex-column flex-md-row">
                        <div className="col-12 col-md-6 px-0 mb-3 mb-md-0 mr-0 mr-md-3 mr-lg-4">
                          <img
                            src={hotel.roomData?.roomImages[0]}
                            className="img-fluid h-100"
                            style={{ borderRadius: "5px" }}
                          />
                        </div>

                        <div
                          className="col-12 col-md-6 px-0"
                          style={{ fontSize: "20px" }}
                        >
                          <p>
                            Thời gian đặt phòng:{" "}
                            <strong>{hotel.bookedTime}</strong>
                          </p>
                          <p className="m-0 mb-3">
                            <strong>2</strong> giờ đầu
                          </p>
                          <p className="m-0 mb-3">
                            Phòng: <strong>{hotel.roomData?.roomName}</strong> -
                            Nhận phòng: <strong>19h30</strong>
                          </p>
                          <p className="m-0">
                            Giá:{" "}
                            <span className="font-weight-bold">
                              {hotel.roomData?.price.toLocaleString()} đ
                            </span>{" "}
                            - Thanh toán sau tại khách sạn
                          </p>
                          <button
                            className="btn btn-danger mt-4"
                            onClick={() => {
                              handleCancleBooking(hotel);
                              handleDelete(hotel.roomId);
                            }}
                          >
                            Hủy đặt phòng
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <strong>Địa chỉ:</strong> {hotel.hotelAddress}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReservation;
