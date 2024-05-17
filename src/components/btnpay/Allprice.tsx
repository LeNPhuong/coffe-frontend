import { Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../redux/store";
import changecurrency from "../../utils/changeCurrency";

const Allprice: React.FC = () => {
  const product = useAppSelector((e) => e.product.cart);

  return (
    <Typography
      sx={{
        color: "#fff",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
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
            ) + 18000
          : 0,
      )}
    </Typography>
  );
};

export default Allprice;
