import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Topping from "./Topping";

const BoxTopping: React.FC = () => {
  const [current, setCurrent] = useState<number[] | []>([]);

  function addTopping() {
    setCurrent((e) => (e.length === 0 ? [Math.random()] : e.length > 5 ? [...e] : [...e, Math.random()]));
  }

  return (
    <div className="mt-[20px]">
      <div className="flex flex-col items-start">
        <button
          onClick={addTopping}
          type="button"
          className="flex flex-row items-center text-[#fff] bg-orange-500 p-[10px] gap-[10px] rounded-[8px] font-[500] mb-[30px]"
        >
          <span className="text-[16px]">
            <FaPlus />
          </span>
          <span className="text-[16px]">Thêm Topping</span>
        </button>
        <div className="flex flex-col items-start w-[60%] gap-[10px]">
          {current.map((e) => (
            <Topping key={e} setCurrent={setCurrent} id={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxTopping;
