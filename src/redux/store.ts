import { configureStore } from '@reduxjs/toolkit';
import issuesSlice from './issueSlice';

const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
