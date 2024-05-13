import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import heartIcon_3_5 from "../../../public/images/icon-roompage/392108070_RAINBOW_HEART_400px.gif";
import heartIcon_4 from "../../../public/images/icon-roompage/391902151_HEARTEYE_EMOJI_400px.gif";
import heartIcon_4_5 from "../../../public/images/icon-roompage/391907100_HEART_400px.gif";
import heartIcon_ALL from "../../../public/images/icon-roompage/392102760_FIRE_EMOJI_400px.gif";
import gemIcon_5 from "../../../public/images/icon-roompage/392002130_GEM_STONE_EMOJI_400px.gif";
// import { RootState } from "@reduxjs/toolkit/query";
// import { addQueryParams } from "../../reducers/HotelsSlice";
import { useSearchParams } from "react-router-dom";

interface FilterBoxProps {
  onCloseFilterBox: () => void;
}

interface CheckboxState {
  [key: string]: boolean;
}

interface CheckRadioState {
  [key: string]: boolean;
}

function valuetext(value: number) {
  return `${value}VNĐ`;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onCloseFilterBox }) => {
  // const dispatch = useDispatch();
  //get data API from store
  // const { hotelsList } = useSelector((state) => state.hotelsList);

  // console.log("hotelsList from store - filter box: ", hotelsList);

  const [priceValue, setPriceValue] = useState<number[]>([20000, 2000000]);
  console.log("value money: ", priceValue);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  //select hotel type (tat ca, giam gia, uu dai...)

  const [selectedRadioValues, setSelectRadioValues] = useState("0");
  console.log("selectedRadio", selectedRadioValues);
  const [checkedRadio, setCheckedRadio] = useState<CheckRadioState>({
    "0": true,
    "5": false,
    "4.5": false,
    "4": false,
    "3.5": false,
  });

  const [chooseTypeHotel, setChoosTypeHotel] = useState("");
  console.log("chooseTypeHotel: ", chooseTypeHotel);

  const [seacrhParams, setSearchParams] = useSearchParams();
  const districtSearchParams = seacrhParams.get("district_name");
  const hotelTypeSearchParams = seacrhParams.get("hotel_type");

  console.log("seacrhParams after choose: ", seacrhParams);

  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState<
    string[]
  >([]);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    "188": false,
    "122": false,
    "127": false,
    "26": false,
    "98": false,
    "27": false,
    "67": false,
    "123": false,
  });

  console.log("checkboxes", JSON.stringify(checkboxes));

  //get value from local storage
  useEffect(() => {
    const savedSelectedRadio = localStorage.getItem("selectedRadioValues");
    const savedSelectedCheckboxValues = localStorage.getItem(
      "selectedCheckboxValues"
    );
    if (savedSelectedCheckboxValues) {
      setSelectedCheckboxValues(JSON.parse(savedSelectedCheckboxValues));
    }
    const savedChooseTypeHotel = localStorage.getItem("chooseTypeHotel");
    const savedChooseMinPrice = localStorage.getItem("minPrice");
    const savedChooseMaxPrice = localStorage.getItem("maxPrice");
    const savedCheckboxes = localStorage.getItem("checkBoxes");
    const savedCheckedRadio = localStorage.getItem("checkedRadio");

    if (savedCheckboxes) {
      setCheckboxes(JSON.parse(savedCheckboxes));
    }

    if (savedCheckedRadio) {
      setCheckedRadio(JSON.parse(savedCheckedRadio));
    }

    let savedChooseMinPriceInt = 20000;
    let savedChooseMaxPriceInt = 2000000;
    if (savedChooseMinPrice) {
      savedChooseMinPriceInt = parseInt(savedChooseMinPrice);
    }
    if (savedChooseMaxPrice) {
      savedChooseMaxPriceInt = parseInt(savedChooseMaxPrice);
    }

    if (savedSelectedRadio) setSelectRadioValues(savedSelectedRadio);

    if (savedSelectedCheckboxValues)
      setSelectedCheckboxValues(JSON.parse(savedSelectedCheckboxValues));
    if (savedChooseTypeHotel) setChoosTypeHotel(savedChooseTypeHotel);
    if (savedChooseMinPrice && savedChooseMaxPrice)
      setPriceValue([savedChooseMinPriceInt, savedChooseMaxPriceInt]);
  }, []);

  // Set values to local storage when they are changed
  useEffect(() => {
    localStorage.setItem("selectedRadioValues", selectedRadioValues);
    localStorage.setItem(
      "selectedCheckboxValues",
      JSON.stringify(selectedCheckboxValues)
    );

    localStorage.setItem("chooseTypeHotel", chooseTypeHotel);
    localStorage.setItem("minPrice", priceValue[0].toString());
    localStorage.setItem("maxPrice", priceValue[1].toString());
    localStorage.setItem("checkBoxes", JSON.stringify(checkboxes));
    localStorage.setItem("checkedRadio", JSON.stringify(checkedRadio));
  }, [
    selectedRadioValues,
    selectedCheckboxValues,
    chooseTypeHotel,
    priceValue,
    checkboxes,
    checkedRadio,
  ]);

  // filter function
  const handleChooseHotelType = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setChoosTypeHotel(newAlignment);
    }
  };

  //handle submit
  const handleFilterHotel = () => {
    // dispatch(addQueryParams({ vote: selectedRadio }));
    if (districtSearchParams || hotelTypeSearchParams) {
      const filterParams = {
        rate: selectedRadioValues,
        filter_hotel_type: chooseTypeHotel,
        min_price: priceValue[0],
        max_price: priceValue[1],
        more_facilities: selectedCheckboxValues,

        district_name: districtSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
      // setSearchParams((prevSearchParams) => {
      //   prevSearchParams.delete("more_facilities");
      //   for (const value of selectedCheckboxValues) {
      //     prevSearchParams.append("more_facilities", value);
      //   }
      //   return prevSearchParams;
      // });
      // setSearchParams({ ...seacrhParams, ...filterParams });
    }

    if (hotelTypeSearchParams) {
      const filterParams = {
        rate: selectedRadioValues,
        filter_hotel_type: chooseTypeHotel,
        min_price: priceValue[0],
        max_price: priceValue[1],
        more_facilities: selectedCheckboxValues,

        hotel_type: hotelTypeSearchParams,
      };
      // console.log("chooseTypeHotel in filterBox: ", chooseTypeHotel);
      setSearchParams({ ...seacrhParams, ...filterParams });
    } else if (hotelTypeSearchParams) {
      const filterParams = {
        district_name: hotelTypeSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }
    // dispatch(addQueryParams(seacrhParams));

    onCloseFilterBox();
  };

  const handleRadioChange = (event: any) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    const updateCheckedRadio: CheckRadioState = { ...checkedRadio };

    if (isChecked) {
      Object.keys(updateCheckedRadio).forEach((key) => {
        updateCheckedRadio[key] = false;
      });

      updateCheckedRadio[value] = true;

      setCheckedRadio(updateCheckedRadio);
      setSelectRadioValues(value);
    }
  };
  //checkbox

  const handleCheckboxChange = (event: any) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    setCheckboxes({ ...checkboxes, [value]: !checkboxes[value] });

    if (isChecked) {
      setSelectedCheckboxValues([...selectedCheckboxValues, value]);
    } else {
      setSelectedCheckboxValues(
        selectedCheckboxValues.filter((item) => item !== value)
      );
    }
  };
  console.log("selectedCheckboxValues:", selectedCheckboxValues);

  const handleResetFilter = () => {
    const updateCheckboxes: CheckboxState = {};
    Object.keys(checkboxes).forEach((key) => {
      updateCheckboxes[key] = false;
    });
    setCheckboxes(updateCheckboxes);

    const updateCheckRadios: CheckRadioState = {};
    Object.keys(checkedRadio).forEach((key) => {
      updateCheckRadios[key] = false;
    });
    updateCheckRadios["0"] = true;
    console.log("updateCheckRadios", updateCheckRadios);
    setCheckedRadio(updateCheckRadios);

    setSelectedCheckboxValues([]);
    setChoosTypeHotel("");
    setSelectRadioValues("0");
    setPriceValue([20000, 2000000]);
  };

  // const handleMinValueChange = (event) => {
  //   setValue([parseInt(event.target.value.replace(/\./g, "")), value[1]]);
  // };

  // const handleMaxValueChange = (event) => {
  //   setValue([value[0], parseInt(event.target.value.replace(/\./g, ""))]);
  // };

  const handleMinValueChange = (event: any) => {
    // Remove dots from the input value before parsing
    const parsedValue = parseInt(event.target.value.toLocaleString("vi-VN"));
    setPriceValue([parsedValue, priceValue[1]]);
  };

  const handleMaxValueChange = (event: any) => {
    // Remove dots from the input value before parsing
    const parsedValue = parseInt(event.target.value.toLocaleString("vi-VN"));
    setPriceValue([priceValue[0], parsedValue]);
  };

  // Function to convert number to string with dot as thousands separator
  // const numberWithDot = (number: number) => {
  //   // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   const parts = number.toString().split(".");
  //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   return parts.join(".");
  // };

  return (
    <Fragment>
      <div className="filter_box_container">
        <div className="label_filter_box">
          <h5>Bộ lọc</h5>{" "}
          <span onClick={onCloseFilterBox}>
            {" "}
            <i className="fa-solid fa-xmark"></i>{" "}
          </span>
        </div>
        <div className="content_filter_box">
          {/* price range */}
          <div className="price_range_wrapper ">
            <h5>Khoảng giá</h5>
            <div className="slider_money">
              <Slider
                value={priceValue}
                step={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={20000}
                max={2000000}
              />
            </div>

            <div className="type_values row">
              <div className="col-md-5 col-12">
                <TextField
                  label="Giá tối thiểu (VNĐ)"
                  type="number"
                  value={priceValue[0]}
                  onChange={handleMinValueChange}
                  style={{ width: "300px" }}
                />
              </div>
              <div className="col-md-2 col-12">
                <i
                  className="fa-solid fa-arrows-left-right"
                  style={{
                    fontSize: "20px",
                    color: "rgb(19, 93, 102)",
                  }}
                ></i>
              </div>
              <div className="col-md-5 col-12">
                <TextField
                  label="Giá tối đa (VNĐ)"
                  type="number"
                  value={priceValue[1]}
                  onChange={handleMaxValueChange}
                  style={{
                    width: "300px",
                  }}
                />
              </div>
            </div>
          </div>
          {/* point vote  */}
          <div className="point_vote_wrapper mt-4 border-top pt-3">
            <h5>Điểm đánh giá</h5>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img
                        style={{ width: "30px" }}
                        src={heartIcon_ALL}
                        alt=""
                      />
                      Tất cả
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadioValues}
                  checked={checkedRadio["0"]}
                />{" "}
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img style={{ width: "30px" }} src={gemIcon_5} alt="" /> 5
                      trở lên
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadioValues}
                  checked={checkedRadio["5"]}
                />
                <FormControlLabel
                  value="4.5"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img
                        style={{ width: "30px" }}
                        src={heartIcon_4_5}
                        alt=""
                      />{" "}
                      4.5 trở lên
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadioValues}
                  checked={checkedRadio["4.5"]}
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img style={{ width: "30px" }} src={heartIcon_4} alt="" />{" "}
                      4 trở lên
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadioValues}
                  checked={checkedRadio["4"]}
                />
                <FormControlLabel
                  value="3.5"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img
                        style={{ width: "30px" }}
                        src={heartIcon_3_5}
                        alt=""
                      />{" "}
                      3.5 trở lên
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadioValues}
                  checked={checkedRadio["3.5"]}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* hotel type */}
          <div className="hotel_type_wrapper mt-4 border-top pt-3">
            <h5>Loại khách sạn</h5>
            <div className="quick_option_wrapper mt-3 gap-2 d-flex justify-content-md-start justify-content-center">
              <ToggleButtonGroup
                value={chooseTypeHotel}
                exclusive
                onChange={handleChooseHotelType}
                aria-label="text alignment"
                defaultValue=""
              >
                {" "}
                <ToggleButton
                  value=""
                  aria-label="left aligned"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  Tất cả
                </ToggleButton>
                <ToggleButton
                  value="Khách sạn yêu thích nhất"
                  aria-label="left aligned"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  Khách sạn yêu thích nhất
                </ToggleButton>
                <ToggleButton
                  value="Ưu đãi hấp dẫn"
                  aria-label="centered"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  Ưu đãi hấp dẫn
                </ToggleButton>
                <ToggleButton
                  value="Khám phá khách sạn mới"
                  aria-label="right aligned"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  Khám phá khách sạn mới
                </ToggleButton>
                <ToggleButton
                  value="Giá sốc ⚡️ Đêm nay"
                  aria-label="right aligned"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  Giá sốc ⚡️ Đêm nay
                </ToggleButton>
                <ToggleButton
                  value="Go2Joy Room"
                  aria-label="right aligned"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    textTransform: "unset",
                  }}
                >
                  9ROOm Choice
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          {/* utilities */}
          <div className="utilities_wrapper mt-4 border-top pt-3">
            <h5>Tiện ích</h5>
            <div className="utilities_checkbox_wrapper row">
              <div className="col-6">
                <FormGroup defaultChecked>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="188"
                        checked={checkboxes["188"]}
                      />
                    }
                    label="Wifi miễn phí"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="122"
                        checked={checkboxes["122"]}
                      />
                    }
                    label="Lễ tân 24/24"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="127"
                        checked={checkboxes["127"]}
                      />
                    }
                    label="Dịch vụ dọn phòng mỗi ngày"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="26"
                        checked={checkboxes["26"]}
                      />
                    }
                    label="Dịch vụ lưu trữ & bản quản hành lý"
                  />
                </FormGroup>
              </div>
              <div className="col-6">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="98"
                        checked={checkboxes["98"]}
                      />
                    }
                    label="Ghế tình yêu"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="27"
                        checked={checkboxes["27"]}
                      />
                    }
                    label="Thang máy"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="67"
                        checked={checkboxes["67"]}
                      />
                    }
                    label="Tiện nghi là/ủi"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="123"
                        checked={checkboxes["123"]}
                      />
                    }
                    label="Bồn tắm"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
          {/* submit area */}
          <div className="submit_sort_wrapper">
            <Button
              variant="outlined"
              onClick={handleResetFilter}
              style={{ textTransform: "unset" }}
              size="large"
            >
              Xóa tất cả
            </Button>
            <Button
              variant="contained"
              onClick={handleFilterHotel}
              style={{ textTransform: "unset" }}
              size="large"
            >
              Áp dụng
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterBox;
