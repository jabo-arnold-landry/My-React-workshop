import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";
import { apiCreated } from "../slices/apiSlice";
import { fetchedData } from "../slices/myOwnSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [apiCreated.reducerPath]: apiCreated.reducer,
    [fetchedData.reducerPath]: fetchedData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchedData.middleware),
});

export type DispatchType = typeof store.dispatch;
export type RooteState = ReturnType<typeof store.getState>;
export default store;
