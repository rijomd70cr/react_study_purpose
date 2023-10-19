import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    Data: Array<object>;
}

const initialState: CounterState = {
    Data: [],
};

export const DinoGameSlice = createSlice({
    name: 'DinoGame',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => { },
    },
    extraReducers: () => {
    },
});

export const { list } = DinoGameSlice.actions;  //export actions
export default DinoGameSlice.reducer; //xport reducer
