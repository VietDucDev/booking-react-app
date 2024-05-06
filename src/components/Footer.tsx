// import "../style/sass/_footer.scss";
const Footer = () => {
  return (
    <div
      className="mx-0 mx-sm-5 pt-5 px-3"
      style={{ backgroundColor: "#003C43", color: "white" }}
    >
      <div className="d-flex flex-column flex-lg-row pb-4">
        <div className="d-flex flex-column flex-sm-row col-12 col-lg-6 mb-3 mb-lg-0">
          <div className="col-12 col-sm-6 col-lg-8">
            <h6 style={{ marginBottom: "20px", fontSize: "18px" }}>Hỗ trợ</h6>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
                <i className="fa-solid fa-phone"></i> Hotline: 0931 836 836
              </p>
              <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
                Hỗ trợ khách hàng: cskh@go2joy.vn
              </p>
              <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
                Liên hệ hợp tác: support@go2joy.vn
              </p>
              <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
                Cơ chế giải quyết tranh chấp, khiếu nại
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <h6 style={{ marginBottom: "20px", fontSize: "18px" }}>
              Giới thiệu
            </h6>
            <p style={{ fontSize: "14px", color: "#BEBEBE" }}>Về chúng tôi</p>
            <p style={{ fontSize: "14px", color: "#BEBEBE" }}>Trang blog</p>
            <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
              Quy chế hoạt động website
            </p>
            <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
              Cơ hội nghề nghiệp
            </p>
            <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
              Dành cho đối tác
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row col-12 col-lg-6">
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
            <h6 style={{ marginBottom: "20px", fontSize: "18px" }}>
              Đối tác thanh toán
            </h6>
            <div>
              <img
                src="https://go2joy.vn/_nuxt/shopeepay.89dd40ff.svg"
                alt="shopee_pay"
                width={24}
                className="mr-3"
              />
              <img
                src="https://go2joy.vn/_nuxt/momo.7e83d0c3.svg"
                alt="shopee_pay"
                width={24}
                className="mr-3"
              />
              <img
                src="https://go2joy.vn/_nuxt/zalopay.3184919a.svg"
                alt="shopee_pay"
                width={24}
                className="mr-3"
              />
              <img
                src="https://go2joy.vn/_nuxt/mastercard.23cb7791.svg"
                alt="shopee_pay"
                width={24}
                className="mr-3"
              />
              <img
                src="https://go2joy.vn/_nuxt/visa.fa0f5cf8.svg"
                alt="shopee_pay"
                width={24}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <h6 style={{ marginBottom: "20px", fontSize: "18px" }}>
              Mạng xã hội
            </h6>
            <div>
              <i
                className="fa-brands fa-facebook mr-3"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-instagram mr-3"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-twitter mr-3"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-linkedin mr-3"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
              <i
                className="fa-brands fa-hive"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="py-4 px-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-center"
        style={{
          borderTop: "1px solid gray",
          fontSize: "13px",
          color: "whitesmoke",
        }}
      >
        Copyright © 2024 FPT Software Academy. All rights reserved.
        <div className="mt-3 mt-md-0">
          <span className="mr-4">Privacy Policy</span>
          <span>Terms of use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
