import { Button } from "@mui/material";

const Blogs = () => {
  return (
    <div style={{ marginTop: "80px" }} className="position-relative">
      <img
        src="./public/images/Blog_image.jpg"
        alt="blogs_posts"
        className="img-fluid w-100 px-2"
        style={{ borderRadius: "25px", height: "600px", objectFit: "cover" }}
      />

      <div
        className="position-absolute text-white"
        style={{
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          fontSize: "40px",
          fontWeight: "600",
        }}
      >
        <div className="">
          <p
            className="m-0"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
          >
            Những điều thú vị
          </p>{" "}
          <span style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
            có thể bạn chưa biết
          </span>
        </div>
        <Button
          variant="contained"
          size="large"
          href="https://go2joy.vn/blog/"
          target="_blank"
          style={{
            backgroundColor: "white",
            color: "black",
            textTransform: "unset",
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: 0,
            width: "200px",
            height: "40px",
            marginTop: "20px",
          }}
        >
          Danh sách bài blog
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
