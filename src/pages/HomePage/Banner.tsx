import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
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

  return (
    <Carousel responsive={responsive}>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_1.jpg"
            alt="banner_1"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_2.jpg"
            alt="banner_2"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_3.gif"
            alt="banner_3"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_1.jpg"
            alt="banner_1"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_2.jpg"
            alt="banner_2"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_3.gif"
            alt="banner_3"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_1.jpg"
            alt="banner_1"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_2.jpg"
            alt="banner_2"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
      <Link to="/discount">
        <div className="card border-0">
          <img
            src="./public/images/banner_pic_3.gif"
            alt="banner_3"
            className="mx-2"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Link>
    </Carousel>
  );
};

export default Banner;
