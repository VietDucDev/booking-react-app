import React, { Fragment } from "react";
import Carousel_RoomPage_Img from "../components/Carousel_RoomPage_Img";

const RoomPage = () => {
  return (
    <Fragment>
      <div className="mt-5 container" id="container">
        <div className="row align-items-center">
          <div className="col bg-info">
            <div className="row">
              <div className="col">
                <div className="row mb-3">
                  <div className="col-8">
                    <strong>GO2JOY - MOKA ROOM</strong>
                  </div>
                  <div className="col-4">
                    <i className="fa-regular fa-heart"></i>
                    Yêu thích
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-8">
                    <strong>
                      221/19 Võ Văn Tần, Phường 5, Quận 3, Hồ Chí Minh
                    </strong>
                  </div>
                  <div className="col-4">
                    <i className="fa-regular fa-star"></i> ⚫ 721 Đánh giá
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
            <div className="row">
              <div className="col">
                <a href="">Tổng quan</a>
                <a href="">Danh sách phòng</a>
                <a href="">Tiện ích Đánh giá</a>
                <a href="">Chính sách khách sạn</a>
              </div>
            </div>
            {/* ------------- */}
            <div className="">
              <div className="row">
                <div className="col">
                  <h2>Giới thiệu</h2>
                  <div>
                    <p className="m-0">Liên hệ chị chủ xinh đẹp: 0909239058</p>
                    <p>** Lưu ý: Khách book qua đêm lưu ý 10h sáng trả phòng</p>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row">
                <div className="col">
                  <h2>Danh sách phòng</h2>
                  <div className="row">
                    <div className="col-3">img</div>
                    <div className="col-3">
                      <p>Thông tin phòng</p>
                      <p>Deluxe Room with Big Window</p>
                      <div>
                        <p>Cửa sổ</p>
                        <p>Thành phố</p>
                      </div>
                      <div>
                        <a href="">Xem chi tiết phòng</a>
                      </div>
                    </div>
                    <div className="col-3">Đặc điểm nổi bật</div>
                    <div className="col-3">Giá phòng</div>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              <div className="row">
                <div className="row">
                  <strong>Tiện nghi</strong>
                </div>
                <div className="row">
                  <div className="col-3">wifi</div>
                  <div className="col-3">2</div>
                  <div className="col-3">3</div>
                  <div className="col-3">4</div>
                  <div className="col-3">5</div>
                  <div className="col-3">6</div>
                </div>
                <div className="row">
                  <a href="">Hiển thị thêm</a>
                </div>
              </div>
              {/* ------------- */}
              <div className="row">
                <div className="row">
                  <div className="col-6">
                    <p>
                      <strong>Đánh giá</strong>
                    </p>
                    <p>722 đánh giá</p>
                  </div>
                  <div className="col-6">số sao các loại</div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">Khách hàng: abc123</div>
                      <div className="col-6">Phòng: Deluxe Room</div>
                    </div>
                    <div className="row">
                      <p>Nhân viên thân thiện, phòng giống hình</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <a href="">Hiển thị thêm</a>
                </div>
              </div>
              {/* ------------- */}
              <div className="row">Địa chỉ</div>
              {/* ------------- */}
              <div className="row">
                <div className="row">
                  <strong>Chính sách nhận - trả phòng</strong>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          <strong>Theo giờ</strong>
                        </p>
                        <p>Mở cửa từ 10:00</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <strong>Qua đêm</strong>
                        </p>
                        <p>22:00 - 10:00</p>
                      </div>
                      <div className="col-4">
                        <p>
                          <strong>Theo ngày</strong>
                        </p>
                        <p>14:00 - 11:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <p>
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
    </Fragment>
  );
};

export default RoomPage;
