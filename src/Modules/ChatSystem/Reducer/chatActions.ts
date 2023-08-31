import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../Services/Request";
import { RootState } from "../../../Services/Store/Store";

import { insertFriendApi, friendListApi, changeDBApi, deleteFriendApi, requestFriendApi } from '../Config/URLConstants';

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

export const friendList = createAsyncThunk('chatSystem/friendList',
    async (body: any, thunkAPI) => {
        try {
            const response = await axios.get<any>(friendListApi);
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("error");
        }

    }
)

export const changeDB = createAsyncThunk('chatSystem/friendList',
    async (body: any, thunkAPI) => {
        try {
            const response = await axios.post<any>(changeDBApi, body);
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("error");
        }

    }
)

export const deleteFriend = createAsyncThunk('chatSystem/deleteFriend',
    async (body: any, thunkAPI) => {
        try {
            const response = await axios.delete<any>(deleteFriendApi, { data: body });
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("error");
        }

    }
)

export const requestFriend = createAsyncThunk('chatSystem/deleteFriend',
    async (body: any, thunkAPI) => {
        try {
            const response = await axios.post<any>(requestFriendApi, { data: body });
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("error");
        }

    }
)