import { Typography } from "@mui/material";
import React from "react";
import { databill } from "../../type/databill";
import changecurrency from "../../utils/changeCurrency";

const SearchBoxTotalCore: React.FC<{
  datatotal: databill[];
}> = ({ datatotal }) => {
  return (
    <div className="flex flex-col self-end md:gap-[7px] sm:gap-[4px]">
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media (min-width:1px)": {
            gap: "5px",
            flexDirection: "column",
            alignItems: "flex-end",
          },
          "@media (min-width:768px)": {
            gap: "20px",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <span className="md:text-[16px] sm:text-[13px] font-[400]">
          Tổng giá trị sản phẩm:
        </span>
        <span className="md:text-[14px] sm:text-[13px] md:font-[400] sm:font-[500] text-red-500">
          {changecurrency(
            datatotal?.reduce(
              (acc, cur) =>
                acc +
                (cur.price +
                  (cur.topping ? cur.topping.price * cur.topping.quantity : 0) +
                  (cur.size ? cur.size.price : 0)) *
                  cur.quantity,
              0,
            ),
          )}
        </span>
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",

          "@media (min-width:1px)": {
            gap: "5px",
            flexDirection: "column",
            alignItems: "flex-end",
          },
          "@media (min-width:768px)": {
            gap: "20px",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <span className="md:text-[16px] sm:text-[13px] font-[400]">Tiền shipper:</span>
        <span className="md:text-[14px] sm:text-[13px] md:font-[400] sm:font-[500] text-red-500">
          {changecurrency(18000)}
        </span>
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",

          "@media (min-width:1px)": {
            gap: "5px",
            flexDirection: "column",
            alignItems: "flex-end",
          },
          "@media (min-width:768px)": {
            gap: "20px",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <span className="md:text-[16px] sm:text-[13px] font-[400]">Mã giảm giá:</span>
        <span className="md:text-[14px] sm:text-[13px] md:font-[400] sm:font-[500] text-red-500">
          {changecurrency(0)}
        </span>
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",

          "@media (min-width:1px)": {
            gap: "5px",
            flexDirection: "column",
            alignItems: "flex-end",
          },
          "@media (min-width:768px)": {
            gap: "20px",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <span className="md:text-[20px] sm:text-[16px] font-[500]">Tổng:</span>
        <span className="md:text-[18px] sm:text-[16px] font-[500] text-red-500">
          {changecurrency(
            datatotal?.reduce(
              (acc, cur) =>
                acc +
                (cur.price +
                  (cur.topping ? cur.topping.price * cur.topping.quantity : 0) +
                  (cur.size ? cur.size.price : 0)) *
                  cur.quantity,
              0,
            ) + 18000,
          )}
        </span>
      </Typography>
    </div>
  );
};

export default SearchBoxTotalCore;
