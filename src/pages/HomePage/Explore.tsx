import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const hotelCollection = [
  {
    id: 1,
    title: "Khám phá khách sạn mới",
    thumbnail:
      "https://s3.go2joy.vn/350w/hotel/171_1656575040_62bd54401aeda.jpg",
  },
  {
    id: 2,
    title: "Giá sốc ⚡️ Đêm nay",
    thumbnail:
      "https://s3.go2joy.vn/350w/hotel/171_1656566391_62bd327718636.jpg",
  },
  {
    id: 3,
    title: "Ưu đãi hấp dẫn",
    thumbnail:
      "https://s3.go2joy.vn/350w/hotel/171_1656573947_62bd4ffb3b750.jpg",
  },
  {
    id: 4,
    title: "Khách sạn yêu thích nhất",
    thumbnail:
      "https://s3.go2joy.vn/350w/hotel/171_1656575585_62bd5661d03cc.jpg",
  },
];

const Explore = () => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleShowDetail = (title: string) => {
    navigate(`/hotel-list?hotel_type=${title}`);
  };

  return (
    <div className="mt-5">
      <h4 className="font-weight-bold mb-4 pl-2">Trải nghiệm cùng Go2Joy</h4>

      <Carousel responsive={responsive}>
        {hotelCollection.map((hotel) => (
          <div className="col position-relative px-2" key={hotel.id}>
            <img
              className="d-block w-100 img-fluid"
              src={hotel.thumbnail}
              alt="First slide"
              style={{
                borderRadius: "15px",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
            <div
              className="position-absolute"
              style={{ top: "30px", left: "50px" }}
            >
              <h4 className="text-white mb-3">{hotel.title}</h4>
              <button
                className="btn btn-light"
                onClick={() => handleShowDetail(hotel.title)}
              >
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Explore;
