import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface type {
  codeorder: string;
  odbfdl: string;
  token: string | null;
}

const initialState: type = {
  codeorder: "",
  odbfdl: "",
  token: null,
};

const slice = createSlice({
  name: "modelpgae",
  initialState,
  reducers: {
    getcodeorder: (state, action: PayloadAction<string>) => {
      state.codeorder = action.payload;
    },
    getdtbfdl: (state, action: PayloadAction<string>) => {
      state.odbfdl = action.payload;
    },
    gettoken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { getcodeorder, getdtbfdl, gettoken } = slice.actions;
export default slice.reducer;
