// selectedCinemaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const selectedCinemaSlice = createSlice({
  name: "selectedCinema",
  // Khởi tạo trạng thái ban đầu (ban đầu không có chi nhánh rạp được chọn)
  initialState: null,
  reducers: {
    // Action để lưu chi nhánh rạp được chọn
    setSelectedCinema: (action: any) => {
      return action.payload;
    },
  },
});

export const { setSelectedCinema } = selectedCinemaSlice.actions;

export default selectedCinemaSlice.reducer;
