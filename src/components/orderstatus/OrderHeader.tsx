import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useAppDispatch } from "../../redux/store";
import { gettoken } from "../../redux/dataSlice";

const OrderHeader: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="relative h-[40px] w-full pb-[15px] border-b-[1px] border-b-[#ccc]">
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "40px",
                    textAlign: "center",
                }}
            >
                Cảm ơn bạn
            </Typography>
            <button
                onClick={() => dispatch(gettoken(null))}
                className="absolute top-1/2 translate-y-[-50%] left-0"
            >
                <CloseIcon />
            </button>
        </div>
    );
};

export default OrderHeader;
