import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Size from "./Size";

const BoxSize: React.FC = () => {
  const [current, setCurrent] = useState<number[] | []>([]);

  function addSize() {
    setCurrent((e) => (e.length === 0 ? [Math.random()] : e.length > 2 ? [...e] : [...e, Math.random()]));
  }

  return (
    <div className="mt-[20px]">
      <div className="flex flex-col items-start">
        <button
          onClick={addSize}
          type="button"
          className="flex flex-row items-center text-[#fff] bg-orange-500 p-[10px] gap-[10px] rounded-[8px] font-[500] mb-[30px]"
        >
          <span className="text-[16px]">
            <FaPlus />
          </span>
          <span className="text-[16px]">Thêm Size</span>
        </button>
        <div className="flex flex-col items-start w-[60%] gap-[10px]">
          {current.map((e) => (
            <Size key={e} setCurrent={setCurrent} id={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxSize;
