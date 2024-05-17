import { Typography } from "@mui/material";
import React from "react";
import OrderItemsCore from "./OrderItemsCore";
import { databill } from "../../type/databill";
import changecurrency from "../../utils/changeCurrency";

const OrderItems: React.FC<{
  data: databill[] | undefined;
}> = ({ data }) => {
  return (
    <div className="flex flex-col w-full mt-[20px]">
      <Typography
        fontWeight="500"
        fontSize="18px"
        textAlign="center"
        textTransform="uppercase"
      >
        Đơn hàng gồm
      </Typography>
      <div className="flex flex-col w-full">
        {data?.map((e) => (
          <OrderItemsCore key={e._id} data={e} />
        ))}
        <div className="flex flex-row justify-end items-center gap-[10px]">
          <span>Phí giao hàng:</span>
          <span className="text-orange-500 text-[16px] font-[500]">
            {changecurrency(18000)}
          </span>
        </div>
      </div>
      <Typography
        textAlign="center"
        sx={{
          marginY: "20px",
          fontSize: "18px",
          fontWeight: "500",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        Tổng giá trị của đơn hàng:{" "}
        <span className="text-red-500 text-[18px]">
          {changecurrency(
            data
              ? data.reduce(
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
        </span>
      </Typography>
    </div>
  );
};

export default OrderItems;
