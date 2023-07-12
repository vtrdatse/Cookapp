import appSlice from './appSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    appSlice: appSlice,
  },
});

export default store;

// Infer the `RootState` type from the store itself
export const RootState = store.getState();
export const AppDispatch = store.dispatch;
