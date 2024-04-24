import { Button, Modal } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fragment, useEffect, useState } from "react";
import "../../style/sass/hotel-list-page-scss/_hotelListPage.scss";
import "../../style/sass/hotel-list-page-scss/_sortBox.scss";
import "../../style/sass/hotel-list-page-scss/_filterBox.scss";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Hotel {
  sn: number;
  name: string;
  facilityList: [
    {
      sn: number;
      name: string;
    }
  ];
  originPrice: number;
  discountPrice: number;
  averageMark: number;
  hotelType: string;
  totalReview: number;
  districtName: string;
  firstHours: number;
  percentDirectDiscount: number;
  thumbnail: string;
  roomStatus: string;
  id: string;
}

type QueryParams = {
  price?: number;
  rate?: string | null;
  filterHotelType?: string | null;
};

const getHotelsResult = (allData: Hotel[], queryParams: QueryParams) => {
  const { rate, filterHotelType } = queryParams;

  const hotelResult = allData.filter((hotel) => {
    return (
      (!rate || hotel.averageMark >= parseFloat(rate)) &&
      (!filterHotelType || hotel.hotelType === filterHotelType)
    );
  });

  return hotelResult;
};

const HotelListPage: React.FC<Hotel> = () => {
  const navigate = useNavigate();
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [seacrhParams, setSearchParams] = useSearchParams();
  const districtSearchParams = seacrhParams.get("district_name");
  const hotelTypeSearchParams = seacrhParams.get("hotel_type");

  useEffect(() => {
    const districtName = seacrhParams.get("district_name");
    const hotelType = seacrhParams.get("hotel_type");

    let url = "http://localhost:3000/hotels";

    if (districtName) {
      url += `?districtName=${districtName}`;
    } else if (hotelType) {
      url += `?hotelType=${hotelType}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const hotelResult = getHotelsResult(data, {
          rate: seacrhParams.get("rate"),
          filterHotelType: seacrhParams.get("filter_hotel_type"),
        });

        setHotelList(hotelResult);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [seacrhParams]);

  const [openSortBox, setOpenSortBox] = useState(false);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const handleOpenSortBox = () => setOpenSortBox(true);
  const handleCloseSortBox = () => setOpenSortBox(false);
  const handleOpenFilterBox = () => setOpenFilterBox(true);
  const handleCloseFilterBox = () => {
    setOpenFilterBox(false);
    // setSearchParams({ ...seacrhParams, ...filterParams });
  };

  const [formats, setFormats] = useState<string[]>(() => []);

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
    if (districtSearchParams) {
      const filterParams = {
        facility: newFormats,
        district_name: districtSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }
    if (hotelTypeSearchParams) {
      const filterParams = {
        facility: newFormats,
        district_name: hotelTypeSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }
  };

  const showRoomDetail = (id: string) => {
    navigate(`/roomPage/${id}`);
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
      {/* <NavBarFake /> */}

      <div className="main_container col-10">
        <div className="filter_bar_container">
          <div className="option_wrapper d-flex justify-content-between col-10 bg-white">
            <div className="quick_option_wrapper col-md-8 col-sm-12">
              <ToggleButtonGroup
                value={formats}
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  size="small"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    padding: "6px 15px",
                  }}
                  color="primary"
                  value="27"
                >
                  Thang máy
                </ToggleButton>

                <ToggleButton
                  size="small"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    padding: "8px 15px",
                  }}
                  color="primary"
                  value="123"
                >
                  Bồn tắm
                </ToggleButton>

                <ToggleButton
                  size="small"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    padding: "6px 15px",
                  }}
                  color="primary"
                  value="97"
                >
                  Smart TV
                </ToggleButton>

                <ToggleButton
                  size="small"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                    border: "1px solid #ccc",
                    padding: "6px 15px",
                  }}
                  color="primary"
                  value="169"
                >
                  Cửa sổ thông thoáng
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            <div className="detail_options_wrapper col-md-4 col-sm-12 d-flex justify-content-md-end mt-md-0">
              <Button
                className="mr-3"
                variant="contained"
                size="small"
                style={{ color: "white", textTransform: "unset" }}
                onClick={handleOpenFilterBox}
              >
                <i className="fa-solid fa-sliders"></i>
                Bộ lọc
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ color: "white", textTransform: "unset" }}
                onClick={handleOpenSortBox}
              >
                <i className="fa-solid fa-arrow-up-wide-short"></i> Xắp sếp
              </Button>
            </div>
          </div>
        </div>

        <div className="hotel_list_map_container row mt-5">
          <div className="hotel_list_wrapper col-lg-8 col-md-8 col-12">
            <p className="col-12 my-3 pl-0">
              Có <strong>{hotelList.length}</strong> khách sạn phù hợp dành cho
              bạn
            </p>
            {/* each hotel wrapper */}
            {hotelList.map((hotel: Hotel, index: number) => (
              <div
                key={index}
                className="each_hotel_wrapper row"
                onClick={() => showRoomDetail(hotel.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="thumbnail_image col-md-4 col-sm-12"
                  src={hotel.thumbnail}
                  alt="thumbnail room image"
                />
                <div className="hotel_info_wrapper col-md-8 col-sm-12 d-flex flex-column justify-content-between pr-0">
                  <div>
                    <h5 style={{ lineHeight: "20px", fontWeight: "600" }}>
                      {hotel.name}
                    </h5>
                    <div className="some_extension_wrapper">
                      {/* First row of facilities */}
                      <div className="row" style={{ fontSize: "13px" }}>
                        <div className="col">
                          {hotel.facilityList
                            .slice(0, 3)
                            .map((facility, index) => (
                              <span key={index}>
                                {facility.name}
                                {index < 2 && " - "}
                              </span>
                            ))}
                        </div>
                      </div>
                      {/* Second row of facilities */}
                      <div className="row" style={{ fontSize: "13px" }}>
                        <div className="col">
                          {hotel.facilityList
                            .slice(3, 6)
                            .map((facility, index) => (
                              <span key={index + 3}>
                                {facility.name}
                                {index < 2 && " - "}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="other_info_wrapper">
                    <p
                      className="mb-0"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <strong style={{ color: "#135D66" }}>
                        {hotel.firstHours} giờ đầu
                      </strong>
                    </p>
                    <div className="m-0 d-flex justify-content-between">
                      <span>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#135D66" }}
                        ></i>
                        {hotel.averageMark} ({hotel.totalReview} Đánh giá)
                      </span>
                      <strong>
                        {hotel.originPrice.toLocaleString("vi-VN", {
                          minimumFractionDigits: 0,
                        })}
                        đ
                      </strong>
                    </div>
                    <p
                      className="m-0 d-flex justify-content-between"
                      style={{ fontSize: "14px" }}
                    >
                      <span>{hotel.districtName}</span>{" "}
                      <span style={{ color: "dodgerblue", fontSize: "0.9rem" }}>
                        {hotel.roomStatus}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* each hotel wrapper */}
          </div>
          <div className="map-wrapper col-lg-4">
            {/* <iframe
              src="https://map.map4d.vn/embed/place/detail/5d13321a77c88e2798b970e7?"
              height="100%"
              allowFullScreen
              style={{
                borderRadius: "20px",
                position: "fixed",
                top: "130px",
                border: "none",
              }}
            ></iframe> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelListPage;
