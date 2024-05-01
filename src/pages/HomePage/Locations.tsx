import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Locations = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: "80px", height: "320px" }}>
      <h3 className="text-left">Cảm hứng cho những lần tiếp theo</h3>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="TP Hồ Chí Minh"
              {...a11yProps(0)}
              style={{ textTransform: "unset" }}
            />
            <Tab
              label="Hà Nội"
              {...a11yProps(1)}
              style={{ textTransform: "unset" }}
            />
            <Tab
              label="Đà Nẵng"
              {...a11yProps(2)}
              style={{ textTransform: "unset" }}
            />
            <Tab
              label="Nha Trang"
              {...a11yProps(3)}
              style={{ textTransform: "unset" }}
            />
            <Tab
              label="Hải Phòng"
              {...a11yProps(4)}
              style={{ textTransform: "unset" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="row">
            <div className="col">
              <p className="m-0">Quận 1</p>
              <p className="mt-1 text-secondary">1392 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Bình Thạnh</p>
              <p className="mt-1 text-secondary">800 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Quận 4</p>
              <p className="mt-1 text-secondary">725 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Quận 7</p>
              <p className="mt-1 text-secondary">425 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Quận 2</p>
              <p className="mt-1 text-secondary">412 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Tân Bình</p>
              <p className="mt-1 text-secondary">348 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Quận 3</p>
              <p className="mt-1 text-secondary">277 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Thủ Đức</p>
              <p className="mt-1 text-secondary">184 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Phú Nhuận</p>
              <p className="mt-1 text-secondary">149 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Gò Vấp</p>
              <p className="mt-1 text-secondary">115 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Quận 10</p>
              <p className="mt-1 text-secondary">107 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Bình Chánh</p>
              <p className="mt-1 text-secondary">93 khách sạn</p>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <div className="row">
            <div className="col">
              <p className="m-0">Hoàn Kiếm</p>
              <p className="mt-1 text-secondary">752 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Ba Đình</p>
              <p className="mt-1 text-secondary">531 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Nam Từ Liêm</p>
              <p className="mt-1 text-secondary">525 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Cầu Giấy</p>
              <p className="mt-1 text-secondary">425 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Tây Hồ</p>
              <p className="mt-1 text-secondary">329 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hai Bà Trưng</p>
              <p className="mt-1 text-secondary">265 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Đống Đa</p>
              <p className="mt-1 text-secondary">253 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Gia Lâm</p>
              <p className="mt-1 text-secondary">193 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Thanh Xuân</p>
              <p className="mt-1 text-secondary">129 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Sóc Sơn</p>
              <p className="mt-1 text-secondary">122 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hà Đông</p>
              <p className="mt-1 text-secondary">96 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Long Biên</p>
              <p className="mt-1 text-secondary">79 khách sạn</p>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <div className="row">
            <div className="col">
              <p className="m-0">Sơn Trà</p>
              <p className="mt-1 text-secondary">709 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Ngũ Hành Sơn</p>
              <p className="mt-1 text-secondary">643 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hải Châu</p>
              <p className="mt-1 text-secondary">272 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Thanh Khê</p>
              <p className="mt-1 text-secondary">94 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Liên Chiếu</p>
              <p className="mt-1 text-secondary">27 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Cẩm Lệ</p>
              <p className="mt-1 text-secondary">22 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hòa Vang</p>
              <p className="mt-1 text-secondary">7 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hoàng Sa</p>
              <p className="mt-1 text-secondary">1 khách sạn</p>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <div className="row">
            <div className="col">
              <p className="m-0">Nha Trang</p>
              <p className="mt-1 text-secondary">1251 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Cam Lâm</p>
              <p className="mt-1 text-secondary">98 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Cam Ranh</p>
              <p className="mt-1 text-secondary">63 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Ninh Hòa</p>
              <p className="mt-1 text-secondary">25 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Vạn Ninh</p>
              <p className="mt-1 text-secondary">3 khách sạn</p>
            </div>
            <div className="col-9">
              <p className="m-0">Diên Khánh</p>
              <p className="mt-1 text-secondary">2 khách sạn</p>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <div className="row">
            <div className="col">
              <p className="m-0">Cát Hải</p>
              <p className="mt-1 text-secondary">160 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hồng Bàng</p>
              <p className="mt-1 text-secondary">121 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Ngô Quyền</p>
              <p className="mt-1 text-secondary">113 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Hải An</p>
              <p className="mt-1 text-secondary">89 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Lê Chân</p>
              <p className="mt-1 text-secondary">84 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Đồ Sơn</p>
              <p className="mt-1 text-secondary">17 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">An Dương</p>
              <p className="mt-1 text-secondary">13 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Dương Kinh</p>
              <p className="mt-1 text-secondary">9 khách sạn</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Kiến An</p>
              <p className="mt-1 text-secondary">7 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Thủy Nguyên</p>
              <p className="mt-1 text-secondary">7 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">An Lão</p>
              <p className="mt-1 text-secondary">3 khách sạn</p>
            </div>
            <div className="col">
              <p className="m-0">Kiến Thụy</p>
              <p className="mt-1 text-secondary">2 khách sạn</p>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Locations;
