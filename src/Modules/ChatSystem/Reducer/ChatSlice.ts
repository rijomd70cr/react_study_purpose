import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { insertFriend, friendList, deleteFriend, myRequest, freindRequest, createOrUpdateRomm } from '../Reducer/chatActions';

export interface chatState {
    isLoading: Boolean;
    isSuccess: string;
    friendList: any[];
    reload: number;
    reloadMyRequest: number,
    myRequestList: any[];
    myMessages: any[];
    isChatLoading: Boolean;
    myChatRoomID: string
}

const initialState: chatState = {
    isLoading: false,
    isChatLoading: false,

    reload: 0,
    reloadMyRequest: 0,
    isSuccess: '',

    friendList: [],
    myRequestList: [],
    myChatRoomID: "",
    myMessages: []
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

        builder.addCase(deleteFriend.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(deleteFriend.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = 'success';
            state.reload = state.reload + 1;
        })
        builder.addCase(deleteFriend.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = "failed";
        })

        builder.addCase(myRequest.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(myRequest.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = 'success';
            state.myRequestList = payload.data.requestList;
            state.reload = state.reload + 1;
        })
        builder.addCase(myRequest.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = "failed";
        })

        builder.addCase(freindRequest.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(freindRequest.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = 'success';
            state.reloadMyRequest = state.reloadMyRequest + 1;
        })
        builder.addCase(freindRequest.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = "failed";
        })

        builder.addCase(createOrUpdateRomm.pending, (state) => {
            state.isChatLoading = true;
            state.isSuccess = '';
        })
        builder.addCase(createOrUpdateRomm.fulfilled, (state, { payload }) => {
            state.isChatLoading = false;
            state.isSuccess = 'success';
            state.myChatRoomID = payload.data?.roomId || ""
            state.myMessages = payload.data?.messages || []
        })
        builder.addCase(createOrUpdateRomm.rejected, (state) => {
            state.isChatLoading = false;
            state.isSuccess = "failed";
            state.myChatRoomID = "";
            state.myMessages = [];
        })


    },
});

export const { list } = chatSystemSlice.actions;  //export actions
export default chatSystemSlice.reducer; // reducer
