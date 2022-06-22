import { configureStore } from "@reduxjs/toolkit";
import AddFormData from "./reducers/AddFormData";

export default configureStore({
  reducer: {
    addData: AddFormData,
  },
});
