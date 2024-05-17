import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress
                sx={{
                    color: "#fa8c16",
                }}
            />
        </Box>
    );
};

export default Loading;
