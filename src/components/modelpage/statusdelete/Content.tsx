import { Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { btnbfdelte } from "../../../redux/modelSlice";

const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((e) => e.data.odbfdl);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="max-w-[350px] mx-auto bg-[#fff] mt-[50px] rounded-[8px] p-[10px] "
    >
      <Typography
        sx={{
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "500",
          color: "#ea580c",
          marginBottom: "20px",
        }}
      >
        {data}
      </Typography>
      <div className="w-full flex flex-row justify-between gap-[10px] px-[10px]">
        <button
          onClick={() => {
            dispatch(btnbfdelte(false));
            location.reload();
          }}
          className="text-center rounded-[8px] text-[#fff] font-[500] w-full py-[6px] bg-[#dc2626] hover:bg-[#9a3412] duration-300"
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default Content;
