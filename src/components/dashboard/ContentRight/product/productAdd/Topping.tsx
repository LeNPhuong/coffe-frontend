import React, { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { topping } from "../../../../../type/topping";

const Topping: React.FC<{
  id: number;
  setCurrent: Dispatch<SetStateAction<number[] | []>>;
}> = ({ id, setCurrent }) => {
  return (
    <div className="w-full flex flex-row items-center">
      <select
        className="w-full p-[8px] text-[18px] outline-none border-[2px] border-[#f97316] rounded-[5px]"
        name={"topping" + id}
      >
        <option value="">Chọn Topping</option>
        {topping.map((e) => (
          <option key={e.id} value={e.label}>
            {e.label}
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

export default Topping;
