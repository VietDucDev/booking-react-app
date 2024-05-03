import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../reducers/HotelsSlice";

export const store = configureStore({
  reducer: {
    bookedRooms: hotelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
