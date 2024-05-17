import React from "react";
import OrderStatusBox from "./OrderStatusBox";
import { useAppDispatch } from "../../redux/store";
import { gettoken } from "../../redux/dataSlice";

const OrderStatus: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => dispatch(gettoken(null))}
            className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999]"
        >
            <OrderStatusBox />
        </div>
    );
};

export default OrderStatus;
