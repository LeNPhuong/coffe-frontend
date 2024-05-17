import React, { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

const Type: React.FC<{
  id: number;
  setCurrent: Dispatch<SetStateAction<number[]>>;
  data: { _id: string; name: string; status: boolean; img: string; type: string }[];
}> = ({ id, setCurrent, data }) => {
  return (
    <div className="w-full flex flex-row items-center">
      <select
        className="w-full p-[8px] text-[18px] outline-none border-[2px] border-[#f97316] rounded-[5px]"
        name={"type" + id}
      >
        <option value="">Chọn loại sản phẩm</option>
        {data.map((e, index) => (
          <option key={index} value={e.type}>
            {e.name}
          </option>
        ))}
      </select>
      <div
        onClick={() =>
          setCurrent((e) => {
            const dataconv = e.filter((data) => data !== id);
            return dataconv;
          })
        }
        className="bg-red-600 min-h-[30px] min-w-[30px] max-w-[30px] max-h-[30px] rounded-full flex justify-center items-center text-[#fff] ml-[10px] cursor-pointer"
      >
        <IoMdClose />
      </div>
    </div>
  );
};

export default Type;
