import { Fragment } from "react";

interface SortBoxProps {
  onCloseSortBox: () => void;
}
const SortBox: React.FC<SortBoxProps> = ({ onCloseSortBox }) => {
  return (
    <Fragment>
      <div className={`sort_box_container `}>
        <div className="label_sort_box">
          <h5>Sắp xếp</h5>{" "}
          <span onClick={onCloseSortBox}>
            {" "}
            <i className="fa-solid fa-xmark"></i>{" "}
          </span>
        </div>
        <div className="content_sort_box">
          <p>Điểm đánh giá từ cao đến thấp</p>
          <p>Giá từ thấp đến cao</p>
          <p>Giá từ cao đến thấp</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SortBox;
