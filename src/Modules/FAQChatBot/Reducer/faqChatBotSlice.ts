import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    Data: Array<object>;
}

const initialState: CounterState = {
    Data: [],
};

export const faqChatBotSlice = createSlice({
    name: 'faqChatBot',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => {
        },
    },
    extraReducers: () => {
    },
});

export const { list } = faqChatBotSlice.actions;
export default faqChatBotSlice.reducer; 
