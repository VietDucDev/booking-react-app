import { Fragment, useEffect, useState } from "react";
import Carousel_RoomPage_Img from "./Carousel_RoomPage_Img";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import "../../style/sass/_roomPage.scss";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Backdrop, Box, Fade } from "@mui/material";
import { auth } from "../log-firebase/Firebase";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../reducers/HotelsSlice";

interface Room {
  roomName: string;
  price: number;
  area: number;
  roomImages: string[];
}

export interface DataProps {
  id: string;
  name: string;
  address: string;
  averageMark: number;
  districtName: string;
  discountPrice: number;
  facilityList: string[];
  firstHours: number;
  hotelType: string;
  imgList: string[];
  originPrice: number;
  roomList: Room[];
  roomStatus: string;
  sn: number;
  thumbnail: string;
  totalReview: number;
}

export interface BookRoomProps {
  hotelId: string;
  hotelName: string;
  hotelAddress: string;
  roomId: number;
  roomData: Room;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const RoomPage = () => {
  const dispatch = useDispatch();
  const [isLoggin, setIsLoggin] = useState<boolean>(true);

  const [data, setData] = useState<DataProps>();
  const [dataRoomItem, setDataRoomItem] = useState<Room>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/hotels?id=${id}`
        );
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickATag = (_event: any) => {
    console.log("Bạn đã nhấp vào liên kết");
  };

  const handleBookRoom = (dataBookRoom: BookRoomProps) => {
    dispatch(bookRoom(dataBookRoom));
    console.log("Đã đặt phòng: ", dataBookRoom);
  };

  const handleBookRoomFail = () => {
    navigate("/login_logout");
  };

  return (
    <Fragment>
      <div className="container" id="container-roomPage">
        <div className="row align-items-center">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-8 hotel-name-wrapper">
                    <div>
                      <p className="hotel-name m-0">{data?.name}</p>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <div className="con-like">
                      <input
                        className="like"
                        type="checkbox"
                        title="like"
                        disabled={!user}
                      />
                      <div className="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="outline"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          className="celebrate"
                        >
                          <polygon
                            className="poly"
                            points="10,10 20,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="10,50 20,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="20,80 30,70"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,10 80,20"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="90,50 80,50"
                          ></polygon>
                          <polygon
                            className="poly"
                            points="80,80 70,70"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                    <p className="mb-0 ml-2 ">Yêu thích</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-8">
                    <i className="fa-solid fa-map mr-2"></i>
                    <strong>{data?.address}</strong>
                  </div>
                  <div className="col-4 ">
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center ">
                        <i className="fa-solid fa-star mr-1"></i>
                        <p className="m-0">4.8</p>
                        <p className="m-0">/5</p>
                      </div>
                      <p className="m-0 ml-1"> • 722 đánh giá</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------- */}
            <div className="row">
              <div className="col img-list-wrapper">
                <Carousel_RoomPage_Img
                  imgList={data?.imgList || []}
                  showThumbnails={true}
                />
              </div>
            </div>
            {/* ------------- */}
            <div className="" id="introduce">
              <div className="row">
                <div className="col">
                  <h2>Giới thiệu</h2>
                  <div className="my-4">
                    <p>
                      Tọa lạc tại con đường&nbsp;sầm uất,&nbsp;hiện đại,{" "}
                      <strong>GO2JOY&nbsp; - BẠN TÔI ROOM</strong> là khách
                      sạn&nbsp;của sự{" "}
                      <strong>thoải mái&nbsp;và tiện nghi</strong> trên cả tuyệt
                      vời. Từ <strong>GO2JOY&nbsp; - BẠN TÔI ROOM</strong>&nbsp;
                      Quý khách có thể dễ dàng đi chuyển đến{" "}
                      <strong>đường Nguyễn Trãi sầm uất</strong>&nbsp;bậc nhất
                      về đêm tại&nbsp;Quận 5, Trung tâm thương mại
                      <strong> </strong>hay&nbsp;<strong>Chợ Bến Thành</strong>{" "}
                      với khoảng cách không xa
                    </p>
                    <p>
                      👉Phòng "<strong>Cute giường tròn</strong>" mà giá siêu
                      hạt dẻ
                      <br />
                      👉Giá "<strong>Hời</strong>"&nbsp;còn ngay trung tâm&nbsp;
                      <strong>QUẬN 5</strong>&nbsp;hiện đại và{" "}
                      <strong>QUẬN 1</strong> sầm uất
                      <br />
                      👉<strong>Ghế tình yêu</strong>&nbsp;"
                      <strong>Thư giản</strong>"&nbsp;cuối tuần
                    </p>
                    <p>
                      💃&nbsp;Một bước&nbsp;<strong>#Phố Đi Bộ</strong>
                      <br />
                      💃 Hai bước&nbsp;<strong>#Phố Bùi Viện</strong>
                      <br />
                      <strong>💃&nbsp;</strong>Ba bước
                      <strong>&nbsp;#Say men&nbsp;</strong>cùng nàng
                    </p>
                    <p>
                      💋 572/4 Trần Hưng Đạo, Phường 1, Quận 5, Thành phố Hồ Chí
                      Minh <em>( Rẽ vào hẻm chạy thẳng là tới)</em>
                    </p>
                    <p className="m-0">Liên hệ chị chủ xinh đẹp: 0909239058</p>
                    <p>** Lưu ý: Khách book qua đêm lưu ý 10h sáng trả phòng</p>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4" id="room-list">
                <div className="col">
                  <h2 className="mb-4">Danh sách phòng</h2>
                  {data?.roomList.map((room, index) => (
                    <div key={index} className="row room-item">
                      <div className="col-3">
                        <Carousel_RoomPage_Img
                          imgList={room?.roomImages || []}
                          showThumbnails={false}
                        />
                      </div>
                      <div className="col-3">
                        <p style={{ fontWeight: "500" }}>Thông tin phòng</p>
                        <p
                          style={{
                            fontWeight: "700",
                            textTransform: "uppercase",
                            fontSize: "18px",
                          }}
                        >
                          {room.roomName}
                        </p>
                        <span>
                          {room.area}m<sup>2</sup>
                        </span>
                        <div className="d-flex"></div>
                        <div className="room-details-btn">
                          <button>
                            <p
                              onClick={() => {
                                setDataRoomItem(room);
                                handleOpen();
                              }}
                            >
                              Xem chi tiết phòng
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="col-3" style={{ fontWeight: "500" }}>
                        Đặc điểm nổi bật
                      </div>
                      <div className="col-3 bookroom-wrapper">
                        <p style={{ fontWeight: "500" }}>Giá phòng</p>
                        <p
                          style={{
                            fontSize: "17px",
                            color: "#003c43",
                            fontWeight: "600",
                          }}
                        >
                          {data.firstHours} giờ
                        </p>
                        <p style={{ fontSize: "28px", fontWeight: "600" }}>
                          {room.price.toLocaleString("vi-VN")} đ
                        </p>
                        <button
                          onClick={
                            user
                              ? () =>
                                  handleBookRoom({
                                    hotelId: data.id,
                                    hotelName: data.name,
                                    hotelAddress: data.address,
                                    roomId: index,
                                    roomData: room,
                                  })
                              : handleBookRoomFail
                          }
                          className="btn booking_btn"
                        >
                          Đặt phòng
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4" id="utility">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h2 className="mb-4">Tiện nghi</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <i className="fa-solid fa-wifi"></i> wifi
                    </div>
                    {/* <div className="col-3">Quầy bar</div> */}
                    <div className="col-3">
                      <i className="fa-solid fa-tv"></i> Truyền hình cáp
                    </div>
                    <div className="col-3">
                      <i className="fa-solid fa-kitchen-set"></i> Bếp
                    </div>
                    {/* <div className="col-3">Sàn gỗ</div> */}
                    <div className="col-3">
                      <i className="fa-solid fa-shower"></i> Vòi hoa sen
                    </div>
                    <div className="col-3">
                      <i className="fa-solid fa-smoking"></i> Được hút thuốc
                    </div>
                    <div className="col-3">
                      <i className="fa-solid fa-bath"></i> Bồn tắm
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <a href="" onClick={handleClickATag}>
                        Hiển thị thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4" id="review">
                <div className="col">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <h2 className="mb-1">Đánh giá</h2>
                      <div className="d-flex">
                        <div className="d-flex align-items-center">
                          <i className="fa-solid fa-star mr-1 custom-review"></i>
                          <p className="m-0 custom-review">4.8</p>
                        </div>
                        <div className="d-flex align-items-end pb-2">
                          <p className="m-0">/5</p>
                          <p className="m-0 ml-1"> • 722 đánh giá</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col d-flex align-items-center">
                          <div className="rate-name">Sạch sẽ: </div>
                          <div id="nonEditableBar" className="mr-3">
                            <div
                              id="progressBar"
                              style={{ width: "82%" }}
                            ></div>
                          </div>
                          <div>4.8/5</div>
                        </div>
                      </div>
                      {/* ------------ */}
                      <div className="row">
                        <div className="col d-flex align-items-center">
                          <div className="rate-name">Tiện nghi: </div>
                          <div id="nonEditableBar" className="mr-3">
                            <div
                              id="progressBar"
                              style={{ width: "82%" }}
                            ></div>
                          </div>
                          <div>4.8/5</div>
                        </div>
                      </div>
                      {/* ------------ */}
                      <div className="row">
                        <div className="col d-flex align-items-center">
                          <div className="rate-name">Dịch vụ: </div>
                          <div id="nonEditableBar" className="mr-3">
                            <div
                              id="progressBar"
                              style={{ width: "82%" }}
                            ></div>
                          </div>
                          <div>4.8/5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* comment */}
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="pl-3">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                                sx={{
                                  bgcolor: "#003c43",
                                  width: "60px",
                                  height: "60px",
                                }}
                              />
                            </div>
                            <div className="px-0 my-auto">
                              <p className="m-0">5:37 14/02/2024</p>
                              <p className="m-0">
                                Khách hàng: <strong>Đoàn Hoàng</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 my-auto">
                          <p className="m-0">
                            Phòng: <strong>Deluxe Room</strong>
                          </p>
                          <div className="d-flex">
                            <p className="m-0">Đánh giá: </p>
                            <Rating name="read-only" value={4} readOnly />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Nhân viên thân thiện, phòng giống hình</p>
                        </div>
                      </div>
                    </div>
                    {/* comment */}
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="pl-3">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-avatar-don-gian-de-thuong_081757778.jpg"
                                sx={{
                                  bgcolor: "#003c43",
                                  width: "60px",
                                  height: "60px",
                                }}
                              />
                            </div>
                            <div className="px-0 my-auto">
                              <p className="m-0">5:37 14/02/2024</p>
                              <p className="m-0">
                                Khách hàng: <strong>Việt Đức</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 my-auto">
                          <p className="m-0">
                            Phòng: <strong>Deluxe Room</strong>
                          </p>
                          <div className="d-flex">
                            <p className="m-0">Đánh giá: </p>
                            <Rating name="read-only" value={5} readOnly />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Nhân viên thân thiện, phòng giống hình</p>
                        </div>
                      </div>
                    </div>
                    {/* comment */}
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="pl-3">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://i.pinimg.com/564x/e8/48/4d/e8484d6b06aa3f16206627c023a159fd.jpg"
                                sx={{
                                  bgcolor: "#003c43",
                                  width: "60px",
                                  height: "60px",
                                }}
                              />
                            </div>
                            <div className="px-0 my-auto">
                              <p className="m-0">5:37 14/02/2024</p>
                              <p className="m-0">
                                Khách hàng: <strong>Sơn Tùng</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 my-auto">
                          <p className="m-0">
                            Phòng: <strong>Deluxe Room</strong>
                          </p>
                          <div className="d-flex">
                            <p className="m-0">Đánh giá: </p>
                            <Rating name="read-only" value={4} readOnly />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Nhân viên thân thiện, phòng giống hình</p>
                        </div>
                      </div>
                    </div>
                    {/* comment */}
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="pl-3">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/avatar-cute-meo-chibi-600x600.jpg"
                                sx={{
                                  bgcolor: "white",
                                  width: "60px",
                                  height: "60px",
                                }}
                              />
                            </div>
                            <div className="px-0 my-auto">
                              <p className="m-0">5:37 14/02/2024</p>
                              <p className="m-0">
                                Khách hàng: <strong>Đức ĐạiK</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 my-auto">
                          <p className="m-0">
                            Phòng: <strong>Deluxe Room</strong>
                          </p>
                          <div className="d-flex">
                            <p className="m-0">Đánh giá: </p>
                            <Rating name="read-only" value={2} readOnly />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Phòng xấu, nhưng chị lễ tân xinh nên cho 2 sao</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="" onClick={handleClickATag}>
                        Hiển thị thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4">
                <div className="col">
                  <div className="mb-3">
                    <h2>Địa chỉ</h2>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.321653264993!2d105.83976914973866!3d21.009449971837682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8ee6df247f%3A0xe6183d662696d2e9!2zQ8O0bmcgdmnDqm4gVGjhu5FuZyBOaOG6pXQ!5e0!3m2!1svi!2s!4v1713437321245!5m2!1svi!2s"
                      width="100%"
                      height="450"
                      style={{
                        borderRadius: "5px",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4" id="policy">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h2 className="mb-4">Chính sách nhận - trả phòng</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <div className="row">
                        <div className="col-4">
                          <p className="m-0">
                            <strong>Theo giờ</strong>
                          </p>
                          <p>Mở cửa từ 10:00</p>
                        </div>
                        <div className="col-4">
                          <p className="m-0">
                            <strong>Qua đêm</strong>
                          </p>
                          <p>22:00 - 10:00</p>
                        </div>
                        <div className="col-4">
                          <p className="m-0">
                            <strong>Theo ngày</strong>
                          </p>
                          <p>14:00 - 11:00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <p className="m-0">
                        <strong>Chính sách hủy phòng</strong>
                      </p>
                      <p>Hủy phòng miễn phí 1 tiếng trước khi nhận phòng.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* modal room detail */}
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
            <div className="row room-details">
              <div className="col-8">
                <Carousel_RoomPage_Img
                  imgList={dataRoomItem?.roomImages || []}
                  showThumbnails={true}
                />
              </div>
              <div className="col-4 p-0">
                <div className="d-flex">
                  <p
                    className="mt-2"
                    style={{
                      fontWeight: "700",
                      textTransform: "uppercase",
                      fontSize: "18px",
                    }}
                  >
                    {dataRoomItem?.roomName}
                  </p>
                  <button className="btn pt-0 ml-4" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "0px",
                  }}
                >
                  <p style={{ fontWeight: "500" }}>Giá phòng</p>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003c43",
                      fontWeight: "600",
                    }}
                  >
                    {data?.firstHours} giờ
                  </p>
                  <p style={{ fontSize: "28px", fontWeight: "600" }}>
                    {dataRoomItem?.price.toLocaleString("vi-VN")} đ
                  </p>
                  <button
                    className="btn booking_btn"
                    // onClick={() => handleBookRoom(data)}
                  >
                    Đặt phòng
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default RoomPage;
