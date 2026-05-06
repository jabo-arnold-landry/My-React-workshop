import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

const initialData = {
  names: "jabo",
  email: "arnoldjabo@gmail.com",
  location: { city: "", district: "" },
};
type newMe = Omit<typeof initialData, "id">;
type Location = { city: string; district: string };

const userSlice = createSlice({
  name: "userdata",
  initialState: initialData,
  reducers: {
    addLocation(state, action: PayloadAction<Location>) {
      state.location = {
        city: action.payload.city,
        district: action.payload.district,
      };
    },

    addNewUser: {
      reducer: (state, action: PayloadAction<newMe>) => {
        return action.payload;
      },

      prepare: (payload: newMe) => ({
        payload: {
          id: nanoid(),
          ...payload,
        },
      }),
    },
  },
});
export const { addLocation, addNewUser } = userSlice.actions;

export default userSlice.reducer;
