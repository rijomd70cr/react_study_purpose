import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { insertFriend, friendList } from '../Reducer/chatActions';

export interface chatState {
    isLoading: Boolean;
    isSuccess: string;
    friendList: any[];
    reload: number;
}

const initialState: chatState = {
    isLoading: false,
    isSuccess: '',
    friendList: [],
    reload: 0
};

export const chatSystemSlice = createSlice({
    name: 'chatSystem',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => { },
    },
    extraReducers: (builder) => {
        builder.addCase(insertFriend.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(insertFriend.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = 'success';
            state.reload = state.reload + 1;
        })
        builder.addCase(insertFriend.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = "failed";
        })

        builder.addCase(friendList.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(friendList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = 'success';
            state.friendList = action.payload?.data?.friendList;
        })
        builder.addCase(friendList.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = "failed";
        })

    },
});

export const { list } = chatSystemSlice.actions;  //export actions
export default chatSystemSlice.reducer; // reducer
