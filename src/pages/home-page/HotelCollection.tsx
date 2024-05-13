import { useNavigate } from "react-router-dom";

const hotelCollection = [
  {
    id: 1,
    title: "9ROOM - NiceRoom",
    sub: "Những căn phòng đặc biệt nhất dành cho Roomer",
    thumbnail: "./public/images/9ROOM Room.jpg",
  },
  {
    id: 2,
    title: "Tình yêu",
    sub: "Hơn 300 khách sạn kèm nhiều ưu đãi cho các cặp đôi",
    thumbnail: "./public/images/Tình yêu.jpg",
  },
  {
    id: 3,
    title: "Du lịch",
    sub: "Khám phá những vùng đất mới, tận hưởng với từng chuyến đi",
    thumbnail: "./public/images/Du lịch.jpg",
  },
  {
    id: 4,
    title: "Sang trọng",
    sub: "Trải nghiệm không gian đẳng cấp tại khách sạn 5*",
    thumbnail: "./public/images/Sang trọng.jpg",
  },
];

const HotelCollection = () => {
  const navigate = useNavigate();

  const handleShowDetail = (title: string) => {
    navigate(`/hotel-list?hotel_type=${title}`);
  };

  return (
    <div className="mt-5">
      <h5 className="font-weight-bold mb-4 pl-2" style={{ fontSize: "25px" }}>
        Danh mục khách sạn
      </h5>

      <div className="d-flex justify-content-between flex-wrap">
        {hotelCollection.map((hotel) => (
          <div
            className="col-md-6 col-sm-12 p-0 col-lg-3 p-2"
            key={hotel.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleShowDetail(hotel.title)}
          >
            <img
              src={hotel.thumbnail}
              alt={hotel.title}
              style={{ borderRadius: "15px 15px 0 0" }}
              className="img-fluid"
            />
            <div
              className="p-3 text-white"
              style={{
                backgroundColor: "#135d66",
                borderRadius: "0 0 15px 15px",
                height: "180px",
              }}
            >
              <h6 className="font-weight-bold" style={{ fontSize: "24px" }}>
                {hotel.title}
              </h6>
              <p style={{ fontSize: "15px" }}>{hotel.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCollection;
