import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: boolean = true;

const DayNightSlice = createSlice({
  name: 'daynight',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<boolean>) => !initialState,
    setDefault: (state, action: PayloadAction<boolean>) => true,
  },
});

export const { setMode, setDefault } = DayNightSlice.actions;
export default DayNightSlice.reducer;
export const selecDayNightSlice = (state: RootState) => state.theme;
