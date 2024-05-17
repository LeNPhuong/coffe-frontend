import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface product {
  _id: string;
  name: string;
  price: number;
  img: string;
  active: boolean;
  des: string;
  slug: string;
  type: string[];
  size: { name: string; price: number; _id: string }[];
  topping: {
    name: string;
    price: number;
    _id: string;
  }[];
}

interface cartdata {
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

interface productshow {
  details: product | null;
  cart: cartdata[] | null;
  map: string;
  medthodPay: { id: number; name: string; img: string; keys: string } | null;
}

const initialState: productshow = {
  details: null,
  cart: JSON.parse(localStorage.getItem("cart")!) || null,
  map: JSON.parse(localStorage.getItem("mapdata")!) || "",
  medthodPay: null,
};

const slice = createSlice({
  name: "coffe",
  initialState,
  reducers: {
    getDetails: (state, action: PayloadAction<product | null>) => {
      state.details = action.payload;
    },
    getCart: (state, action: PayloadAction<cartdata | null>) => {
      const dataraw = action.payload!;

      if (!state.cart) {
        state.cart = [];
        state.cart.push(dataraw);
      } else {
        const statusHas = state.cart.some(
          (e) =>
            e._id === dataraw._id &&
            e.size?._id === dataraw.size?._id &&
            (e.topping
              ? e.topping._id === dataraw.topping?._id &&
                e.topping.quantity === dataraw.topping.quantity
                ? true
                : false
              : e.topping === dataraw.topping
              ? true
              : false),
        );

        if (statusHas) {
          state.cart.map((e) =>
            e._id === dataraw._id &&
            e.size?._id === dataraw.size?._id &&
            (e.topping
              ? e.topping._id === dataraw.topping?._id &&
                e.topping.quantity === dataraw.topping.quantity
                ? true
                : false
              : e.topping === dataraw.topping
              ? true
              : false)
              ? (e.quantity += dataraw.quantity)
              : e,
          );
        } else {
          state.cart.push(dataraw);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getMap: (state, action: PayloadAction<string>) => {
      state.map = action.payload;
      localStorage.setItem("mapdata", JSON.stringify(action.payload));
    },
    getMethodPay: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        img: string;
        keys: string;
      } | null>,
    ) => {
      state.medthodPay = action.payload;
    },
    removeCart: (state, action: PayloadAction<null>) => {
      state.cart = action.payload;
      localStorage.removeItem("cart");
    },
    deleteItems: (state, action: PayloadAction<number>) => {
      state.cart = state.cart?.filter((e) => e.keys !== action.payload) || null;
      if (state.cart?.length === 0) {
        state.cart = null;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    changeProduct: (
      state,
      action: PayloadAction<{
        keys: number;
        size: { name: string; price: number; _id: string } | null;
        quantity: number;
        topping: {
          name: string;
          price: number;
          _id: string;
          quantity: number;
        } | null;
      }>,
    ) => {
      const data = action.payload;
      state.cart?.map((e) => (e.keys === data.keys ? Object.assign(e, data) : e));
    },
  },
});

export const {
  getDetails,
  getCart,
  getMap,
  getMethodPay,
  removeCart,
  deleteItems,
  changeProduct,
} = slice.actions;

export default slice.reducer;
