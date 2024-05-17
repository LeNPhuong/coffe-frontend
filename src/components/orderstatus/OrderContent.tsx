import { Typography } from "@mui/material";
import React from "react";
import ContentOrder from "../useall/ContentOrder";

const OrderContent: React.FC<{
    code: string | undefined;
    addres: string | undefined;
    time: string | undefined;
    name: string | undefined;
    phone: string | undefined;
    pay: { method: string; keys: string } | undefined;
}> = ({ code, addres, time, name, phone, pay }) => {
    return (
        <div className="flex flex-col items-center mt-[10px]">
            <ContentOrder
                code={code}
                addres={addres}
                time={time}
                name={name}
                phone={phone}
                pay={pay}
            />
            <Typography
                sx={{ width: "330px", textAlign: "center", marginTop: "10px" }}
            >
                Đơn hàng của bạn đã được đặt thành công vui lòng đợi trong tầm
                45 - 60 phút
            </Typography>
        </div>
    );
};

export default OrderContent;
