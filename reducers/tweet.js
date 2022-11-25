import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        createdAt: (state, action)=> {
            state.value.date = action.payload.date
        }
    },
  });
  
  export const { createdAt } = tweetSlice.actions;
  export default tweetSlice.reducer;