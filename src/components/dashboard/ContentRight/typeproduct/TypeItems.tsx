import React from "react";
import { updateStatus } from "../../../../services/typeproduct";

const TypeItems: React.FC<{
  data: { _id: string; name: string; img: string; status: true; type: string; slug: string };
}> = ({ data }) => {
  async function updateData(id: string, status: boolean) {
    const result = confirm(`Bạn có muốn ${status ? "vô hiệu" : "kích hoạt"} loại hiện tại`);
    if (result) {
      const request = await updateStatus(id, status === true ? false : true);
      alert(request.message);
      window.location.reload();
    }
  }

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] content-center items-center w-full p-[10px]">
      <div className="w-full flex justify-center">
        <img className="w-[90px]" src={data.img} alt={data.name} />
      </div>
      <p className="capitalize text-[16px] text-center font-[500] w-full">{data.name}</p>
      <p
        className={`capitalize text-[16px] ${
          data.status ? "bg-orange-500" : "bg-red-500"
        } py-[10px] rounded-[8px] text-[#fff] text-center font-[500] w-full`}
      >
        {data.status ? "Hoạt động" : "Vô hiệu"}
      </p>
      <div className="flex justify-center flex-row">
        <button
          onClick={() => updateData(data._id, data.status)}
          className={`${data.status ? "bg-blue-500" : "bg-red-500"} text-[15px] text-[#fff] p-[8px] rounded-[8px] ${
            data.status ? "hover:bg-blue-700" : "hover:bg-red-700"
          } duration-500`}
        >
          {data.status ? "Vô hiệu" : "Kích hoạt"}
        </button>
      </div>
    </div>
  );
};

export default TypeItems;
