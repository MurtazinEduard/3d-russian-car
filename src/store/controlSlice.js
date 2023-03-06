import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* color: "#ff0000",
  suspension: 0,
  wheels: 'Lambo' */
  color: "#ff0000",
  suspension: 0,
    wheels: 'lambo' //lambo, classic
};

export const controlSlice = createSlice({
  name: "controlChanger",
  initialState,
  reducers: {
    /* changer: (state, action) => {
      state.color = action.payload;
      
    },
    suspensionControl: (state, action) => {
      state.suspension = action.payload
    },
    wheelsControl: (state, action) => {
      state.wheels = action.payload
    } */
    colorControl: (state, action) => {
      state.color = action.payload;
    },
    suspensionControl: (state, action) => {
      state.suspension = action.payload;
    },
    wheelsControl: (state, action) => {
        state.wheels = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
/* export const { changer } = colorSlice.actions;
export const { suspensionControl } = colorSlice.actions;
export const { wheelsControl } = colorSlice.actions; */

export const { colorControl } = controlSlice.actions;
export const { suspensionControl } = controlSlice.actions;
export const { wheelsControl } = controlSlice.actions;

export default controlSlice.reducer;
