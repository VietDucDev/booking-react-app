import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { blue } from "@mui/material/colors";
import Carousel_RoomPage_Img from "../RoomPage/Carousel_RoomPage_Img";
import "./RoomDetail.scss";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog className="room-detail-container" onClose={handleClose} open={open}>
      <div className="room-detail-box">
        <div className="room-detail-left">
          <Carousel_RoomPage_Img />
        </div>
        <div className="room-detail-right">
          <div className="right-info">
            <h2 className="mb-2">Phòng VIP</h2>
            <p>Thông tin phòng</p>
            <p>20m2 Cửa sổ</p>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </IconButton>
          </div>
          <div className="right-checkout">
            <p>2 giờ</p>
            <p>250.000</p>
            <button>Đặt Phòng</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default function RoomDetail() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="room-detail">
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
