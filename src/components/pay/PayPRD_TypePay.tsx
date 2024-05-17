import { Box, Radio, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getMethodPay } from "../../redux/sliceProduct";

const PayPRD_TypePay: React.FC<{
    data: { id: number; name: string; img: string; keys: string };
}> = ({ data }) => {
    const dispatch = useAppDispatch();
    const method = useAppSelector((e) => e.product.medthodPay);

    return (
        <Box
            sx={{
                marginTop: "20px",
                paddingBottom: "10px",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Radio
                value={JSON.stringify(data)}
                checked={data.id === method?.id && data.keys === method.keys}
                name="radio-buttons"
                onChange={(e) => dispatch(getMethodPay(JSON.parse(e.target.value)))}
                sx={{
                    padding: 0,
                    "& .MuiSvgIcon-root": {
                        fontSize: 28,
                    },
                    "&.Mui-checked": {
                        color: "#fa8c16",
                    },
                }}
                size="medium"
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "20px",
                    gap: "10px",
                }}
            >
                <img className="w-[25px]" src={data.img} alt="" />

                <Typography fontSize="14px" fontWeight="400" sx={{ color: "#000" }}>
                    {data.name}
                </Typography>
            </Box>
        </Box>
    );
};

export default PayPRD_TypePay;
