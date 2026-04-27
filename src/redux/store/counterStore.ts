import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type DispatchType = typeof store.dispatch;
export type RooteState = ReturnType<typeof store.getState>;
export default store;
