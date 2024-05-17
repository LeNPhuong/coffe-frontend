import { Box, Typography } from "@mui/material";
import React from "react";
import PayPRD_TypePay from "./PayPRD_TypePay";
import paymethod from "../../dataclient/paymethods";
import CheckIcon from "@mui/icons-material/Check";

const PayPRD_BoxPay: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    paddingX: "10px",
                    paddingY: "10px",
                    paddingBottom: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            position: "relative",
                            paddingBottom: "8px",
                            "&:after": {
                                content: '""',
                                width: "50px",
                                height: "2px",
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                background: "#fa8c16",
                            },
                            color: "#000",
                        }}
                    >
                        Phương thức thanh toán
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    paddingLeft: "30px",
                    paddingRight: "20px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                {paymethod.map((e) => (
                    <PayPRD_TypePay key={e.id} data={e} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginTop: "20px",
                    paddingBottom: "10px",
                    paddingX: "10px",
                }}
            >
                <span className="border-[2px] border-[#fa8c16] w-[20px] h-[20px] flex justify-center items-center">
                    <CheckIcon sx={{ width: "15px", height: "15px", color: "#fa8c16" }} />
                </span>
                <Typography>
                    Đồng ý với các{" "}
                    <span className="text-[#fa8c16] inline-block">điều khoản và điều kiện</span>{" "}
                    mua hàng của The Coffee House
                </Typography>
            </Box>
        </Box>
    );
};

export default PayPRD_BoxPay;
