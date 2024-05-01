import { QueryParams } from "../pages/hotel-list-page/HotelListPage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryParams: {} as QueryParams,
};

const hotelSlice = createSlice({
  name: "hotelList",
  initialState,
  reducers: {
    addQueryParams(state, action: PayloadAction<QueryParams>) {
      state.queryParams = action.payload;
      console.log("action from reducer: ", action);
    },
  },
});

export const { addQueryParams } = hotelSlice.actions;
export default hotelSlice.reducer;
