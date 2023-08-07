import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    Data: Array<object>;
}

const initialState: UserState = {
    Data: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => { },
    },
    extraReducers: () => {
    },
});

export const { list } = userSlice.actions;  //export actions
export default userSlice.reducer; // reducer
