import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type DispatchType = typeof store.dispatch;
export type RooteState = ReturnType<typeof store.getState>;
export default store;
