import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Box, Button, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PayIF_User from "./PayIF_User";
import PayPRD_BoxPay from "./PayPRD_BoxPay";
import { btnmap } from "../../redux/modelSlice";

const PayIF: React.FC = () => {
    const map = useAppSelector((e) => e.product.map);
    const dispatch = useAppDispatch();
    return (
        <Box
            sx={{
                "@media (min-width:1px)": {
                    width: "100%",
                    ":after": {
                        content: '""',
                        height: "10px",
                        width: "100%",
                        background: "hsl(0deg 0% 98.04%)",
                    },
                },
                "@media (min-width:1000px)": {
                    width: "50%",
                    ":after": {
                        content: '""',
                        height: "0px",
                        width: "0%",
                        background: "none",
                    },
                },
            }}
        >
            <Box
                sx={{
                    paddingX: "10px",
                    paddingBottom: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                        Giao Hàng
                    </Typography>
                    <Button
                        onClick={() => dispatch(btnmap(true))}
                        sx={{
                            borderRadius: "50px",
                            width: "125px",
                            fontSize: "11px",
                            fontWeight: "400",
                            color: "#000",
                            textTransform: "capitalize",
                            borderColor: "#000",
                            paddingY: "10px",
                            ":focus": {
                                borderColor: "#000",
                            },
                            ":active": {
                                borderColor: "#000",
                            },
                        }}
                        variant="outlined"
                    >
                        Đổi Phương thức
                    </Button>
                </Box>
                <Stack direction="column" sx={{ marginTop: "10px", gap: "10px" }}>
                    <Box
                        onClick={() => dispatch(btnmap(true))}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <img
                                className="w-[40px] h-[40px]"
                                src="/imgicon/iconshiper.png"
                                alt=""
                            />
                            <Stack direction="column" sx={{ marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                                    {map}
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                                    {map} Việt nam
                                </Typography>
                            </Stack>
                        </Box>
                        <ChevronRightIcon
                            sx={{
                                height: "40px",
                                width: "40px",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginLeft: "40px",
                            paddingTop: "10px",
                            borderTopWidth: "1px",
                            borderTopColor: "#ccc",
                            borderTopStyle: "solid",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Stack direction="column" sx={{ marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                                    Nhận hàng trong ngày 15 - 30 phut
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                                    Vào lúc càng sớm càng tốt
                                </Typography>
                            </Stack>
                        </Box>
                        <ChevronRightIcon
                            sx={{
                                height: "40px",
                                width: "40px",
                            }}
                        />
                    </Box>
                </Stack>
                <PayIF_User />
                <Box
                    sx={{
                        "@media (min-width:1px)": { display: "none" },
                        "@media (min-width:1000px)": { display: "block" },
                    }}
                >
                    <PayPRD_BoxPay />
                </Box>
            </Box>
        </Box>
    );
};

export default PayIF;
