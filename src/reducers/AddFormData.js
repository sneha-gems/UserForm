import { createSlice } from "@reduxjs/toolkit";

export const AddFormData = createSlice({
  name: "add",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state = [], action) => {
      if (action.type === "add/addData") {
        return {
          ...state,
          data: [action.payload],
        };
      }
      return state;
    },
  },
});

export const addForm = (values) => async (dispatch) => {
  await dispatch(addData(values));
};

export const deleteData = () => async (dispatch) => {
  await dispatch({ type: "add/addData", payload: [] });
};

export const { addData } = AddFormData.actions;

export default AddFormData.reducer;
