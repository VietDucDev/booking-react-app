import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import kham_pha_ks_moi_img from "../../../public/images/kham-pha-khach-san-moi.jpg";
import gia_soc_dem_nay from "../../../public/images/gia-soc-dem-nay.jpg";
import uu_dai_hap_dan from "../../../public/images/uu_dai_hap_dan.jpg";
import khach_san_yeu_thich from "../../../public/images/khach_san_yeu_thich.jpg";

const hotelCollection = [
  {
    id: 1,
    title: "Khám phá khách sạn mới",
    thumbnail: kham_pha_ks_moi_img,
  },
  {
    id: 2,
    title: "Giá sốc ⚡️ Đêm nay",
    thumbnail: gia_soc_dem_nay,
  },
  {
    id: 3,
    title: "Ưu đãi hấp dẫn",
    thumbnail: uu_dai_hap_dan,
  },
  {
    id: 4,
    title: "Khách sạn yêu thích nhất",
    thumbnail: khach_san_yeu_thich,
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
      <h4 className="font-weight-bold mb-4 pl-2">Trải nghiệm cùng 9ROOM</h4>

      <Carousel responsive={responsive}>
        {hotelCollection.map((hotel) => (
          <div className="col position-relative px-2" key={hotel.id}>
            <img
              className="d-block w-100 img-fluid"
              src={hotel.thumbnail}
              alt="First slide"
              style={{
                borderRadius: "15px",
                height: "550px",
                objectFit: "cover",
              }}
            />
            <div
              className="position-absolute"
              style={{ bottom: "10%", left: "50px" }}
            >
              <h4
                className="text-white mb-3"
                style={{
                  fontSize: "30px",
                  display: "flex",
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.9)",
                  fontWeight: "700",
                }}
              >
                {hotel.title}
              </h4>
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
