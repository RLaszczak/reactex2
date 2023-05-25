import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    zero: (state) => {
      state.count=0 ;
    },
  },
});

export const { increment, decrement, zero } = counterSlice.actions;

export default counterSlice.reducer;
