import { Fragment, useEffect, useState } from "react";
import Carousel_RoomPage_Img from "./Carousel_RoomPage_Img";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import "../../style/sass/_roomPage.scss";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

interface DataProps {
  id: number;
  name: string;
  address: string;
  avergeMark: number;
  districtName: string;
  discountPrice: number;
  facilityList: [];
  firstHours: number;
  hotelType: string;
  imgList: string[];
  originPrice: number;
  roomList: {
    roomName: string;
    price: number;
    area: number;
    roomImages: string[];
  }[];
  roomStatus: string;
  sn: number;
  thumbnail: string;
  totalReview: number;
}

const RoomPage = () => {
  const [data, setData] = useState<DataProps>();

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
  return (
    <Fragment>
      <div className="container" id="container-roomPage">
        <div className="row align-items-center">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-8 hotel-name-wrapper">
                    <div>{data?.name}</div>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <div className="con-like">
                      <input className="like" type="checkbox" title="like" />
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
                    <i className="fa-solid fa-map"></i>
                    <strong>{data?.address}</strong>
                  </div>
                  <div className="col-4">
                    <i className="fa-regular fa-star"></i> • 721 Đánh giá
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
            <div className="row my-3 py-3 nav-info sticky-top">
              <div className="col">
                <a href="#introduce" className="mr-4" onClick={handleClickATag}>
                  Tổng quan
                </a>
                <a href="#room-list" className="mr-4" onClick={handleClickATag}>
                  Danh sách phòng
                </a>
                <a href="" className="mr-4" onClick={handleClickATag}>
                  Tiện ích
                </a>
                <a href="" className="mr-4" onClick={handleClickATag}>
                  Đánh giá
                </a>
                <a href="" className="mr-4" onClick={handleClickATag}>
                  Chính sách khách sạn
                </a>
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
                            <p>Xem chi tiết phòng</p>
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
                        <button className="btn booking_btn">Đặt phòng</button>
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
                    <div className="col-3">Quầy bar</div>
                    <div className="col-3">Truyền hình cáp</div>
                    <div className="col-3">Bếp</div>
                    <div className="col-3">Sàn gỗ</div>
                    <div className="col-3">Vòi hoa sen</div>
                    <div className="col-3">Tủ quần áo</div>
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
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="fa-regular fa-star"></i>
                          <p className="m-0">4.8</p>
                          <p className="m-0">/5</p>
                        </div>
                        <p className="m-0"> • 722 đánh giá</p>
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-2 pt-1">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcellphones.com.vn%2Fsforum%2Favatar-dep&psig=AOvVaw1wEE-L7LMQLY4ciVffu_p2&ust=1713522670291000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDiuMXHy4UDFQAAAAAdAAAAABAE"
                                sx={{ bgcolor: "#003c43" }}
                              />
                            </div>
                            <div className="col-10 p-0">
                              <p className="m-0">5:37 14/02/2024</p>
                              <p>
                                Khách hàng: <strong>abc123</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <p className="m-0">
                            Phòng: <strong>Deluxe Room</strong>
                          </p>
                          <div className="d-flex">
                            <p>Đánh giá: </p>
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
    </Fragment>
  );
};

export default RoomPage;
