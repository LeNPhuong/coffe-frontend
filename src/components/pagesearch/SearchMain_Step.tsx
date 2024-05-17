import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

const steps = [
  { id: 1, name: "Chuẩn bị", icons: <AccessAlarmIcon /> },
  { id: 2, name: "Đóng gói", icons: <WidgetsIcon /> },
  { id: 3, name: "Đang giao", icons: <LocalShippingIcon /> },
  { id: 4, name: "Giao thành công", icons: <CheckCircleOutlineIcon /> },
];

const SearchMain_Step: React.FC<{
  status: string;
}> = ({ status }) => {
  function checkactive() {
    let cur = steps.findIndex((e) => e.name === status);
    if (cur === steps.length - 1) {
      cur = steps.length;
    }
    return cur;
  }

  return (
    <Box sx={{ width: "100%", marginY: "50px" }}>
      <Typography fontSize="18px" fontWeight="500" textAlign="center">
        Gia đoạn
      </Typography>
      <Stepper activeStep={checkactive()} color="inherit" alternativeLabel>
        {steps.map((e) => (
          <Step
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#f97316",
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: "#ff8400",
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                color: "#000",
              },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "#fff",
              },
            }}
            key={e.id}
          >
            <StepLabel>{e.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SearchMain_Step;
