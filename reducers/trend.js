import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const trendSlice = createSlice({
    name: 'trend',
    initialState,
    reducers: {
        addTrend: (state, action) => {
            console.log(action.payload)
            if (action.payload) {
            const arr = action.payload.split(' ')

            arr.map((data, i) => {
                console.log('strs', data)
                if (data[0] === '#') {
                    console.log('found trend', data)
                    if (!state.value.find(trend => trend === data))
                        state.value.push(data)
                }
            })
        }
        }
    }
})

export const { addTrend } = trendSlice.actions;
export default trendSlice.reducer