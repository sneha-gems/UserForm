import { configureStore } from "@reduxjs/toolkit";
import AddFormData from "./reducers/AddFormData";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
// const rootReducer = combineReducers({
//   user: userReducer,
//   notes: NotesReducer
// })

const persistedReducer = persistReducer(persistConfig, AddFormData);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
