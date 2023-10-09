import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    Data: Array<object>;
}

const initialState: CounterState = {
    Data: [],
};

export const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => {
        },
    },
    extraReducers: () => {
    },
});

export const { list } = studySlice.actions;  //export actions
export default studySlice.reducer; //xport reducer
