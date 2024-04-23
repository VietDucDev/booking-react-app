const Explore = () => {
  return (
    <div className="mt-5">
      <h5 className="font-weight-bold mb-4" style={{ fontSize: "25px" }}>
        Trải nghiệm cùng Go2Joy
      </h5>

      <div id="carousel2" className="carousel slide position-relative">
        <div className="carousel-inner" style={{ borderRadius: "15px" }}>
          <div className="carousel-item active">
            <div className="row">
              <div className="col position-relative">
                <img
                  className="d-block w-100 img-fluid"
                  src="https://s3.go2joy.vn/350w/hotel/171_1656575040_62bd54401aeda.jpg"
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
                  <h4 className="text-white mb-3">Khám phá khách sạn mới</h4>
                  <button className="btn btn-light text-capitalize text-dark">
                    Xem thêm
                  </button>
                </div>
              </div>
              <div className="col position-relative">
                <img
                  className="d-block w-100"
                  src="https://s3.go2joy.vn/350w/hotel/171_1656566391_62bd327718636.jpg"
                  alt="Second slide"
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
                  <h4 className="text-white mb-3">
                    Giá sốc{" "}
                    <i
                      className="fa-solid fa-bolt"
                      style={{ color: "#FFD43B", fontSize: "25px" }}
                    ></i>{" "}
                    Đêm nay
                  </h4>
                  <button className="btn btn-light text-capitalize text-dark">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col position-relative">
                <img
                  className="d-block w-100 img-fluid"
                  src="https://s3.go2joy.vn/350w/hotel/171_1656573947_62bd4ffb3b750.jpg"
                  alt="Third slide"
                  style={{ borderRadius: "15px", maxHeight: "600px" }}
                />
                <div
                  className="position-absolute"
                  style={{ top: "30px", left: "50px" }}
                >
                  <h4 className="text-white mb-3">Ưu đãi hấp dẫn</h4>
                  <button className="btn btn-light text-capitalize text-dark">
                    Xem thêm
                  </button>
                </div>
              </div>
              <div className="col position-relative">
                <img
                  className="d-block w-100 img-fluid"
                  src="https://s3.go2joy.vn/350w/hotel/171_1656575585_62bd5661d03cc.jpg"
                  alt="Fourth slide"
                  style={{ borderRadius: "15px", maxHeight: "600px" }}
                />
                <div
                  className="position-absolute"
                  style={{ top: "30px", left: "50px" }}
                >
                  <h4 className="text-white mb-3">Khách sạn yêu thích nhất</h4>
                  <button className="btn btn-light text-capitalize text-dark">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev d-flex justify-content-center align-items-center position-absolute"
          href="#carousel2"
          role="button"
          data-slide="prev"
          style={{
            backgroundColor: "#135d66",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            margin: 0,
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next d-flex justify-content-center align-items-center position-absolute"
          href="#carousel2"
          role="button"
          data-slide="next"
          style={{
            backgroundColor: "#135d66",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            margin: 0,
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Explore;
