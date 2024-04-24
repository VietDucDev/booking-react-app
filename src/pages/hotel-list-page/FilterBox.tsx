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
import heartIcon_3_5 from "../../../public/images/icon-roompage/392108070_RAINBOW_HEART_400px.gif";
import heartIcon_4 from "../../../public/images/icon-roompage/391902151_HEARTEYE_EMOJI_400px.gif";
import heartIcon_4_5 from "../../../public/images/icon-roompage/391907100_HEART_400px.gif";
import heartIcon_ALL from "../../../public/images/icon-roompage/392102760_FIRE_EMOJI_400px.gif";
import { useSearchParams } from "react-router-dom";

interface FilterBoxProps {
  onCloseFilterBox: () => void;
}

function valuetext(value: number) {
  return `${value}VNĐ`;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onCloseFilterBox }) => {
  const [value, setValue] = useState<number[]>([20000, 10000000]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [selectedRadio, setSelectRadio] = useState("4.5");
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState<
    string[]
  >([]);
  const [chooseTypeHotel, setChoosTypeHotel] = useState("");
  console.log("chooseTypeHotel: ", chooseTypeHotel);

  const [seacrhParams, setSearchParams] = useSearchParams();
  const districtSearchParams = seacrhParams.get("district_name");
  const hotelTypeSearchParams = seacrhParams.get("hotel_type");

  useEffect(() => {
    const savedSelectedRadio = localStorage.getItem("selectedRadio");
    const savedSelectedCheckboxValues = localStorage.getItem(
      "selectedCheckboxValues"
    );
    const savedChooseTypeHotel = localStorage.getItem("chooseTypeHotel");

    if (savedSelectedRadio) setSelectRadio(savedSelectedRadio);

    if (savedSelectedCheckboxValues)
      setSelectedCheckboxValues(JSON.parse(savedSelectedCheckboxValues));
    if (savedChooseTypeHotel) setChoosTypeHotel(savedChooseTypeHotel);
  }, []);

  // Save filter values to local storage when they change
  useEffect(() => {
    localStorage.setItem("selectedRadio", selectedRadio);
    localStorage.setItem(
      "selectedCheckboxValues",
      JSON.stringify(selectedCheckboxValues)
    );
    localStorage.setItem("chooseTypeHotel", chooseTypeHotel);
  }, [selectedRadio, selectedCheckboxValues, chooseTypeHotel]);

  // filter function
  const handleChooseHotelType = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setChoosTypeHotel(newAlignment);
    }
  };

  const handleFilterHotel = () => {
    if (districtSearchParams) {
      const filterParams = {
        rate: selectedRadio,
        filter_hotel_type: chooseTypeHotel,
        district_name: districtSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }

    if (hotelTypeSearchParams) {
      const filterParams = {
        rate: selectedRadio,
        filter_hotel_type: chooseTypeHotel,
        // district_name: currentSearchParams,
        hotel_type: hotelTypeSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    } else if (hotelTypeSearchParams) {
      const filterParams = {
        district_name: hotelTypeSearchParams,
      };
      setSearchParams({ ...seacrhParams, ...filterParams });
    }

    onCloseFilterBox();
  };

  const handleRadioChange = (event: any) => {
    setSelectRadio(event.target.value);
  };
  console.log("selectedRadio: ", selectedRadio);

  const handleCheckboxChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

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
    setChoosTypeHotel("");
    setSelectRadio("");
    setSelectedCheckboxValues([]);
  };

  const handleMinValueChange = (event: any) => {
    const parsedValue = parseInt(event.target.value.replace(/\./g, ""));
    setValue([parsedValue, value[1]]);
  };

  const handleMaxValueChange = (event: any) => {
    const parsedValue = parseInt(event.target.value.replace(/\./g, ""));
    setValue([value[0], parsedValue]);
  };

  const numberWithDot = (number: number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  };

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
                value={value}
                step={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={20000}
                max={10000000}
              />
            </div>

            <div className="type_values">
              <TextField
                label="Giá tối thiểu (VNĐ)"
                type="number"
                value={numberWithDot(value[0])}
                onChange={handleMinValueChange}
              />{" "}
              -{" "}
              <TextField
                label="Giá tối đa (VNĐ)"
                type="number"
                value={numberWithDot(value[1])}
                onChange={handleMaxValueChange}
              />
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
                  value=""
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
                  name={selectedRadio}
                />{" "}
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label={
                    <p className="mb-0">
                      <img
                        style={{ width: "30px" }}
                        src={heartIcon_4_5}
                        alt=""
                      />{" "}
                      5 trở lên
                    </p>
                  }
                  onChange={handleRadioChange}
                  name={selectedRadio}
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
                  name={selectedRadio}
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
                  name={selectedRadio}
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
                  name={selectedRadio}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* hotel type */}
          <div className="hotel_type_wrapper mt-4 border-top pt-3">
            <h5>Loại khách sạn</h5>
            <div className="quick_option_wrapper mt-3 gap-2 d-flex justify-content-md-start justify-content-center">
              {/* test nút */}
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
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="188" />
                    }
                    label="Wifi miễn phí"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="122" />
                    }
                    label="Lễ tân 24/24"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="127" />
                    }
                    label="Dịch vụ dọn phòng mỗi ngày"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="26" />
                    }
                    label="Dịch vụ lưu trữ & bản quản hành lý"
                  />
                </FormGroup>
              </div>
              <div className="col-6">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="98" />
                    }
                    label="Ghế tình yêu"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="27" />
                    }
                    label="Thang máy"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="67" />
                    }
                    label="Tiện nghi là/ủi"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox onChange={handleCheckboxChange} value="123" />
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
            >
              Xóa tất cả
            </Button>
            <Button
              variant="contained"
              onClick={handleFilterHotel}
              style={{ textTransform: "unset" }}
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
