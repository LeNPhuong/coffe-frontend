import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface type {
    user: {
        name: string | null;
        phone: string | null;
        guid: string | null;
    };
}

const initialState: type = {
    user: {
        name: "",
        phone: "",
        guid: "",
    },
};

const userSlice = createSlice({
    name: "paycard",
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<string>) => {
            state.user.name = action.payload;
        },
        getPhone: (state, action: PayloadAction<string>) => {
            state.user.phone = action.payload;
        },
        getGuid: (state, action: PayloadAction<string>) => {
            state.user.guid = action.payload;
        },
    },
});

export const { getUser, getPhone, getGuid } = userSlice.actions;

export default userSlice.reducer;
