import { toast, ToastOptions } from "react-toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookRoomProps } from "../pages/RoomPage/RoomPage";

interface HotelState {
  bookedHotels: BookRoomProps[];
}

const initialState: HotelState = {
  bookedHotels: localStorage.getItem("bookedHotels")
    ? JSON.parse(localStorage.getItem("bookedHotels")!)
    : [],
};

const hotelSlice = createSlice({
  name: "hotelList",
  initialState,
  reducers: {
    bookRoom(state, action: PayloadAction<BookRoomProps>) {
      const isAlreadyBooked = state.bookedHotels.some(
        (hotel) =>
          hotel.roomId === action.payload.roomId &&
          hotel.hotelId === action.payload.hotelId
      );

      if (!isAlreadyBooked) {
        state.bookedHotels.push({ ...action.payload });
        const toastOptions: ToastOptions = {
          autoClose: 2500,
          pauseOnHover: false,
          style: { top: "60px" },
        };
        toast.success("Đặt phòng thành công!!", toastOptions);

        localStorage.setItem(
          "bookedHotels",
          JSON.stringify(state.bookedHotels)
        );
      } else {
        toast.error("Bạn đã đặt phòng này trước đó rồi!", {
          autoClose: 2500,
          pauseOnHover: false,
          style: { top: "60px" },
        });
      }
    },

    cancelRoom(state, action: PayloadAction<BookRoomProps>) {
      const updatedBookedHotels = state.bookedHotels.filter(
        (hotel) =>
          hotel.roomId !== action.payload.roomId ||
          hotel.hotelId !== action.payload.hotelId
      );
      state.bookedHotels = updatedBookedHotels;
      localStorage.setItem("bookedHotels", JSON.stringify(updatedBookedHotels));
      toast.info("Đã hủy đặt phòng!", {
        autoClose: 2500,
        pauseOnHover: false,
        style: { top: "60px" },
      });
    },
  },
});

export const { bookRoom, cancelRoom } = hotelSlice.actions;
export default hotelSlice.reducer;
