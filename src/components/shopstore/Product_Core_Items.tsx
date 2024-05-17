import { Card, CardMedia } from "@mui/material";
import { FC } from "react";
import Product_Core_Items_Content from "./Product_Core_Items_Content";
import { useAppDispatch } from "../../redux/store";
import { getDetails } from "../../redux/sliceProduct";
import { product } from "../../type/databill";
const Product_Core_Items: FC<{
  data: product;
}> = ({ data }) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      onClick={() => dispatch(getDetails(data))}
      className="animate-fade-up"
      sx={{
        "@media (min-width:1px)": {
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          width: "100%",
        },
        "@media (min-width:768px)": {
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          width: "49%",
        },
        "@media (min-width:1000px)": {
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          width: "13%",
        },
        cursor: "pointer",
        boxShadow: "0 0 10px #0000006b",
      }}
    >
      <CardMedia
        loading="lazy"
        sx={{
          "@media (min-width:1px)": {
            minWidth: "100px",
            maxWidth: "100px",
            borderRadius: "10px",
            objectFit: "cover",
          },
          "@media (min-width:1000px)": {
            minWidth: "100%",
            maxWidth: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          },
        }}
        component="img"
        image={data.img}
      />
      <Product_Core_Items_Content name={data.name} price={data.price} />
    </Card>
  );
};

export default Product_Core_Items;
