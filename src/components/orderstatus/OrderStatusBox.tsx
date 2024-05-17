import { FC } from "react";
import OrderHeader from "./OrderHeader";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { gettoken } from "../../redux/dataSlice";

const OrderStatusBox: FC = () => {
  const keysorder = useAppSelector((e) => e.data.token);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="max-w-[400px] min-w-[400px] mx-auto p-[10px] bg-[#fff] h-[60vh] overflow-hidden mt-[100px] rounded-[8px] shadow-[0_0_8px_#1111119e]"
    >
      <div style={{ scrollbarWidth: "none" }} className="overflow-auto h-full w-full">
        <div className="flex flex-col items-center h-full w-full">
          <OrderHeader />
          <div className="mt-[20px]">
            <img className="h-[140px]" src="/imgicon/succes.png" alt="" />
          </div>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              marginTop: "50px",
            }}
          >
            Đặt hàng thành công !
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <span>Mã đơn hàng</span>:<span className="text-orange-500">{keysorder}</span>
          </Typography>
          <div className="justify-self-end mb-[20px]">
            <Link
              onClick={() => dispatch(gettoken(null))}
              to="search"
              className="text-[#aaa] italic mt-[20px]"
            >
              Tra cứu đơn hàng !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusBox;
