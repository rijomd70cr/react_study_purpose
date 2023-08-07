import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../Services/Request";
import { RootState } from "../../../Services/Store/Store";

import { insertFriendApi } from '../Config/URLConstants';

export const getChatSystemState = (state: RootState) => state.chatSystem;

export const insertFriend = createAsyncThunk('chatSystem/insertFriend',
    async (body: any, thunkAPI) => {
        try {
            const response = await axios.post<any>(insertFriendApi, body);
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("error");
        }

    }
)

