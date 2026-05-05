import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialData = {
  names: "jabo",
  email: "arnoldjabo@gmail.com",
  location: {
    city: "",
    district: "",
  },
};
const userSlice = createSlice({
  name: "userdata",
  initialState: initialData,
  reducers: {
    addLocation(state, action: PayloadAction<Record<string, string>>) {
      state.location = {
        city: action.payload.city,
        district: action.payload.district,
      };
    },
  },
});
export const { addLocation } = userSlice.actions;

export default userSlice.reducer;
