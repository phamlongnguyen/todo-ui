import { configureStore } from '@reduxjs/toolkit';
import columnsTask from './reducer/columnsTask';
import config from './reducer/config';
const store = configureStore({
  reducer: {
    columnsTask,
    config,
  },
});
export default store;
