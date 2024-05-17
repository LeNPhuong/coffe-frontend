import React from "react";
import { product } from "../../../../../type/databill";
import changecurrency from "../../../../../utils/changeCurrency";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { Link } from "react-router-dom";
import { statusproduct } from "../../../../../services/product";

const Items: React.FC<{ data: product }> = ({ data }) => {
  async function handleStatus(action: string, id: string) {
    const auth = confirm(`Bạn có muốn ${action === "DELETE" ? "Vô hiệu" : "Kích hoạt"} không`);
    if (auth) {
      const result = await statusproduct(action, id);
      alert(result.message);
      window.location.reload();
    }
  }

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr] items-center content-center justify-items-center w-full">
      {/* hình ảnh */}
      <div className=" rounded-[8px] shadow-[0_0_6px_#0000004b]">
        <div className="w-[85px] object-cover rounded-[8px] overflow-hidden">
          <img src={data.img} alt="" />
        </div>
      </div>
      {/* tên */}
      <p className="justify-self-start text-[14px] font-[500]">{data.name}</p>
      {/* giá */}
      <p className="text-[16px] font-[500] text-red-600">{changecurrency(data.price)}</p>
      {/* trạng thái */}
      <Typography sx={{ display: "flex", flexDirection: "row", alignItems: "end", gap: "10px" }}>
        <span className={`text-[14px] font-[500] ${data.active ? "text-[#ea580c]" : "text-[#9ca3af]"}`}>
          {data.active ? "Đang bán" : "Không bán"}
        </span>
        <span>
          {data.active ? (
            <DoneIcon
              sx={{
                color: "#ea580c",
              }}
            />
          ) : (
            <DoNotDisturbIcon
              sx={{
                color: "#9ca3af",
              }}
            />
          )}
        </span>
      </Typography>
      {/* hành động*/}
      <div className="flex justify-self-end">
        {data.active ? (
          <button
            onClick={() => handleStatus("DELETE", data._id)}
            className="text-[14px] mx-[10px] font-[500] bg-[#ef4444] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#b91c1c] duration-500"
          >
            Vô hiệu
          </button>
        ) : (
          <button
            onClick={() => handleStatus("ACTIVE", data._id)}
            className="text-[14px] mx-[10px] font-[500] bg-[#f97316] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#c2410c] duration-500"
          >
            Kích Hoạt
          </button>
        )}
        <Link to={`edit/${data._id}`}>
          <button className="text-[14px] mx-[10px] font-[500] bg-[#38bdf8] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#0369a1] duration-500">
            Chỉnh sửa
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
