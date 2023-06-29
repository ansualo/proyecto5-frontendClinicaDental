import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        id: ""
    },
    reducers: {
        saveId: (state, action) => {
            let { payload } = action;
            state.id = payload.id
        }
    }
});

export const appointmentData = (state) => state.appointment;
export const { saveId } = appointmentSlice.actions;
export default appointmentSlice.reducer;