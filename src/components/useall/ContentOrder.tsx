import { Box, Typography } from "@mui/material";
import React from "react";

const ContentOrder: React.FC<{
    code?: string | undefined;
    addres?: string | undefined;
    time?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    pay?: { method: string; keys: string } | undefined;
    statuspay?: string;
    flexcustome?: string;
    size?: number;
}> = ({
    code,
    addres,
    time,
    name,
    phone,
    pay,
    flexcustome,
    size,
    statuspay,
}) => {
    const styletotal = {
        title: {
            fontsize: size === 1 ? "18px" : "15px",
            fontweight: size === 1 ? 500 : "500",
        },
        parag: {
            fontsize: size === 1 ? "16px" : "15px",
            fontweight: size === 1 ? "400" : 400,
        },
    };
    return (
        <div
            className={`flex flex-col w-full ${
                flexcustome ? flexcustome : "items-center"
            }`}
        >
            {/* get name */}
            {name && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Đơn hàng của:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {name}
                    </Typography>
                </Box>
            )}
            {/* get phone */}
            {phone && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Số điện thoại:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {phone}
                    </Typography>
                </Box>
            )}
            {/* get code */}
            {code && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Mã đơn hàng:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {code}
                    </Typography>
                </Box>
            )}
            {/* get method */}
            {pay && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Hình thức:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {pay?.method}
                    </Typography>
                </Box>
            )}
            {/* get status pay */}
            {statuspay && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Trạng thái thanh toán:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {statuspay}
                    </Typography>
                </Box>
            )}
            {/* get time */}
            {time && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Đặt lúc:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {time}
                    </Typography>
                </Box>
            )}
            {/* get addres */}
            {addres && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    <Typography
                        fontWeight={styletotal.title.fontweight}
                        fontSize={styletotal.title.fontsize}
                    >
                        Tại:{" "}
                    </Typography>
                    <Typography
                        fontWeight={styletotal.parag.fontweight}
                        fontSize={styletotal.parag.fontsize}
                    >
                        {addres}
                    </Typography>
                </Box>
            )}
        </div>
    );
};

export default ContentOrder;
