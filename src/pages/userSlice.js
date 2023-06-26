import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        credentials: {
            token: "",
        },
        data: {
            userId: "",
            roleId: "",
        },
    },
    reducers: {
        login: (state, action) => {
            let { payload } = action;
            state.credentials = {
                token: payload.token,
            };
            state.data = {
                userId: payload.userId,
                roleId: payload.roleId,
            };
        },
        logout: (state) => {
            state.credentials = {
                token: "",
            };
            state.data = {
                userId: "",
                roleId: "",
            };
        },
    },
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;