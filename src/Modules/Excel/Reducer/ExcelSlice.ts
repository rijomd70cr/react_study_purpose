import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    Data: Array<object>;
}

const initialState: UserState = {
    Data: [],
};

export const excelSlice = createSlice({
    name: 'excel',
    initialState,
    reducers: {
        list: (state, action: PayloadAction<Object>) => { },
    },
    extraReducers: () => {
    },
});

export const { list } = excelSlice.actions;  //export actions
export default excelSlice.reducer; // reducer
