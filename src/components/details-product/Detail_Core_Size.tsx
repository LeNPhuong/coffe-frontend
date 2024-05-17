import React, { SetStateAction, memo } from "react";
import Detail_Core_Size_Items from "./Detail_Core_Size_Items";

const Detail_Core_Size: React.FC<{
  data: { _id: string; name: string; price: number }[];
  size: { _id: string; name: string; price: number } | null;
  setSize: React.Dispatch<SetStateAction<{ _id: string; name: string; price: number } | null>>;
}> = memo(function Detail_Core_Size({ data, size, setSize }) {
  return (
    <div className="my-[10px] flex flex-col gap-[10px]">
      <p className="bg-[#ededed] py-[12px]">
        <span className="pl-[16px] uppercase text-[14px] text-[#666] font-[500]">Chọn size (bắt buộc)</span>
      </p>
      <div className="flex flex-row px-[16px]">
        <div className="flex flex-row justify-between w-full">
          {data.map((e) => (
            <Detail_Core_Size_Items key={e._id} data={e} size={size} setSize={setSize} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Detail_Core_Size;
