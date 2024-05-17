import { Box, StepLabel, Stepper, Step, Typography } from "@mui/material";
import React from "react";

const steps = [
    { id: 1, name: "Chuẩn bị" },
    { id: 2, name: "Đóng gói" },
    { id: 3, name: "Đang giao" },
    { id: 4, name: "Giao thành công" },
];

const BoxStep: React.FC<{ status: string }> = ({ status }) => {
    return (
        <Box sx={{ width: "100%", marginY: "50px" }}>
            <Typography fontSize="15px" fontWeight="500" textAlign="center">
                Gia đoạn
            </Typography>
            <Stepper
                activeStep={steps.findIndex((e) => e.name === status)}
                color="inherit"
                alternativeLabel
            >
                {steps.map((e) => (
                    <Step key={e.id}>
                        <StepLabel>{e.name}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default BoxStep;
