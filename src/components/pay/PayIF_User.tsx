import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getGuid, getPhone, getUser } from "../../redux/slicePay";

const PayIF_User: React.FC = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((e) => e.pay.user);

    return (
        <Stack
            direction="column"
            sx={{
                gap: "14px",
                marginTop: "10px",
            }}
        >
            <input
                className="border-[1px] border-[#ccc] outline-none py-[10px] text-[14px] px-[18px] focus:border-blue-500"
                type="text"
                value={data.name || ""}
                onChange={(e) => dispatch(getUser(e.target.value))}
                placeholder="Tên người nhận"
            />
            <input
                className="border-[1px] border-[#ccc] outline-none py-[10px] text-[14px] px-[18px] focus:border-blue-500"
                type="text"
                value={data.phone || ""}
                onChange={(e) => dispatch(getPhone(e.target.value))}
                placeholder="Số điện thoại"
            />
            <input
                className="border-[1px] border-[#ccc] outline-none py-[10px] text-[14px] px-[18px] focus:border-blue-500"
                type="text"
                value={data.guid || ""}
                onChange={(e) => dispatch(getGuid(e.target.value))}
                placeholder="Thêm hướng dẫn giao hàng"
            />
        </Stack>
    );
};

export default PayIF_User;
