import BookingTabs from "../../components/BookingTabs";
import DateRangePicker from "../../components/DateRangePicker";
import SearchBar from "../../components/SearchBar";

const Hero = () => {
  return (
    <div className="position-relative" style={{ marginTop: "65px" }}>
      <img src="./public/images/hero.jpg" alt="hero" className="img-fluid" />
      <div
        className="bg-white shadow pb-5 px-5 position-absolute w-75"
        style={{
          borderRadius: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-80px",
        }}
      >
        <BookingTabs />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <SearchBar />
          <DateRangePicker />
          <button
            className="btn rounded-pill d-flex align-items-center text-white px-4 py-3"
            style={{
              backgroundColor: "#003c43",
              textWrap: "nowrap",
              fontSize: "16px",
            }}
          >
            <i className="fa-solid fa-magnifying-glass mr-2"></i>Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
