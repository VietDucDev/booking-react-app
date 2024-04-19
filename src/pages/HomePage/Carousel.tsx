import { Link } from "react-router-dom";

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
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
            <div className="col">
              <Link to="/discount">
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
              </Link>
            </div>
          </div>
        </div>
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
          left: "-25px",
          transform: "translateY(-50%)",
          margin: 0,
        }}
      >
        <i
          className="fa-solid fa-chevron-left"
          style={{ fontSize: "20px" }}
        ></i>
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
          right: "-25px",
          transform: "translateY(-50%)",
          margin: 0,
        }}
      >
        <i
          className="fa-solid fa-chevron-right"
          style={{ fontSize: "20px" }}
        ></i>
      </a>
    </div>
  );
};

export default Carousel;
