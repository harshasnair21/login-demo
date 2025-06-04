import countryReducer from "./slices/countrySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
export default store;
