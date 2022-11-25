import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addTweet: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
            // state.value.likes.state.push({username: state.value.username, liked: false})
        },
        addAllTweets: (state, action) => {
            state.value = action.payload
        },
        incrementLikes: (state, action) => {
            const likeIndex = state.value.findIndex(e => e.tweet === action.payload.tweet)
            if (likeIndex !== -1) {
                    state.value[likeIndex].likes++;
            }
        },
        removeTweet: (state, action) => {
            const tweetIndex = state.value.findIndex(e => e.tweet === action.payload)
            if (tweetIndex !== -1)
                state.value.splice(tweetIndex, 1)
        }

    }
})

export const { addTweet, addAllTweets, incrementLikes, removeTweet } = tweetSlice.actions
export default tweetSlice.reducer