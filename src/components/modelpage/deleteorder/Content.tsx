import { Typography } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { btnbfdelte, btnorderdelete } from "../../../redux/modelSlice";
import { getdtbfdl } from "../../../redux/dataSlice";
import { getdeletebill } from "../../../services/coffe";

const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const codeorder = useAppSelector((e) => e.data.codeorder);

  async function deletedata() {
    const result: string = await getdeletebill(codeorder);

    dispatch(getdtbfdl(result));
    dispatch(btnorderdelete(false));
    dispatch(btnbfdelte(true));
  }
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
        Bạn có chắc chắn muốn xoá đơn hàng không !
      </Typography>
      <div className="w-full flex flex-row justify-between gap-[10px] px-[10px]">
        <button
          onClick={deletedata}
          className="text-center rounded-[8px] text-[#fff] font-[500] w-full py-[6px] bg-[#dc2626] hover:bg-[#9a3412] duration-300"
        >
          Xoá
        </button>
        <button
          onClick={() => dispatch(btnorderdelete(false))}
          className="text-center rounded-[8px] text-[#fff] font-[500] w-full py-[6px] bg-[#ea580c] hover:bg-[#b45309] duration-300"
        >
          Huỷ
        </button>
      </div>
    </div>
  );
};

export default Content;
