import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    addTweet: (state, action) => {
    //   console.log('payload', action.payload);
      state.value.push(action.payload);
    },
    addAllTweets: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTweet, addAllTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
