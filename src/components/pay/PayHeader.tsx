import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";

const PayHeader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "40px",
            }}
        >
            <span className="text-orange-500 mr-[10px]">
                <DescriptionIcon sx={{ height: "35px", width: "35px" }} />
            </span>
            <Typography
                sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                }}
            >
                Xác nhận đơn hàng
            </Typography>
        </Box>
    );
};

export default PayHeader;
