import React, { Fragment } from "react";
import Carousel_RoomPage_Img from "./Carousel_RoomPage_Img";
import Carousel_Bootstrap from "./Carousel_Bootstrap";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import "../../style/sass/_roomPage.scss";
import Footer from "../../components/Footer";

const RoomPage = () => {
  const handleClickATag = (event) => {
    // Ngăn chặn hành vi mặc định của trình duyệt
    event.preventDefault();

    // Thực hiện các hành động khác ở đây nếu cần
    console.log("Bạn đã nhấp vào liên kết");
  };
  return (
    <Fragment>
      <div className="container" id="container-roomPage">
        <div className="row align-items-center">
          <div className="col">
            <div className="row mt-4">
              <div className="col">
                <div className="row mb-3">
                  <div className="col-8">
                    <h2>
                      <strong>GO2JOY - MOKA ROOM</strong>
                    </h2>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <i className="fa-regular fa-heart"></i>
                    <p className="mb-0 ml-2 ">Yêu thích</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-8">
                    <i className="fa-solid fa-map"></i>
                    <strong>
                      221/19 Võ Văn Tần, Phường 5, Quận 3, Hồ Chí Minh
                    </strong>
                  </div>
                  <div className="col-4">
                    <i className="fa-regular fa-star"></i> • 721 Đánh giá
                  </div>
                </div>
              </div>
            </div>
            {/* ------------- */}
            <div className="row">
              <div className="col">
                <Carousel_RoomPage_Img />
              </div>
            </div>
            {/* ------------- */}
            <div className="row my-5 nav-info">
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
                    <p className="m-0">Liên hệ chị chủ xinh đẹp: 0909239058</p>
                    <p>** Lưu ý: Khách book qua đêm lưu ý 10h sáng trả phòng</p>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row mb-4" id="room-list">
                <div className="col">
                  <h2 className="mb-4">Danh sách phòng</h2>
                  <div className="row room-item">
                    <div className="col-3">
                      <Carousel_Bootstrap />
                    </div>
                    <div className="col-3">
                      <p>Thông tin phòng</p>
                      <p>Deluxe Room with Big Window</p>
                      <div className="d-flex">
                        <p>Cửa sổ</p>
                        <p>Thành phố</p>
                      </div>
                      <div>
                        <a href="" onClick={handleClickATag}>
                          Xem chi tiết phòng
                        </a>
                      </div>
                    </div>
                    <div className="col-3">Đặc điểm nổi bật</div>
                    <div className="col-3">
                      <p>Giá phòng</p>
                      <p>
                        <strong>300.000 đ</strong>
                      </p>
                      <button className="btn btn-bookroom">Đặt phòng</button>
                    </div>
                  </div>
                  {/* ----------- */}
                  <div className="row room-item">
                    <div className="col-3">
                      <Carousel_Bootstrap />
                    </div>
                    <div className="col-3">
                      <p>Thông tin phòng</p>
                      <p>Deluxe Room with Big Window</p>
                      <div className="d-flex">
                        <p>Cửa sổ</p>
                        <p>Thành phố</p>
                      </div>
                      <div>
                        <a href="" onClick={handleClickATag}>
                          Xem chi tiết phòng
                        </a>
                      </div>
                    </div>
                    <div className="col-3">Đặc điểm nổi bật</div>
                    <div className="col-3">
                      <p>Giá phòng</p>
                      <p>
                        <strong>300.000 đ</strong>
                      </p>
                      <button className="btn btn-bookroom">Đặt phòng</button>
                    </div>
                  </div>
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
                            <Rating name="read-only" value={2} readOnly />
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
                      // allowFullScreen="true"
                      // loading="lazy"
                      // referrerpolicy="no-referrer-when-downgrade"
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
