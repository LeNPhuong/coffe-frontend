import { Box } from "@mui/material";
import React, { SetStateAction } from "react";
import Detail_Core_Content_Topping_Item from "./Detail_Core_Content_Topping_Item";

const Detail_Core_Content_Topping: React.FC<{
    data: { _id: string; name: string; price: number }[];
    topping: {
        _id: string;
        name: string;
        price: number;
        quantity: number;
    } | null;
    setTopping: React.Dispatch<
        SetStateAction<{
            _id: string;
            name: string;
            price: number;
            quantity: number;
        } | null>
    >;
}> = ({ data, topping, setTopping }) => {
    return (
        <Box
            sx={{
                margin: "12px 0",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <p className="bg-[#ededed] py-[12px]">
                <span className="pl-[16px] uppercase text-[14px] text-[#666] font-[500]">
                    CHỌN TOPPING (TÙY CHỌN)
                </span>
            </p>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 16px",
                }}
            >
                {data.map((e) => (
                    <Detail_Core_Content_Topping_Item
                        key={e._id}
                        data={e}
                        topping={topping}
                        setTopping={setTopping}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Detail_Core_Content_Topping;
