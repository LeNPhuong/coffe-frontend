import { CardContent } from "@mui/material";
import { FC, SetStateAction } from "react";
import Detail_Core_Content_Title from "./Edit_Core_Content_Title";
import Detail_Core_Price from "./Edit_Core_Price";
import { product } from "../../type/databill";

const Edit_Core_Content: FC<{
  data: product;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
}> = ({ data, quantity, setQuantity }) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Detail_Core_Content_Title name={data.name} des={data.des} />

      <Detail_Core_Price
        price={data.price}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </CardContent>
  );
};

export default Edit_Core_Content;
