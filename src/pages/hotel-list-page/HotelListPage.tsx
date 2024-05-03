import { Button, Modal } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fragment, useEffect, useState } from "react";
import "../../style/sass/hotel-list-page-scss/_hotelListPage.scss";
import "../../style/sass/hotel-list-page-scss/_sortBox.scss";
import "../../style/sass/hotel-list-page-scss/_filterBox.scss";
import noResultImage from "../../../public/images/No_result_img.gif";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import HotelServices from "../server-interaction/hotelService";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import TestComponent from "./TestComponent";

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

export type QueryParams = {
  price?: number;
  rate?: string | null;
  filterHotelType?: string | null;
  minPrice?: number;
  maxPrice?: number;
  quickFacilityList?: string[];
  moreFacilitiesList?: string[];
  sort: string | null;
};

//filter function

//filter function

const getHotelsResult = (allData: Hotel[], queryParams: QueryParams) => {
  const {
    rate,
    filterHotelType,
    minPrice,
    maxPrice,
    quickFacilityList,
    moreFacilitiesList,
    sort,
  } = queryParams;

  const hotelResult = allData.filter((hotel) => {
    return (
      (!rate || hotel.averageMark >= parseFloat(rate)) &&
      (!filterHotelType || hotel.hotelType === filterHotelType) &&
      (!minPrice ||
        !maxPrice ||
        (minPrice !== undefined &&
          maxPrice !== undefined &&
          hotel.originPrice >= minPrice &&
          hotel.originPrice <= maxPrice)) &&
      (!quickFacilityList ||
        quickFacilityList.every((quickFacility: string) =>
          hotel.facilityList.some(
            (facility) => facility.sn === parseInt(quickFacility)
          )
        )) &&
      (!moreFacilitiesList ||
        moreFacilitiesList.every((moreFacility: string) =>
          hotel.facilityList.some(
            (facility) => facility.sn === parseInt(moreFacility)
          )
        ))
    );
  });

  if (sort === "2") {
    hotelResult.sort((a, b) => a.originPrice - b.originPrice);
  } else if (sort === "3") {
    hotelResult.sort((a, b) => b.originPrice - a.originPrice);
  } else if (sort === "1") {
    hotelResult.sort((a, b) => b.averageMark - a.averageMark);
  }

  return hotelResult;
};

