import { Button } from "@mui/material";
import blogImage from "../../../public/images/Blog_image.jpg";

const Blogs = () => {
  return (
    <div style={{ marginTop: "80px" }} className="position-relative">
      <img
        src="./public/images/Blog_image.jpg"
        alt="blogs_posts"
        className="img-fluid w-100"
        style={{ borderRadius: "15px", height: "600px", objectFit: "cover" }}
      />

      <div
        className="position-absolute text-white"
        style={{
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          maxWidth: "40%",
        }}
      >
        <h2 className="" style={{ lineHeight: "60px", fontSize: "40px" }}>
          Những điều thú vị có thể bạn chưa biết
        </h2>
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
            height: "60px",
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
