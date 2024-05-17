import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../redux/store";
import changecurrency from "../../utils/changeCurrency";

const PayPRD_Total: React.FC = () => {
  const product = useAppSelector((e) => e.product.cart);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (min-width:1px)": {
          ":after": {
            content: '""',
            height: "10px",
            width: "100%",
            background: "hsl(0deg 0% 98.04%)",
          },
        },
        "@media (min-width:1000px)": {
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
            Tổng cộng
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "#cccccc78",
          paddingX: "10px",
          paddingY: "10px",
        }}
      >
        <Typography fontSize="13px">Thành tiền</Typography>
        <Typography fontSize="16px">
          {changecurrency(
            product
              ? product?.reduce(
                  (acc, cur) =>
                    acc +
                    (cur.price +
                      (cur.topping ? cur.topping.price * cur.topping.quantity : 0) +
                      (cur.size ? cur.size.price : 0)) *
                      cur.quantity,
                  0,
                )
              : 0,
          )}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: "10px",
          paddingY: "10px",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "#cccccc78",
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
          <Typography fontSize="13px">Phí giao hàng</Typography>
          <Typography fontSize="16px">{changecurrency(18000)}</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize="13px">Bạn có mã Freeship trong mục Ưu đãi</Typography>
          <Typography
            fontSize="16px"
            sx={{
              color: "rgba(38,38,38,.5)",
              textDecoration: "line-through",
            }}
          >
            {changecurrency(0)}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "15px",
          paddingX: "10px",
          paddingBottom: "40px",
        }}
      >
        <Typography sx={{ color: "#fa8c16" }} fontSize="13px">
          Khuyến mãi
        </Typography>
      </Box>
    </Box>
  );
};

export default PayPRD_Total;
