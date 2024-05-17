import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface datatype {
  _id: string;
  name: string;
  price: number;
  img: string;
  size: { name: string; price: number; _id: string } | null;
  quantity: number;
  topping: {
    name: string;
    price: number;
    _id: string;
    quantity: number;
  } | null;
  note: string;
  keys: number;
}

interface type {
  data: datatype | null;
}

const initialState: type = {
  data: null,
};

const sliceEdit = createSlice({
  name: "edit",
  initialState,
  reducers: {
    switchEdit: (state, action: PayloadAction<datatype | null>) => {
      state.data = action.payload;
    },
  },
});

export const { switchEdit } = sliceEdit.actions;

export default sliceEdit.reducer;
