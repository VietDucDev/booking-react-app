import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Carousel_RoomPage_Img from "../room-page/Carousel_RoomPage_Img";
import "../../style/sass/room-detail-scss/RoomDetail.scss";

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
            <p>{data?.firstHours} giờ</p>
            <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
              {dataRoomItem?.price.toLocaleString("vi-VN")} đ
            </p>
            <button style={{ backgroundColor: "#003c43" }}>Đặt Phòng</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
