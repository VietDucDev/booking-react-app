import { toast, ToastOptions } from "react-toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataProps } from "../pages/RoomPage/RoomPage";

interface HotelState {
  bookedHotels: DataProps[];
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
    bookRoom(state, action: PayloadAction<DataProps>) {
      const isAlreadyBooked = state.bookedHotels.some(
        (hotel) => hotel.id === action.payload.id
      );

      if (!isAlreadyBooked) {
        state.bookedHotels.push({ ...action.payload });
        const toastOptions: ToastOptions = {
          autoClose: 2500,
          pauseOnHover: false,
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
        });
      }
    },

    cancelRoom(state, action: PayloadAction<DataProps>) {
      const updatedBookedHotels = state.bookedHotels.filter(
        (hotel) => hotel.id !== action.payload.id
      );
      state.bookedHotels = updatedBookedHotels;
      localStorage.setItem("bookedHotels", JSON.stringify(updatedBookedHotels));
      toast.info("Đã hủy đặt phòng!", {
        autoClose: 2500,
        pauseOnHover: false,
      });
    },
  },
});

export const { bookRoom, cancelRoom } = hotelSlice.actions;
export default hotelSlice.reducer;
