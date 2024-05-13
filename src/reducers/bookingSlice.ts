// features/bookingSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookRoomProps } from "../pages/room-page/RoomPage";

interface BookingState {
  selectedRoom: BookRoomProps;
}

const initialState: BookingState = {
  selectedRoom: localStorage.getItem("hotelBooking")
    ? JSON.parse(localStorage.getItem("hotelBooking")!)
    : {},
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectRoom(state, action: PayloadAction<BookRoomProps>) {
      state.selectedRoom = action.payload;
    },
  },
});

export const { selectRoom } = bookingSlice.actions;
export const selectSelectedRoom = (state: BookRoomProps) =>
  state.booking.selectedRoom;

export default bookingSlice.reducer;
