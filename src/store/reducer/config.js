import { createSlice } from '@reduxjs/toolkit';

const config = createSlice({
  name: 'config',
  initialState: {
    isOpenTaskForm: false,
    data: {},
  },
  reducers: {
    toggleOpenTask(state, action) {
      state.isOpenTaskForm = action.payload;
      state.data = {};
    },
    openUpdateForm(state, action) {
      state.isOpenTaskForm = true;
      state.data = action.payload;
    },
  },
});
const { actions, reducer } = config;
export const { toggleOpenTask, openUpdateForm } = actions;
export default reducer;
