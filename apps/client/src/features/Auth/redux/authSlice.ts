import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { decryptData } from "../../../utils/helpers";
import Cookies from "js-cookie";

interface AuthState {
  user: string | null;
}
const initialState: AuthState = {
  user: null,
};

const userFromCookie = Cookies.get("user");

if (userFromCookie) {
  initialState.user = decryptData(userFromCookie);
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
