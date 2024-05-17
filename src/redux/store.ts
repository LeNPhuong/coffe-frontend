import { configureStore } from "@reduxjs/toolkit";
import actionProduct from "./sliceProduct";
import Edit from "./editSlice";
import pay from "./slicePay";
import modelpgae from "./modelSlice";
import data from "./dataSlice";
import user from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        product: actionProduct,
        edit: Edit,
        pay: pay,
        modelpgae: modelpgae,
        data: data,
        user: user,
    },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof store.getState>>();
