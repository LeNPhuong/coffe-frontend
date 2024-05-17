import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface datauser {
  name: string;
  email: string;
  phone: string;
  tokentotal: number;
  active: boolean;
  role: string;
}

interface typedata {
  user: datauser | null;
}

const initialState: typedata = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getdatauser: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        phone: string;
        tokentotal: number;
        active: boolean;
        role: string;
      } | null>,
    ) => {
      state.user = action.payload;
    },
  },
});

export const { getdatauser } = slice.actions;

export default slice.reducer;
