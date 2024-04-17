import { Button } from "@mui/material";

const Blogs = () => {
  return (
    <div style={{ marginTop: "80px" }} className="position-relative">
      <img
        src="https://s3.go2joy.vn/1000w/cover_photo/33_14148447441.jpg"
        alt="blogs_posts"
        className="img-fluid"
        style={{ width: "100%", borderRadius: "15px" }}
      />

      <div
        className="position-absolute text-white"
        style={{
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          maxWidth: "500px",
        }}
      >
        <h2 className="w-100" style={{ lineHeight: "60px", fontSize: "40px" }}>
          Những điều thú vị có thể bạn chưa biết
        </h2>
        <Button
          variant="contained"
          href="https://go2joy.vn/blog/"
          target="_blank"
          style={{
            backgroundColor: "white",
            color: "black",
            textTransform: "unset",
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: 0,
          }}
        >
          Danh sách bài blog
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
