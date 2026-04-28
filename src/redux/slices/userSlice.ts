import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialData: Record<string, unknown> = {
  names: "jabo",
  email: "arnoldjabo@gmail.com",
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
