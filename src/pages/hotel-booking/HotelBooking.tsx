import React, { Fragment } from "react";
import "./HotelBooking.scss";

const HotelBooking = () => {
  return (
    <Fragment>
      <div id="hotel-booking">
        <div id="header">
          <i className="fa-solid fa-arrow-left"></i>
          <p>Xác nhận thanh toán</p>
        </div>
        <div id="order">
          <p className="mb-2 fz20">
            <strong>Lựa chọn của bạn</strong>
          </p>
          <div className="booking-info">
            <div className="hotel-selected">
              <div className="img">
                <img
                  src="/public/images/hotel-booking/hotel-booking.jpg"
                  alt="booking-hotel"
                />
              </div>
              <div className="content">
                <p>Yên Hoa Hotel 2</p>
                <strong>STANDARD ROOM</strong>
                <p>địa chỉ cụ thể</p>
              </div>
            </div>

            <div className="hotel-time">
              <div className="img">
                <img
                  src="/public/images/hotel-booking/hotel-booking.jpg"
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
                <p>Họ và tên</p>
                <strong>Tạ Văn Đức</strong>
              </div>
              <div className="info-box">
                <p>Số điện thoại</p>
                <strong>0987654321</strong>
              </div>
            </div>
            <div className="checkout-total">
              <div className="total-box">
                <p>Giá phòng</p>
                <p>200.000</p>
              </div>
              <div className="total-box">
                <p>Giảm giá</p>
                <p>50.000</p>
              </div>
              <hr />
              <div className="total-box">
                <strong>Tổng thanh toán</strong>
                <strong>150.000</strong>
              </div>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chọn phương thức thanh toán
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Thanh toán trực tiếp
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chuyển khoản
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Visa/Master card
                    </a>
                  </li>
                </ul>
              </div>
              <button className="total-submit">Đặt phòng</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelBooking;
