import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type counterStatus = "active" | "inactive" | "pending...";

type counterState = {
  count: number;
  status: counterStatus;
};
const initialState: counterState = {
  count: 0,
  status: "pending...",
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<counterStatus>) => {
      state.status = action.payload;
    },
  },
});
export const { increment, decrement, reset, setStatus } = counterSlice.actions;
export default counterSlice.reducer;
