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
} from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import heartIcon_3_5 from "../../../public/images/icon-roompage/392108070_RAINBOW_HEART_400px.gif";
import heartIcon_4 from "../../../public/images/icon-roompage/391902151_HEARTEYE_EMOJI_400px.gif";
import heartIcon_4_5 from "../../../public/images/icon-roompage/391907100_HEART_400px.gif";
import heartIcon_ALL from "../../../public/images/icon-roompage/392102760_FIRE_EMOJI_400px.gif";
import { RootState } from "@reduxjs/toolkit/query";

interface FilterBoxProps {
  onCloseFilterBox: () => void;
}

function valuetext(value: number) {
  return `${value}VNĐ`;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onCloseFilterBox }) => {
  //get data API from store
  // const { hotelsList } = useSelector((state) => state.hotelsList);

  // console.log("hotelsList from store - filter box: ", hotelsList);

  const [value, setValue] = useState<number[]>([20000, 10000000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  //select hotel type (tat ca, giam gia, uu dai...)
  const [selectedButton, setSelectedButton] = useState<string>("Tất cả");
  const [selectedRadio, setSelectRadio] = useState("All");
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState([]);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleRadioChange = (event) => {
    setSelectRadio(event.target.value);
  };
  console.log("selectedRadio: ", selectedRadio);

  const handleCheckboxChange = (event) => {
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
  console.log("selectedCheckboxValues :", selectedCheckboxValues);

  const handleResetFilter = () => {
    setSelectedButton("Tất cả");
    setSelectRadio("All");
    setSelectedCheckboxValues([]);
  };

  // const handleMinValueChange = (event) => {
  //   setValue([parseInt(event.target.value.replace(/\./g, "")), value[1]]);
  // };

  // const handleMaxValueChange = (event) => {
  //   setValue([value[0], parseInt(event.target.value.replace(/\./g, ""))]);
  // };

  const handleMinValueChange = (event) => {
    // Remove dots from the input value before parsing
    const parsedValue = parseInt(event.target.value.replace(/\./g, ""));
    setValue([parsedValue, value[1]]);
  };

  const handleMaxValueChange = (event) => {
    // Remove dots from the input value before parsing
    const parsedValue = parseInt(event.target.value.replace(/\./g, ""));
    setValue([value[0], parsedValue]);
  };

  // Function to convert number to string with dot as thousands separator
  const numberWithDot = (number: number) => {
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  };

  //filter function
  // const filteredProducts

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
                defaultValue="All"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="All"
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
              <Button
                variant={selectedButton === "Tất cả" ? "contained" : "outlined"}
                color={selectedButton === "Tất cả" ? "primary" : "secondary"}
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
                onClick={() => handleButtonClick("Tất cả")}
              >
                Tất cả
              </Button>
              <Button
                variant={
                  selectedButton === "Giảm sốc" ? "contained" : "outlined"
                }
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
                onClick={() => handleButtonClick("Giảm sốc")}
              >
                Giảm sốc
              </Button>
              <Button
                variant={
                  selectedButton === "Ưu đãi đặc biệt"
                    ? "contained"
                    : "outlined"
                }
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
                onClick={() => handleButtonClick("Ưu đãi đặc biệt")}
              >
                Ưu đãi đặc biệt
              </Button>
              <Button
                variant={
                  selectedButton === "Nổi bật" ? "contained" : "outlined"
                }
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
                onClick={() => handleButtonClick("Nổi bật")}
              >
                Nổi bật
              </Button>
              <Button
                variant={
                  selectedButton === "9ROOM Choice" ? "contained" : "outlined"
                }
                color="primary"
                size="small"
                style={{ borderRadius: "20px", fontSize: "12px" }}
                onClick={() => handleButtonClick("9ROOM Choice")}
              >
                9ROOM Choice
              </Button>
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
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Wifi miễn phí"
                      />
                    }
                    label="Wifi miễn phí"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Lễ tân 24/24"
                      />
                    }
                    label="Lễ tân 24/24"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Dịch vụ dọn phòng mỗi ngày"
                      />
                    }
                    label="Dịch vụ dọn phòng mỗi ngày"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Dịch vụ lưu trữ & bản quản hành lý"
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
                        value="Ghế tình yêu"
                      />
                    }
                    label="Ghế tình yêu"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Thang máy"
                      />
                    }
                    label="Thang máy"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Tiện nghi là/ủi"
                      />
                    }
                    label="Tiện nghi là/ủi"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value="Bồn tắm"
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
            <Button variant="outlined" onClick={handleResetFilter}>
              Xóa tất cả
            </Button>
            <Button variant="contained">Áp dụng</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterBox;
