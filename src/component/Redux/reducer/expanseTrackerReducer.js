import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  price: "",
  transactionType: "contribution",
  owner: "PrinceYadav",
  isEditEnable: false,
};
const expanseTrackerSlice = createSlice({
  name: "expansetracker",
  initialState: initialState,
  reducers: {
    updateExpanseTrackerData(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { updateExpanseTrackerData } = expanseTrackerSlice.actions;
export default expanseTrackerSlice.reducer;
