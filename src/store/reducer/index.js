// 1. Setup todo slice

import { createSlice } from '@reduxjs/toolkit';

// todoSlice.js
const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    'to-do': {
      name: 'To do',
      items: [],
    },
    'on-hold': {
      name: 'On Hold',
      items: [],
    },
    'in-progress': {
      name: 'In Progress',
      items: [],
    },
    done: {
      name: 'Done',
      items: [],
    },
  },
  reducers: {
    initTodo(state, action) {
      state['to-do'].items = action.payload;
    },
    updateColumns(state, action) {
      Object.keys(action.payload).forEach((e) => {
        state[e].items = action.payload[e].items;
      });
      localStorage.setItem('columnsTask', JSON.stringify(state));
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});
const { actions, reducer } = todoSlice;
export const { updateColumns, initTodo } = actions;
export default reducer;
