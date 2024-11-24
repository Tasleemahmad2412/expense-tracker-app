import { configureStore } from "@reduxjs/toolkit";
import trasnactionReducer from "../transactionSlice.js";

const store = configureStore({
  reducer: {
    transaction: trasnactionReducer,
  },
});

export default store;
