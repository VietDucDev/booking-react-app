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
import { DataProps, Room } from "../RoomPage/RoomPage";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  dataRoomItem: any;
  data: any;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {

  const { open, dataRoomItem, data, onClose } = props;

  const handleClose = () => {
    onClose(dataRoomItem);
  };

  return (
    <Dialog className="room-detail-container" onClose={handleClose} open={open}>
      <div className="room-detail-box">
        <div className="room-detail-left">
          <Carousel_RoomPage_Img
            imgList={dataRoomItem?.roomImages || []}
            showThumbnails={true}
          />
        </div>
        <div className="room-detail-right">
          <div className="right-info">
            <h2 className="mb-2">{dataRoomItem?.roomName}</h2>
            <p>Thông tin phòng</p>
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
            <p>{data?.firstHours} giờ giờ</p>
            <p>{dataRoomItem?.price.toLocaleString("vi-VN")} đ</p>
            <button>Đặt Phòng</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

// export default function RoomDetail() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div className="room-detail">
//       <Typography variant="subtitle1" component="div"></Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog open={open} dataRoomItem={} onClose={handleClose} />
//     </div>
//   );
// }
