import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Allprice from "./Allprice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import paybtn from "./payfn";
import { btnauth } from "../../redux/modelSlice";

const BtnPay: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((e) => e.product.cart);
  const user = useAppSelector((e) => e.pay.user);
  const methodpay = useAppSelector((e) => e.product.medthodPay);
  function check() {
    if (!paybtn(user, product, methodpay)) {
      return;
    } else {
      dispatch(btnauth(true));
    }
  }
  return (
    <Box
      sx={{
        "@media (min-width:1px)": {
          position: "fixed",
          bottom: "50px",
          left: 0,
          right: 0,
        },
        "@media (min-width:1000px)": {
          position: "relative",
          bottom: "0px",
        },
      }}
    >
      <Box
        sx={{
          "@media (min-width:1px)": {
            borderEndEndRadius: "0px",
            borderEndStartRadius: "0px",
            paddingBottom: "20px",
          },
          "@media (min-width:1000px)": {
            borderEndEndRadius: "8px",
            borderEndStartRadius: "8px",
            paddingBottom: "0px",
            padding: "10px",
          },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "#fa8c16",
          padding: "10px",
        }}
      >
        <div className="flex flex-col">
          <Typography
            sx={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            Thành tiền
          </Typography>
          <Allprice />
        </div>
        <Button
          onClick={check}
          variant="outlined"
          sx={{
            borderRadius: "50px",
            paddingY: "10px",
            paddingX: "19px",
            textTransform: "capitalize",
            fontWeight: "400",
            background: "#fff",
            color: "#fa8c16",
            border: "none",
            ":active": {
              border: "none",
              background: "#fff",
            },
            ":focus": {
              border: "none",
            },
            ":hover": {
              color: "#000",
              border: "none",
              background: "#fff",
            },
          }}
          disableTouchRipple
          disableFocusRipple
        >
          Đặt hàng
        </Button>
      </Box>
    </Box>
  );
};

export default BtnPay;
