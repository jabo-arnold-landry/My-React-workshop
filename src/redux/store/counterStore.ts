import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";
import { apiCreated } from "../slices/apiSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [apiCreated.reducerPath]: apiCreated.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCreated.middleware),
});

export type DispatchType = typeof store.dispatch;
export type RooteState = ReturnType<typeof store.getState>;
export default store;
