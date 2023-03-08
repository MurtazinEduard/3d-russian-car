import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#4AB7AC",
  suspension: 0,
  wheels: "lambo", //lambo, classic
  plateNumbers: "Edward86",
};

export const controlSlice = createSlice({
  name: "controlChanger",
  initialState,
  reducers: {
    colorControl: (state, action) => {
      state.color = action.payload;
    },
    suspensionControl: (state, action) => {
      state.suspension = action.payload;
    },
    wheelsControl: (state, action) => {
      state.wheels = action.payload;
    },
    plateNumbersControl: (state, action) => {
      state.plateNumbers = action.payload;
    },
  },
});

export const { colorControl, suspensionControl, wheelsControl, plateNumbersControl } = controlSlice.actions;
export default controlSlice.reducer;
