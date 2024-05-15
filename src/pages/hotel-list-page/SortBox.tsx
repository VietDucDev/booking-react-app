import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface SortBoxProps {
  onCloseSortBox: () => void;
}
const SortBox: React.FC<SortBoxProps> = ({ onCloseSortBox }) => {
  const [seacrhParams, setSearchParams] = useSearchParams();
  const districtSearchParams = seacrhParams.get("district_name");
  const hotelTypeSearchParams = seacrhParams.get("hotel_type");

  const [chosenSortValue, setChosenSortValue] = useState<string>("");

  //get value from local storage
  useEffect(() => {
    const savedChooseSort = localStorage.getItem("sort");
    if (savedChooseSort) {
      setChosenSortValue(savedChooseSort);
    }
  }, []);

  // Set values to local storage when they are changed
  useEffect(() => {
    localStorage.setItem("sort", chosenSortValue);
  }, [chosenSortValue]);

  const handleSortHotel = (
    _event: React.MouseEvent<HTMLElement>,
    newSortValue: string
  ) => {
    setChosenSortValue(newSortValue);

    if (districtSearchParams || hotelTypeSearchParams) {
      const updatedSearchParams = new URLSearchParams(seacrhParams); // Create a copy SearchParams
      if (newSortValue !== null) {
        updatedSearchParams.set("sort", newSortValue);
      } else {
        updatedSearchParams.delete("sort");
      }
      setSearchParams(updatedSearchParams);
    }

    setTimeout(onCloseSortBox, 300);
  };

  return (
    <Fragment>
      <div className={`sort_box_container container`}>
        <div className="label_sort_box">
          <h5>Sắp xếp</h5>{" "}
          <span onClick={onCloseSortBox}>
            {" "}
            <i className="fa-solid fa-xmark"></i>{" "}
          </span>
        </div>
        <div className="content_sort_box container">
          <ToggleButtonGroup
            orientation="vertical"
            value={chosenSortValue}
            exclusive
            onChange={handleSortHotel}
          >
            <ToggleButton
              value="1"
              style={{
                textTransform: "unset",
                padding: "10px 60px",
                borderRadius: "10px",
                marginBottom: "10px",
                transition: "all 0.2s",
              }}
            >
              <i
                className="fa-solid fa-angles-down"
                style={{ fontSize: "1.2rem", marginRight: "5px" }}
              ></i>
              Điểm đánh giá từ cao đến thấp
            </ToggleButton>
            <ToggleButton
              value="2"
              style={{
                textTransform: "unset",
                borderRadius: "10px",
                marginBottom: "10px",
                transition: "all 0.2s",
              }}
            >
              <i
                className="fa-solid fa-arrow-up-9-1"
                style={{ fontSize: "1.2rem", marginRight: "5px" }}
              ></i>{" "}
              Giá từ thấp đến cao
            </ToggleButton>
            <ToggleButton
              value="3"
              style={{
                textTransform: "unset",
                borderRadius: "10px",
                marginBottom: "10px",
                transition: "all 0.2s",
              }}
            >
              <i
                className="fa-solid fa-arrow-down-9-1"
                style={{ fontSize: "1.2rem", marginRight: "5px" }}
              ></i>
              Giá từ cao đến thấp
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </Fragment>
  );
};

export default SortBox;
