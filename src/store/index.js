import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './reducer';
const store = configureStore({
  reducer: {
    columnsTask: todoSlice,
  },
});
export default store;
