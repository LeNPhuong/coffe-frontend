import { useQuery } from "@tanstack/react-query";
import React from "react";
import { gettypeproduct } from "../../../../services/typeproduct";
import Loading from "../../../loading/Loading";
import TypeItems from "./TypeItems";

const BoxTypeProduct: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["typesetting"],
    queryFn: async () => {
      const data = await gettypeproduct();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-[15px] p-[10px] shadow-[0_0_15px_#ccc] rounded-[8px]">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
        <p className="capitalize text-center text-[14px] font-[500]">Hình ảnh</p>
        <p className="capitalize text-center text-[14px] font-[500]">Tên</p>
        <p className="capitalize text-center text-[14px] font-[500]">Trạng thái</p>
        <p className="capitalize text-center text-[14px] font-[500]">Hành động</p>
      </div>
      <div className="flex flex-col gap-[15px] mt-[10px]">
        {data.data.kind.map((e, index) => (
          <TypeItems key={index} data={e} />
        ))}
      </div>
    </div>
  );
};

export default BoxTypeProduct;
