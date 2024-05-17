import React from "react";
import BoxTypeProduct from "../../components/dashboard/ContentRight/typeproduct/BoxTypeProduct";

const TypeManagement: React.FC = () => {
  return (
    <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[24px] font-[500] capitalize ">Quản lý danh mục</p>
      </div>
      <div className="w-full mt-[30px]">
        <BoxTypeProduct />
      </div>
    </div>
  );
};

export default TypeManagement;
