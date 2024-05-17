import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import ContentMain from "./ContentMain";
import { btnauth } from "../../redux/modelSlice";
import getDate from "../../utils/getdate";

const ContentPay: React.FC = () => {
  const dispatch = useAppDispatch();
  const map = useAppSelector((e) => e.product.map);
  return (
    <div className="flex flex-col">
      <header className="relative h-[30px]">
        <h1 className="text-center leading-[30px] font-[500]">
          Xác nhận thông tin đơn hàng
        </h1>
        <button
          onClick={() => dispatch(btnauth(false))}
          className="absolute top-[50%] translate-y-[-50%]"
        >
          <CloseIcon />
        </button>
      </header>
      <div className="mt-[25px]">
        <p className="text-center text-[15px] font-[400]">
          Đơn hàng Giao tận nơi sẽ được giao vào {getDate()} hôm nay tại {map}
        </p>
      </div>
      <ContentMain />
      <button
        onClick={() => {
          dispatch(btnauth(false));
        }}
        className="text-orange-500 flex items-center justify-center mt-[20px] text-[14px] gap-[10px]"
      >
        <EditIcon />
        {""}Thay đổi thông tin
      </button>
    </div>
  );
};

export default ContentPay;
