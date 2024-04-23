const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide position-relative"
      data-interval="false"
    >
      <div className="carousel-inner" style={{ borderRadius: "15px" }}>
        <div className="carousel-item active">
          <div className="row">
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_1.jpg"
                alt="First slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="./public/images/banner_pic_2.jpg"
                alt="Second slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="./public/images/banner_pic_3.gif"
                alt="Third slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_1.jpg"
                alt="First slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_2.jpg"
                alt="Second slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_3.gif"
                alt="Third slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_1.jpg"
                alt="First slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_2.jpg"
                alt="Second slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col">
              <img
                className=""
                src="./public/images/banner_pic_3.gif"
                alt="Third slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="carousel-item">
          <div className="row">
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/8707_1712113077_660cc5b5bc958.jpg"
                alt="Fourth slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/8707_1709260208_65e13db03e256.webp"
                alt="Fifth slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/8707_1709260286_65e13dfe6b462.webp"
                alt="Sixth slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/8707_1709260120_65e13d5884498.webp"
                alt="Seventh slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/4479_1709104858_65dededa850fc.webp"
                alt="Eighth slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col">
              <img
                className="d-block= img-fluid"
                src="https://s3.go2joy.vn/350w/banner/8707_1712558594_66139202a9da8.jpg"
                alt="Eighth slide"
                style={{
                  borderRadius: "15px",
                  height: "220",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div> */}
      </div>
      <a
        className="carousel-control-prev d-flex justify-content-center align-items-center position-absolute"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        style={{
          backgroundColor: "#135d66",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          top: "50%",
          left: "5px",
          transform: "translateY(-50%)",
          margin: 0,
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next d-flex justify-content-center align-items-center position-absolute"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        style={{
          backgroundColor: "#135d66",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          top: "50%",
          right: "5px",
          transform: "translateY(-50%)",
          margin: 0,
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
