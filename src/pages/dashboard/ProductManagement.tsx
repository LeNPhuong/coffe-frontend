import React from "react";
import { Outlet } from "react-router-dom";

import BtnAdd from "../../components/dashboard/ContentRight/product/BtnAdd";

const ProductManagement: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-[24px] font-[500] capitalize ">Quản lý sản phẩm</p>
          <BtnAdd />
        </div>
        <div className="w-full mt-[30px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
