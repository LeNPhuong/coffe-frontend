import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Loading from "../../../../loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { gettypeproduct } from "../../../../../services/typeproduct";
import Type from "./Type";

const Boxtype: React.FC = () => {
  const [current, setCurrent] = useState<number[] | []>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["typedata"],
    queryFn: async () => {
      const data = await gettypeproduct();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  function addKind() {
    setCurrent((e) =>
      e.length === 0 ? [Math.random()] : e.length > data.data.kind.length - 1 ? [...e] : [...e, Math.random()],
    );
  }
  console.log(data.data.kind);

  return (
    <div className="mt-[20px]">
      <div className="flex flex-col items-start">
        <button
          onClick={addKind}
          type="button"
          className="flex flex-row items-center text-[#fff] bg-orange-500 p-[10px] gap-[10px] rounded-[8px] font-[500] mb-[30px]"
        >
          <span className="text-[16px]">
            <FaPlus />
          </span>
          <span className="text-[16px]">Thêm Loại</span>
        </button>
        <div className="flex flex-col items-start w-[60%] gap-[10px]">
          {current.map((e) => (
            <Type key={e} setCurrent={setCurrent} id={e} data={data.data.kind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxtype;
