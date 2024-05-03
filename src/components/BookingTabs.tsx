import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#003c43",
  },
});

const AntTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#003c43",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#003c43",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
    "& img": {
      height: 20,
      width: 20,
      marginBottom: 8,
    },
  })
);

export default function BookingTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs centered value={value} onChange={handleChange}>
          <AntTab
            sx={{ fontWeight: "600" }}
            label={
              <>
                <img
                  src="https://go2joy.vn/_nuxt/hourly-icon.03d69c6d.svg"
                  alt="hourly-icon"
                />
                Theo giờ
              </>
            }
          />
          <AntTab
            sx={{ fontWeight: "600" }}
            label={
              <>
                <img
                  src="https://go2joy.vn/_nuxt/overnight-icon.102a4f3c.svg"
                  alt="overnight-icon"
                />
                Qua đêm
              </>
            }
          />
          <AntTab
            sx={{ fontWeight: "600" }}
            label={
              <>
                <img
                  src="https://go2joy.vn/_nuxt/daily-icon.0b47246e.svg"
                  alt="daily_icon"
                />
                Theo ngày
              </>
            }
          />
        </AntTabs>
      </Box>
    </Box>
  );
}
