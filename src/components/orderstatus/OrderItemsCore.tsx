import { Typography } from "@mui/material";
import React from "react";
import { databill } from "../../type/databill";
import changecurrency from "../../utils/changeCurrency";

const OrderItemsCore: React.FC<{
  data: databill;
}> = ({ data }) => {
  return (
    <div className="flex-row border-b-[1px] border-b-[#ccc] my-[2px] px-[10px] flex justify-between items-center">
      <div className="flex flex-col gap-[5px]">
        <Typography>
          {data.quantity} x {data.name}
        </Typography>
        <Typography>
          {data.topping ? `${data.topping.quantity} x ${data.topping.name}` : null}
        </Typography>
        <Typography>{data.size?.name}</Typography>
      </div>
      <Typography
        sx={{ fontSize: "16px", fontWeight: "500" }}
        className="text-orange-500"
      >
        {changecurrency(
          (data.price +
            (data.topping ? data.topping?.price * data.topping?.quantity : 0) +
            (data.size ? data.size?.price : 0)) *
            data.quantity,
        )}
      </Typography>
    </div>
  );
};

export default OrderItemsCore;
