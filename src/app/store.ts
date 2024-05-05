import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../reducers/HotelsSlice";
import bookingReducer from "../reducers/bookingSlice";

export const store = configureStore({
  reducer: {
    bookedRooms: hotelsReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
