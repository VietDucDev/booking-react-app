const HotelCollection = () => {
  return (
    <div className="mt-5">
      <h5 className="font-weight-bold mb-4 pl-2" style={{ fontSize: "25px" }}>
        Danh mục khách sạn
      </h5>

      <div className="d-flex justify-content-between flex-wrap">
        <div className="col-md-6 col-sm-12 p-0 col-lg-3 p-2">
          <img
            src="./public/images/9ROOM Room.jpg"
            alt="Go2Joy_Room"
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
              9Room
            </h6>
            <p style={{ fontSize: "15px" }}>
              Những căn phòng đặc biệt nhất dành cho Joyer
            </p>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 p-0 col-lg-3 p-2">
          <img
            src="./public/images/Tình yêu.jpg"
            alt="Tinh yeu"
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
              Tình yêu
            </h6>
            <p style={{ fontSize: "15px" }}>
              Hơn 300 khách sạn kèm nhiều ưu đãi cho các cặp đôi
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 p-0 col-lg-3 p-2">
          <img
            src="./public/images/Du lịch.jpg"
            alt="Go2Joy_Room"
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
              Du lịch
            </h6>
            <p style={{ fontSize: "15px" }}>
              Khám phá những vùng đất mới, tận hưởng với từng chuyến đi
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 p-0 col-lg-3 p-2">
          <img
            src="./public/images/Sang trọng.jpg"
            alt="Go2Joy_Room"
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

export default HotelCollection;
