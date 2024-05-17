import { Stack } from "@mui/material";
import React from "react";
import PayPRD_Item from "./PayPRD_Item";
import { useAppSelector } from "../../redux/store";

const PayPRD_Box = () => {
  const product = useAppSelector((e) => e.product.cart);

  return (
    <Stack
      sx={{
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
      direction="column"
    >
      {product?.map((e) => (
        <PayPRD_Item key={e._id} data={e} />
      ))}
    </Stack>
  );
};

export default PayPRD_Box;
