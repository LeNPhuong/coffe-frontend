import { Typography } from "@mui/material";
import React from "react";
import { databill } from "../../type/databill";
import changecurrency from "../../utils/changeCurrency";

const BoxItem_Core: React.FC<{
  data: databill;
}> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between pb-[20px] mt-[7px] border-b-[1px] border-b-[#cccccca0] w-full">
      <div className="flex flex-row gap-[10px]">
        <div className="lg:h-[80px] md:h-[60px] lg:w-[80px] md:w-[60px] overflow-hidden rounded-[8px] shadow-[0_0_5px_#ccccccca] md:block sm:hidden">
          <img src={data.img} className="h-full w-full" alt="" />
        </div>
        <div>
          <div className="flex flex-col ">
            <Typography
              sx={{
                "@media (min-width:1px)": {
                  fontSize: "13px",
                },
                "@media (min-width:768px)": {
                  fontSize: "16px",
                },
                fontWeight: "500",
              }}
              className="text-orange-500"
            >
              {data.name}
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400" }}
              className="text-stone-500"
            >
              {data.size?.name}
            </Typography>
            {data.topping && (
              <div className="flex flex-row gap-[10px]">
                <Typography
                  sx={{
                    "@media (min-width:1px)": {
                      fontSize: "12px",
                    },
                    "@media (min-width:768px)": {
                      fontSize: "15px",
                    },

                    fontWeight: "500",
                  }}
                  className="text-stone-900"
                >
                  {data.topping.name}
                </Typography>
                <div className="h-[18px] w-[2px] bg-[#ccc]"></div>

                <Typography
                  sx={{
                    "@media (min-width:1px)": {
                      fontSize: "12px",
                    },
                    "@media (min-width:768px)": {
                      fontSize: "15px",
                    },
                    fontWeight: "500",
                  }}
                  className="text-stone-900"
                >
                  {changecurrency(data.topping.price)} / 1 cái
                </Typography>
                <div className="h-[18px] w-[2px] bg-[#ccc]"></div>

                <Typography
                  sx={{
                    "@media (min-width:1px)": {
                      fontSize: "12px",
                    },
                    "@media (min-width:768px)": {
                      fontSize: "15px",
                    },
                    fontWeight: "500",
                  }}
                  className="text-stone-900"
                >
                  {data.topping.quantity} cái
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Typography
          className="text-orange-500"
          sx={{
            fontWeight: "400",
            "@media (min-width:1px)": {
              fontSize: "12px",
            },
            "@media (min-width:768px)": {
              fontSize: "16px",
            },
          }}
        >
          {changecurrency(
            (data.price +
              (data.topping ? data.topping?.price * data.topping?.quantity : 0) +
              (data.size?.price ? data.size?.price : 0)) *
              data.quantity,
          )}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            "@media (min-width:1px)": {
              fontSize: "12px",
            },
            "@media (min-width:768px)": {
              fontSize: "12px",
            },
            color: "#ccc",
          }}
        >
          Số lượng: {data.quantity}
        </Typography>
      </div>
    </div>
  );
};

export default BoxItem_Core;
