import { Button } from "@mui/material";
import { Fragment } from "react";
import "../style/sass/_hotelListPage.scss";

const HotelListPage = () => {
  return (
    <Fragment>
      <div className="container-lg main_container">
        <div className="filter_bar_container">
          <div className="row justify-content-md-between mt-3">
            <div className="quick_option_wrapper col-md-8 col-sm-12 gap-2 d-flex justify-content-md-start justify-content-center">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
              >
                Love chair
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
              >
                Bathtub
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
              >
                Smart TV
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
              >
                Restaurant
              </Button>
            </div>
            <div className="detail_options_wrapper col-md-4 col-sm-12 gap-2 d-flex justify-content-md-end justify-content-center mt-md-0 mt-2">
              <Button
                className="mr-3"
                variant="contained"
                color="secondary"
                size="small"
                style={{ color: "white" }}
              >
                <i className="fa-solid fa-sliders"></i>
                Filter
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                style={{ color: "white" }}
              >
                <i className="fa-solid fa-arrow-up-wide-short"></i> Sort
              </Button>
            </div>
          </div>
        </div>

        <div className="hotel_list_map_container mt-3 row">
          <div className="hotel_list_wrapper col-md-8 col-12">
            <p>
              Have <strong>15</strong> hotel in our area
            </p>
            <div className="hotel_list_wrapper">
              <div className="each_hotel_wrapper row ">
                <img
                  className="thumbnail_image my-auto col-md-4 col-sm-12"
                  src="/images/thumbnail_room_img.jpg"
                  alt="thumbnail room image"
                />
                <div className="hotel_info_wrapper my-auto col-md-8 col-sm-12 ">
                  <h3>1001 ĐÊM HOTEL</h3>
                  <div className="some_extension_wrapper">
                    <span>Netflix</span> - <span>Thang máy</span> -{" "}
                    <span>Bồn tắm</span> <br /> <span>Ghế tình yêu</span> -{" "}
                    <span>Máy lạnh</span> - <span>Bồn tắm sục</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-wrapper col-md-4 col-12">Map wrapper</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelListPage;
