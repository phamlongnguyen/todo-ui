import { createSlice } from '@reduxjs/toolkit';
import { sortByDateAndPriority } from '../../utils';

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    'to-do': {
      id: 'to-do',
      name: 'To do',
      items: [],
    },
    'on-hold': {
      id: 'on-hold',
      name: 'On Hold',
      items: [],
    },
    'in-progress': {
      id: 'in-progress',
      name: 'In Progress',
      items: [],
    },
    done: {
      id: 'done',
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
    addTodoTask(state, action) {
      state['to-do'].items = sortByDateAndPriority([
        ...state['to-do'].items,
        action.payload,
      ]);
      localStorage.setItem('columnsTask', JSON.stringify(state));
    },
    deleteTask(state, action) {
      const { columnId, taskId } = action.payload;
      state[columnId].items = state[columnId].items.filter(
        (item) => item.id !== taskId,
      );
      localStorage.setItem('columnsTask', JSON.stringify(state));
    },
    updateTask(state, action) {
      const { columnId, body: task } = action.payload;
      state[columnId].items = sortByDateAndPriority(
        state[columnId].items.map((e) => (e.id === task.id ? task : e)),
      );
      localStorage.setItem('columnsTask', JSON.stringify(state));
    },
  },
});
const { actions, reducer } = todoSlice;
export const { updateColumns, initTodo, addTodoTask, deleteTask, updateTask } =
  actions;
export default reducer;
