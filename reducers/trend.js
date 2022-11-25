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
                    const hashIndex = state.value.findIndex(trendd => trendd.trend === data)
                    console.log(hashIndex)
                        if (hashIndex !== -1)
                            state.value[hashIndex].number = state.value[hashIndex].number + 1;
                        else 
                            state.value.push({trend: data, number: 0})
                }
            })
        }
        }
    }
})

export const { addTrend } = trendSlice.actions;
export default trendSlice.reducer