const HotelListPage: React.FC<Hotel> = () => {
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const districtSearchParams = searchParams.get("district_name");
  const hotelTypeSearchParams = searchParams.get("hotel_type");
  const [searchParams, setSearchParams] = useSearchParams();
  const districtSearchParams = searchParams.get("district_name");
  const hotelTypeSearchParams = searchParams.get("hotel_type");
  // const { queryParams } = useSelector((state: RootState) => state.hotelFilter);

  useEffect(() => {
    const districtName = searchParams.get("district_name");
    const hotelType = searchParams.get("hotel_type");
    const districtName = searchParams.get("district_name");
    const hotelType = searchParams.get("hotel_type");

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

        console.log("data: ", data);

        //filter by price
        const minPriceParam = searchParams.get("min_price");
        const maxPriceParam = searchParams.get("max_price");
        const minPriceParam = searchParams.get("min_price");
        const maxPriceParam = searchParams.get("max_price");
        let minPriceInt = undefined;
        let maxPriceInt = undefined;
        if (minPriceParam) {
          minPriceInt = parseInt(minPriceParam);
        }
        if (maxPriceParam) {
          maxPriceInt = parseInt(maxPriceParam);
        }

        //filter by quick facitlity (4)
        const quickFacilityListParam = searchParams.get("facility");
        const quickFacilityListParam = searchParams.get("facility");
        const quickFacilityList = quickFacilityListParam
          ? quickFacilityListParam.split(",")
          : [];
        const additionalQuickFacilities = searchParams.getAll("facility");
        const additionalQuickFacilities = searchParams.getAll("facility");
        additionalQuickFacilities.forEach((facility) => {
          if (!quickFacilityList.includes(facility)) {
            quickFacilityList.push(facility);
          }
        });
        // console.log("quickFacilityList :", quickFacilityList);
        // console.log("quickFacilityList :", quickFacilityList);

        //filter by checkbox factility (more facilities) (8)
        const moreFacilitiesParams = searchParams.get("more_facilities");
        const moreFacilitiesParams = searchParams.get("more_facilities");
        const moreFacilitiesList = moreFacilitiesParams
          ? moreFacilitiesParams.split(",")
          : [];
        const additionalMoreFacilities = searchParams.getAll("more_facilities");
        const additionalMoreFacilities = searchParams.getAll("more_facilities");
        additionalMoreFacilities.forEach((facility) => {
          if (!moreFacilitiesList.includes(facility)) {
            moreFacilitiesList.push(facility);
          }
        });
        // console.log("moreFacilitiesList: ", moreFacilitiesList);
        // console.log("moreFacilitiesList: ", moreFacilitiesList);

        //sort hotel
        const sortParams = searchParams.get("sort");

        //hotelResult array after filter
        //filter by price
        if (minPriceParam) {
          minPriceInt = parseInt(minPriceParam);
        }
        if (maxPriceParam) {
          maxPriceInt = parseInt(maxPriceParam);
        }

        //hotelResult array after filter
        const hotelResult = getHotelsResult(data, {
          rate: searchParams.get("rate"),
          filterHotelType: searchParams.get("filter_hotel_type"),
          rate: searchParams.get("rate"),
          filterHotelType: searchParams.get("filter_hotel_type"),
          minPrice: minPriceInt,
          maxPrice: maxPriceInt,
          quickFacilityList: quickFacilityList,
          moreFacilitiesList: moreFacilitiesList,
          sort: sortParams,
        });
        console.log("hotelResult: ", hotelResult);

        setHotelList(hotelResult);
        // console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [searchParams]);
  }, [searchParams]);

  //handle open/close modal
  const [openSortBox, setOpenSortBox] = useState(false);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const handleOpenSortBox = () => setOpenSortBox(true);
  const handleCloseSortBox = () => setOpenSortBox(false);
  const handleOpenFilterBox = () => setOpenFilterBox(true);
  const handleCloseFilterBox = () => {
    setOpenFilterBox(false);
  };

  const [formats, setFormats] = useState<string[]>(() => []);

  const handleQuickFacility = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
    console.log("newFormats", newFormats);
    if (districtSearchParams || hotelTypeSearchParams) {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete("facility");
        for (const value of newFormats) {
          prevSearchParams.append("facility", value); // Append each value from newFormats
        }
        return prevSearchParams;
      });
    }
  };

  //clear local storage when component unmount (when navigate to other pages)
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  const navigate = useNavigate();

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
        <div className="container main_container">
        <div className="container main_container">
          <div className="filter_bar_container">
            <div className="option_wrapper container-md row justify-content-md-between">
              <div className="quick_option_wrapper col-md-8  d-flex justify-content-md-start justify-content-center">
              <div className="quick_option_wrapper col-md-8  d-flex justify-content-md-start justify-content-center">
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleQuickFacility}
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
            {hotelList.length === 0 ? (
              <p
                className="hotel_quantity_available mb-1 col-12"
                style={{ marginTop: "70px", color: "transparent" }}
              >
                Có <strong>{hotelList.length}</strong> khách sạn phù hợp với bạn
              </p>
            ) : (
              <p
                className="hotel_quantity_available mb-1 col-12"
                style={{ marginTop: "5px" }}
              >
                Có <strong>{hotelList.length}</strong> khách sạn phù hợp với bạn
              </p>
            )}

            {/* <TestComponent /> */}
            {hotelList.length === 0 ? (
              <p
                className="hotel_quantity_available mb-1 col-12"
                style={{ marginTop: "70px", color: "transparent" }}
              >
                Có <strong>{hotelList.length}</strong> khách sạn phù hợp với bạn
              </p>
            ) : (
              <p
                className="hotel_quantity_available mb-1 col-12"
                style={{ marginTop: "5px" }}
              >
                Có <strong>{hotelList.length}</strong> khách sạn phù hợp với bạn
              </p>
            )}

            {/* <TestComponent /> */}

            <div className="hotel_list_wrapper col-md-8 col-12">
              {hotelList.length === 0 ? (
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      src={noResultImage}
                      alt=""
                      style={{ width: "300px" }}
                    />
                    <h5>Không tìm thấy khách sạn!</h5>
                    <p>
                      Rất tiếc, chúng tôi không tìm thấy khách sạn nào phù hợp{" "}
                      <br />
                      Bạn vui lòng thử lại với địa điểm hoặc khung thời gian
                      khác.
                    </p>
                  </div>
                </div>
              ) : (
                hotelList.map((hotel: Hotel, index: number) => (
                  <div
                    key={index}
                    className="each_hotel_wrapper row"
                    onClick={() => handleShowRoomDetail(hotel.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="thumbnail_image my-auto col-md-4 col-sm-6"
                      src={hotel.thumbnail}
                      alt="thumbnail room image"
                    />
                    <div className="hotel_info_wrapper my-auto col-md-8 col-sm-6 ">
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
                ))
              )}
            </div>

            <div className="map-wrapper col-md-4 col-12">
              {hotelList.length === 0 ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864730.249176049!2d100.61804859498602!3d15.740538803504696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1713905396747!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  style={{ borderRadius: "10px", border: "0" }}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98045313557!2d105.8163641430988!3d21.022778419166194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713905562133!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  style={{ borderRadius: "10px", border: "0" }}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelListPage;
