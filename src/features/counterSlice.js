import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            value: 0,
        },
        reducers: {
            increment: (state) => {
                state.value += 1;
            },
            decrement: (state) => {
                state.value -= 1;
            },
            incrementByAmount: (state, action) => {
                state.value += action.payload
            }
        },
    }
);

export const { increment, decrement , incrementByAmount } = counterSlice.actions;  // what all be done for the fetaure of counter

export default counterSlice.reducer;  // to make it available for store and since its always one reducer per slice so its default reducer