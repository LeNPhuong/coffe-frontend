import React, { SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { sizedata } from "../../../../../type/size";

const Size: React.FC<{
  id: number;
  setCurrent: React.Dispatch<SetStateAction<number[]>>;
}> = ({ id, setCurrent }) => {
  return (
    <div className="w-full flex flex-row items-center">
      <select
        className="w-full p-[8px] text-[18px] outline-none border-[2px] border-[#f97316] rounded-[5px]"
        name={"size" + id}
      >
        <option value="">Chọn size</option>
        {sizedata.map((e, index) => (
          <option key={index} value={JSON.stringify(e)}>
            {e.name} + {e.price}
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

export default Size;
