import React from "react";
import Image from "./Image";
import BoxTopping from "./BoxTopping";
import BoxSize from "./BoxSize";
import Boxtype from "./Boxtype";

const ProductAdd: React.FC = () => {
  return (
    <div className="">
      <form action="http://localhost:3001/app/api/coffe/create" encType="multipart/form-data" method="post">
        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              name="nameprd"
              type="text"
            />
            <label htmlFor="">Giá sản phẩm</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              name="priceprd"
              type="number"
            />
            <label htmlFor="">Mô tả sản phẩm</label>
            <textarea
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              name="desprd"
              id=""
            />
            <BoxTopping />
            <BoxSize />
            <Boxtype />
          </div>
          <Image />
        </div>
        <button
          className="bg-orange-500 text-[14px] font-[500] py-[8px] px-[15px] rounded-[5px] text-[#fff]"
          type="submit"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
