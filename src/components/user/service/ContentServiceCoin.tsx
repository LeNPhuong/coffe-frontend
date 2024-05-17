import React from "react";
import styled from "styled-components";
import ReceiptIcon from "@mui/icons-material/Receipt";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAppSelector } from "../../../redux/store";

const BoxContent = styled.div`
  position: relative;
  background: linear-gradient(rgb(255, 149, 34) 0%, rgb(218, 84, 9) 50%);
  border-radius: 10px;
  padding: 50px 16px 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: "center"; */
  justify-content: space-between;
`;

const BoxCoin = styled.div`
  background: linear-gradient(276.58deg, rgba(0, 0, 0, 0.2), transparent);
  padding: 8px 10px 4px 14px;
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 0;
  right: 10px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const ContentServiceCoin: React.FC = () => {
  const user = useAppSelector((e) => e.user.user);
  return (
    <BoxContent>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[#fff] font-[500] text-[18px]">{user?.name}</p>
          <p className="text-[#fff] font-[500] text-[18px]">{user?.tokentotal} điểm</p>
        </div>
        <div className="flex items-center">
          <ReceiptIcon sx={{ color: "#fdba74", width: "30px", height: "30px" }} />
        </div>
        <BoxCoin>
          <div className="flex flex-row items-center gap-[10px]">
            <KeyboardDoubleArrowDownIcon sx={{ width: "20px", height: "20px" }} />
            Tích điểm
          </div>
        </BoxCoin>
      </div>
      <div className="bg-[#fff] text-[14px] text-[#000] rounded-[5px] p-[6px] mt-[20px] shadow-[0_0_5px_#39373752] text-center">
        Lưu ý đơn hàng phải được giao thành công điểm mới bắt đầu cộng
      </div>
    </BoxContent>
  );
};

export default ContentServiceCoin;
