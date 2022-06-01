import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      console.log(action)
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    authLogout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer;
