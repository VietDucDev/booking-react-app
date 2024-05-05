import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { cancelRoom } from "../reducers/HotelsSlice";
import { BookRoomProps } from "./RoomPage/RoomPage";
import CheckoutHotelService from "../sever-interaction/CheckoutHotelService";

const MyReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookedHotels } = useSelector((state: RootState) => state.bookedRooms);

  const handleShowRoomDetail = (id: string) => {
    navigate(`/roomPage/${id}`);
  };

  const handleCancleBooking = (hotel: BookRoomProps) => {
    const confirmation = window.confirm("Bạn có chắc chắn muốn hủy đặt phòng?");

    if (confirmation) {
      dispatch(cancelRoom(hotel));
    }
  };

  const handleBackToHomePage = () => {
    navigate("/home");
  };

  // ------

  // bookedHotels.map((hotel) => {});
  //-------

  const handleDelete = async (id: number) => {
    try {
      // Thực hiện gọi phương thức deleteCheckoutHotel từ service
      const response = await CheckoutHotelService.deleteCheckoutHotel(id);
      // Xử lý kết quả trả về (nếu cần)
      console.log("Delete successful", response);
    } catch (error) {
      // Xử lý lỗi (nếu có)
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
            <button
              className="btn btn-primary col-12 col-lg-6"
              onClick={handleBackToHomePage}
            >
              <i className="fa-solid fa-arrow-left"></i> Quay về trang chủ
            </button>
            <h2 className="col-12 col-lg-6 my-4 text-center font-weight-bold">
              Đặt phòng của tôi
            </h2>
          </div>

          <div className="container px-0">
            {bookedHotels.length === 0 ? (
              <div className="mt-5">
                <img
                  src="https://go2joy.vn/_nuxt/search-not-found.47b1f6f6.png"
                  alt=""
                />
                <h4>Bạn chưa có đặt phòng</h4>
                <p className="text-secondary">Hãy đặt phòng để tận hưởng nhé</p>
                <button
                  className="btn btn-primary"
                  onClick={handleBackToHomePage}
                >
                  <i className="fa-solid fa-arrow-left"></i> Quay về trang chủ
                </button>
              </div>
            ) : (
              <div>
                {bookedHotels.map((hotel, index) => (
                  <div
                    className="mb-4"
                    key={index}
                    style={{ border: "1px solid gray", borderRadius: "7px" }}
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
                        borderTop: "1px solid gray",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      <div className="d-flex flex-column flex-md-row">
                        <div className="col-12 col-md-6 px-0 mb-3 mb-md-0 mr-0 mr-md-3 mr-lg-4">
                          <img
                            src={hotel.roomData?.roomImages[0]}
                            // alt={hotel.name}
                            className="img-fluid h-100"
                            style={{ borderRadius: "5px" }}
                          />
                        </div>

                        <div
                          className="col-12 col-md-6 px-0"
                          style={{ fontSize: "20px" }}
                        >
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
