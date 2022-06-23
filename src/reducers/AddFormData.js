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
          data: [...state.data, action.payload],
        };
      }
      return state;
    },
    removeData: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => item?.id !== action.payload),
      };
    },
    resetList: () => {
      return {
        data: [],
      };
    },
    updatedata: (state, action) => {
      return {
        ...state,
        data: [
          ...state.data.filter((item) => item?.id !== action.payload.id),
          action.payload,
        ],
      };
    },
  },
});

// export const addForm = (values) => async (dispatch) => {
//   await dispatch(addData(values));
// };
export const addForm2 = (values) => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
    .then(() => {
      dispatch(addData(values));
    })
    .catch((e) => {
      console.error(e);
    });
};

export const deleteData = (rowId) => async (dispatch) => {
  await dispatch({ type: "add/removeData", payload: rowId });
};

export const reset = () => async (dispatch) => {
  await dispatch(resetList());
};

export const editForm = (updatedata) => async (dispatch) => {
  await dispatch({ type: "add/updatedata", payload: updatedata });
};

export const { addData, removeData, resetList, updatedata } =
  AddFormData.actions;

export default AddFormData.reducer;
