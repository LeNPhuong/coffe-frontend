import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PayPRD_Box from "./PayPRD_Box";
import PayPRD_Total from "./PayPRD_Total";
import PayPRD_BoxPay from "./PayPRD_BoxPay";
import BtnRemove from "./BtnRemove";
import BtnPay from "../btnpay/BtnPay";

const PayPRD: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        "@media (min-width:1px)": {
          width: "100%",
        },
        "@media (min-width:1000px)": {
          width: "50%",
        },
      }}
    >
      <Box
        sx={{
          "@media (min-width:1px)": {
            ":after": {
              content: '""',
              height: "10px",
              width: "100%",
              background: "hsl(0deg 0% 98.04%)",
            },
            paddingY: "10px",
          },
          "@media (min-width:1000px)": {
            background: "#fff",
            boxShadow: "0 -4px 10px rgba(0,0,0,.12)",
            borderRadius: "8px",
            padding: "10px",
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
              Các món đã chọn
            </Typography>
            <Button
              onClick={() => navigate("/store")}
              sx={{
                borderRadius: "50px",
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
              Thêm món
            </Button>
          </Box>
        </Box>
        <PayPRD_Box />
        <PayPRD_Total />
        <Box
          sx={{
            "@media (min-width:1px)": {
              display: "block",
            },
            "@media (min-width:1000px)": {
              display: "none",
            },
          }}
        >
          <PayPRD_BoxPay />
        </Box>
      </Box>
      <Box
        sx={{
          "@media (min-width:1px)": { display: "none" },
          "@media (min-width:1000px)": { display: "block" },
        }}
      >
        <BtnPay />
      </Box>
      <BtnRemove />
    </Box>
  );
};

export default PayPRD;
