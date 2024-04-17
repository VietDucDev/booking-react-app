import { Button, Modal, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Fragment, useState } from "react";
import "../../style/sass/hotel-list-page-scss/_hotelListPage.scss";
import "../../style/sass/hotel-list-page-scss/_sortBox.scss";
import "../../style/sass/hotel-list-page-scss/_filterBox.scss";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import React from "react";

export interface HotelListProps {
  // hotels: Hotel[];
  handleOpenSortBox: () => void;
  handleCloseSortBox: () => void;
  handleOpenFilterBox: () => void;
  handleCloseFilterBox: () => void;
  onCloseFilterBox: () => void;
  onCloseSortBox: () => void;
}

const HotelListPage: React.FC<HotelListProps> = () => {
  const [openSortBox, setOpenSortBox] = useState(false);
  const [openFilterBox, setOpenFilterBox] = useState(false);

  const handleOpenSortBox = () => setOpenSortBox(true);
  const handleCloseSortBox = () => setOpenSortBox(false);

  const handleOpenFilterBox = () => setOpenFilterBox(true);
  const handleCloseFilterBox = () => setOpenFilterBox(false);

  const [alignment, setAlignment] = React.useState<string | null>("");
  console.log("alignment: ", alignment);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Fragment>
      {/* Filter */}
      <Modal
        open={openFilterBox}
        onClose={handleCloseFilterBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FilterBox onCloseFilterBox={handleCloseFilterBox} />
      </Modal>
      {/* Sort */}
      <Modal
        open={openSortBox}
        onClose={handleCloseSortBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SortBox onCloseSortBox={handleCloseSortBox} />
      </Modal>
      <div className="background">
        <div className="container-lg main_container">
          <div className="filter_bar_container">
            <div className="option_wrapper row justify-content-md-between mt-3">
              <div className="quick_option_wrapper col-md-8 col-sm-12 gap-2 d-flex justify-content-md-start justify-content-center">
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                    color="primary"
                    value="Ghế tình yêu"
                    // aria-label="left aligned"
                  >
                    Ghế tình yêu
                  </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                    color="primary"
                    value="Bồn tắm"
                    // aria-label="left aligned"
                  >
                    Bồn tắm
                  </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                    color="primary"
                    value="Smart TV"
                    // aria-label="left aligned"
                  >
                    Smart TV
                  </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                    color="primary"
                    value="Nhà hàng"
                    // aria-label="left aligned"
                  >
                    Nhà hàng
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div className="detail_options_wrapper col-md-4 col-sm-12 gap-2 d-flex justify-content-md-end justify-content-center mt-md-0 mt-2">
                <Button
                  className="mr-3"
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ color: "white" }}
                  onClick={handleOpenFilterBox}
                >
                  <i className="fa-solid fa-sliders"></i>
                  Bộ lọc
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ color: "white" }}
                  onClick={handleOpenSortBox}
                >
                  <i className="fa-solid fa-arrow-up-wide-short"></i> Xắp sếp
                </Button>
              </div>
            </div>
          </div>

          <div className="hotel_list_map_container row">
            <p>
              Have <strong>15</strong> hotel in our area
            </p>
            <div className="hotel_list_wrapper col-md-8 col-12">
              <div className="hotel_list_wrapper">
                {/* each hotel wrapper */}
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

                    <div className="other_info_wrapper">
                      <p className="m-0 text-end">
                        <strong style={{ color: "#135D66" }}>2 giờ đầu</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span style={{ color: "#135D66" }}>
                          <i className="fa-solid fa-star"> 4.9</i> (69 Đánh giá)
                        </span>{" "}
                        <strong>400.000đ</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span>Hà Nội</span>{" "}
                        <span style={{ color: "#135D66", fontSize: "0.9rem" }}>
                          Còn phòng hôm nay
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* each hotel wrapper */}

                {/* each hotel wrapper */}
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

                    <div className="other_info_wrapper">
                      <p className="m-0 text-end">
                        <strong style={{ color: "#135D66" }}>2 giờ đầu</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span style={{ color: "#135D66" }}>
                          <i className="fa-solid fa-star"> 4.9</i> (69 Đánh giá)
                        </span>{" "}
                        <strong>400.000đ</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span>Hà Nội</span>{" "}
                        <span style={{ color: "#135D66", fontSize: "0.9rem" }}>
                          Còn phòng hôm nay
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* each hotel wrapper */}

                {/* each hotel wrapper */}
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

                    <div className="other_info_wrapper">
                      <p className="m-0 text-end">
                        <strong style={{ color: "#135D66" }}>2 giờ đầu</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span style={{ color: "#135D66" }}>
                          <i className="fa-solid fa-star"> 4.9</i> (69 Đánh giá)
                        </span>{" "}
                        <strong>400.000đ</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span>Hà Nội</span>{" "}
                        <span style={{ color: "#135D66", fontSize: "0.9rem" }}>
                          Còn phòng hôm nay
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* each hotel wrapper */}

                {/* each hotel wrapper */}
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

                    <div className="other_info_wrapper">
                      <p className="m-0 text-end">
                        <strong style={{ color: "#135D66" }}>2 giờ đầu</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span style={{ color: "#135D66" }}>
                          <i className="fa-solid fa-star"> 4.9</i> (69 Đánh giá)
                        </span>{" "}
                        <strong>400.000đ</strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span>Hà Nội</span>{" "}
                        <span style={{ color: "#135D66", fontSize: "0.9rem" }}>
                          Còn phòng hôm nay
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* each hotel wrapper */}
              </div>
            </div>
            <div className="map-wrapper col-md-4 col-12">
              <iframe
                src="https://map.map4d.vn/embed/place/detail/5d13321a77c88e2798b970e7?"
                width="100%"
                height="100%"
                allowFullScreen
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelListPage;
