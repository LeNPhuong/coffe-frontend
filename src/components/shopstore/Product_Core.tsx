import { Stack } from "@mui/material";
import { FC } from "react";
import Product_Core_Items from "./Product_Core_Items";
import { product } from "../../type/databill";

const Product_Core: FC<{
  data: product[];
  typeprd: string;
}> = ({ data, typeprd }) => {
  return (
    <Stack
      sx={{
        "@media (min-width:1px)": {
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: "10px",
        },
        "@media (min-width:768px)": {
          margin: "20px 0",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        },
        "@media (min-width:1000px)": {
          maxWidth: "1440px",
          minWidth: "1440px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        },
        margin: "5px 0",
      }}
    >
      {data.map((e) =>
        e.type.includes(typeprd) && e.active ? (
          <Product_Core_Items key={e._id} data={e} />
        ) : (
          ``
        ),
      )}
    </Stack>
  );
};

export default Product_Core;
