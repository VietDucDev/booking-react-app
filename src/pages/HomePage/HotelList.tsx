const HotelList = () => {
  return (
    <div className="mt-5">
      <h5 className="font-weight-bold" style={{ fontSize: "25px" }}>
        Danh mục khách sạn
      </h5>

      <div className="d-flex justify-content-between mt-4">
        <div className="col pl-0" style={{ height: "300px" }}>
          <img
            src="./public/images/9ROOM Room.jpg"
            alt="Go2Joy_Room"
            height={200}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "15px 15px 0 0 ",
              cursor: "pointer",
            }}
          />
          <div
            className="p-3 text-white"
            style={{
              backgroundColor: "#135d66",
              borderRadius: "0 0 15px 15px",
              height: "150px",
            }}
          >
            <h6 className="font-weight-bold" style={{ fontSize: "24px" }}>
              9Room
            </h6>
            <p style={{ fontSize: "15px" }}>
              Những căn phòng đặc biệt nhất dành cho Joyer
            </p>
          </div>
        </div>

        <div className="col">
          <img
            src="./public/images/Tình yêu.jpg"
            alt="Tinh yeu"
            height={200}
            style={{
              width: "100%",
              borderRadius: "15px 15px 0 0 ",
              height: "300px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <div
            className="p-3 text-white"
            style={{
              backgroundColor: "#135d66",
              borderRadius: "0 0 15px 15px",
              height: "150px",
            }}
          >
            <h6 className="font-weight-bold" style={{ fontSize: "24px" }}>
              Tình yêu
            </h6>
            <p style={{ fontSize: "15px" }}>
              Hơn 300 khách sạn kèm nhiều ưu đãi cho các cặp đôi
            </p>
          </div>
        </div>
        <div className="col">
          <img
            src="./public/images/Du lịch.jpg"
            alt="Go2Joy_Room"
            height={200}
            style={{
              width: "100%",
              borderRadius: "15px 15px 0 0 ",
              height: "300px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <div
            className="p-3 text-white"
            style={{
              backgroundColor: "#135d66",
              borderRadius: "0 0 15px 15px",
              height: "150px",
            }}
          >
            <h6 className="font-weight-bold" style={{ fontSize: "24px" }}>
              Du lịch
            </h6>
            <p style={{ fontSize: "15px" }}>
              Khám phá những vùng đất mới, tận hưởng với từng chuyến đi
            </p>
          </div>
        </div>
        <div className="col pr-0">
          <img
            src="./public/images/Sang trọng.jpg"
            alt="Go2Joy_Room"
            height={200}
            style={{
              width: "100%",
              borderRadius: "15px 15px 0 0 ",
              height: "300px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <div
            className="p-3 text-white"
            style={{
              backgroundColor: "#135d66",
              borderRadius: "0 0 15px 15px",
              height: "150px",
            }}
          >
            <h6 className="font-weight-bold" style={{ fontSize: "24px" }}>
              Sang trọng
            </h6>
            <p style={{ fontSize: "15px" }}>
              Trải nghiệm không gian đẳng cấp tại khách sạn 5*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
