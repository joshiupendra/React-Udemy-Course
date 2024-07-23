import { configureStore } from '@reactjs/toolkit';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice
  }
});

export default store;