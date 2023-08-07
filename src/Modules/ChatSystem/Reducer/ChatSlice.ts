import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { insertFriend } from '../Reducer/chatActions';

export interface chatState {
    isLoading: Boolean;
    isSuccess: String;
}

const initialState: chatState = {
    isLoading: false,
    isSuccess: '',
};

export const chatSystemSlice = createSlice({
    name: 'chatSystem',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => { },
    },
    extraReducers: (builder) => {
        builder.addCase(insertFriend.pending, (state) => {
            console.log("ok")
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(insertFriend.fulfilled, (state, action) => {
            console.log("yes")
            state.isLoading = false;
            state.isSuccess = 'success';
        })
        builder.addCase(insertFriend.rejected, (state) => {
            console.log("no")
            state.isLoading = false;
            state.isSuccess = "failed";
        })
    },
});

export const { list } = chatSystemSlice.actions;  //export actions
export default chatSystemSlice.reducer; // reducer
