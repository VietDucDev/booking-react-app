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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TestComponent from "./TestComponent";

export interface Hotel {
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

//filter function
const getHotelsResult = (allData: Hotel[], queryParams: QueryParams) => {
  let hotelResult = [];
  const rate = queryParams.rate;
  const hotelType = queryParams.filterHotelType;
  if (rate || hotelType) {
    for (let i = 0; i < allData.length; i++) {
      console.log(allData[i].averageMark, parseFloat(rate));

      if (allData[i].averageMark >= parseFloat(rate)) {
        hotelResult.push(allData[i]);
      }
    }
  } else {
    hotelResult = allData;
  }

  return hotelResult;
};

const HotelListPage: React.FC<Hotel> = () => {
  // const filter = useParams();
  const navigate = useNavigate();
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [seacrhParams, setSearchParams] = useSearchParams();
  const districtSearchParams = seacrhParams.get("district_name");
  const hotelTypeSearchParams = seacrhParams.get("hotel_type");
  // const { queryParams } = useSelector((state: RootState) => state.hotelFilter);

  // console.log("currentSearchParams: ", currentSearchParams);

  // console.log("seacrhParams: ", seacrhParams.toString());

  // setSearchParams({ ...seacrhParams, ...filterParams });

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
        console.log("data: ", data);
        const hotelResult = getHotelsResult(data, {
          rate: seacrhParams.get("rate"),
          filterHotelType: seacrhParams.get("filter_hotel_type"),
        });
        console.log("hotelResult: ", hotelResult);

        setHotelList(hotelResult);
        // console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [seacrhParams]);

  // console.log(hotelList);

  const [openSortBox, setOpenSortBox] = useState(false);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const handleOpenSortBox = () => setOpenSortBox(true);
  const handleCloseSortBox = () => setOpenSortBox(false);
  const handleOpenFilterBox = () => setOpenFilterBox(true);
  const handleCloseFilterBox = () => {
    setOpenFilterBox(false);
    // setSearchParams({ ...seacrhParams, ...filterParams });
  };

  const [formats, setFormats] = useState(() => []);
  // console.log("alignment: ", alignment);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
    if (districtSearchParams) {
      const filterParams = {
        facility: newFormats,
        district_name: districtSearchParams,
        // hotel_type: currentSearchParams2,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }
    if (hotelTypeSearchParams) {
      const filterParams = {
        facility: newFormats,
        district_name: hotelTypeSearchParams,
        // hotel_type: currentSearchParams2,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }

    // navigate(`/hotel-list?facility=${newAlignment}`);
  };

  const handleShowRoomDetail = (id: string) => {
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

      <div className="background">
        <div className="container-lg main_container">
          <div className="filter_bar_container">
            <div className="option_wrapper container-md row justify-content-md-between">
              <div className="quick_option_wrapper col-md-8 col-sm-12 gap-2 d-flex justify-content-md-start justify-content-center">
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
                    }}
                    color="primary"
                    value="27"
                    // aria-label="left aligned"
                  >
                    Thang máy
                  </ToggleButton>

                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                      textTransform: "unset",
                    }}
                    color="primary"
                    value="123"
                    // aria-label="left aligned"
                  >
                    Bồn tắm
                  </ToggleButton>

                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                      textTransform: "unset",
                    }}
                    color="primary"
                    value="97"
                    // aria-label="left aligned"
                  >
                    Smart TV
                  </ToggleButton>

                  <ToggleButton
                    size="small"
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                      textTransform: "unset",
                    }}
                    color="primary"
                    value="169"
                    // aria-label="left aligned"
                  >
                    Cửa sổ thông thoáng
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className="detail_options_wrapper col-md-4 col-sm-12 gap-2 d-flex justify-content-md-end justify-content-center mt-md-0 mt-2">
                <Button
                  className="mr-3"
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ color: "white", textTransform: "unset" }}
                  onClick={handleOpenFilterBox}
                >
                  <i className="fa-solid fa-sliders"></i>
                  Bộ lọc
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ color: "white", textTransform: "unset" }}
                  onClick={handleOpenSortBox}
                >
                  <i className="fa-solid fa-arrow-up-wide-short"></i> Xắp sếp
                </Button>
              </div>
            </div>
          </div>

          <div className="hotel_list_map_container row">
            <p className="mb-2 mt-5 col-12">
              Have <strong>{hotelList.length}</strong> hotel in our area
            </p>

            {/* <TestComponent /> */}

            <div className="hotel_list_wrapper col-md-8 col-12">
              {/* each hotel wrapper */}
              {hotelList.map((hotel: Hotel, index: number) => (
                <div
                  key={index}
                  className="each_hotel_wrapper row"
                  onClick={() => handleShowRoomDetail(hotel.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="thumbnail_image my-auto col-md-4 col-sm-12"
                    src={hotel.thumbnail}
                    alt="thumbnail room image"
                  />
                  <div className="hotel_info_wrapper my-auto col-md-8 col-sm-12 ">
                    <h3>{hotel.name}</h3>
                    <div className="some_extension_wrapper">
                      {/* First row of facilities */}
                      <div className="row">
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
                      <div className="row">
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

                    <div className="other_info_wrapper">
                      <p
                        className="mb-0"
                        style={{ display: "flex", justifyContent: "end" }}
                      >
                        <strong style={{ color: "#135D66" }}>
                          {hotel.firstHours} giờ đầu
                        </strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span style={{ color: "#135D66" }}>
                          <i className="fa-solid fa-star">
                            {" "}
                            {hotel.averageMark}
                          </i>{" "}
                          ({hotel.totalReview} Đánh giá)
                        </span>{" "}
                        <strong>
                          {hotel.originPrice.toLocaleString("vi-VN", {
                            minimumFractionDigits: 0,
                          })}
                          đ
                        </strong>
                      </p>
                      <p className="m-0 d-flex justify-content-between">
                        <span>{hotel.districtName}</span>{" "}
                        <span
                          style={{ color: "dodgerblue", fontSize: "0.9rem" }}
                        >
                          {hotel.roomStatus}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* each hotel wrapper */}
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
