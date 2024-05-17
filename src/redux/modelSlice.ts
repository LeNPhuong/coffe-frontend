import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface type {
    deleteOrder: boolean;
    map: boolean;
    authbuy: boolean;
    beforedelte: boolean;
}

const initialState: type = {
    deleteOrder: false,
    map: false,
    authbuy: false,
    beforedelte: false,
};

const slice = createSlice({
    name: "modelpgae",
    initialState,
    reducers: {
        btnorderdelete: (state, action: PayloadAction<boolean>) => {
            state.deleteOrder = action.payload;
        },
        btnmap: (state, action: PayloadAction<boolean>) => {
            state.map = action.payload;
        },
        btnbfdelte: (state, action: PayloadAction<boolean>) => {
            state.beforedelte = action.payload;
        },
        btnauth: (state, action: PayloadAction<boolean>) => {
            state.authbuy = action.payload;
        },
    },
});

export const { btnorderdelete, btnbfdelte, btnmap, btnauth } = slice.actions;
export default slice.reducer;
