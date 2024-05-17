import React from "react";
import { IoMdTrophy } from "react-icons/io";

const Product_Header: React.FC = () => {
  return (
    <div className="flex flex-row items-center md:justify-center">
      <span className="text-orange-500 text-[18px] mr-[8px]">
        <IoMdTrophy />
      </span>
      <span className="font-[500] sm:text-[18px] text-stone-700">Sản phẩm từ Nhà</span>
    </div>
  );
};

export default Product_Header;
