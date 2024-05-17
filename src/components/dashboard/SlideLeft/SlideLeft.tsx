import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MenuAction from "./MenuAction";

const SlideLeft: React.FC = () => {
  return (
    <div className="w-[25%] border-r-[1px] border-r-[#ccc]">
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-center gap-[10px] py-[20px] border-b-[1px] border-b-[#ccc]">
          <span>
            <ApartmentIcon sx={{ width: "28px", height: "28px", color: "#f97316" }} />
          </span>
          <span className="text-[20px] font-[500] text-[#f97316] capitalize">trung tâm quản lý</span>
        </div>
        <MenuAction />
      </div>
    </div>
  );
};

export default SlideLeft;
