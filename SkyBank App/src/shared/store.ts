import { configureStore } from '@reduxjs/toolkit';
import UserSlicer from './UserSlicer';
import ThemeSlicer from './ThemeSlicer';

export const store = configureStore({
  reducer: { user: UserSlicer, theme: ThemeSlicer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
