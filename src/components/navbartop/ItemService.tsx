import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";

const ItemService: React.FC<{
  setService: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setService }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute top-[45px] right-0 left-[-90px] bottom-0 h-[100px] w-[500%] bg-[#fff] p-[10px] z-[99999] rounded-[8px] shadow-[0_0_5px_#dddddd8c]"
    >
      <Link onClick={() => setService(false)} to="/user">
        <div className="flex flex-row text-[#555] items-center gap-[3px] py-[7px]">
          <PersonIcon />
          <span className="text-[15px]">Đăng nhập</span>
        </div>
      </Link>
      <Link onClick={() => setService(false)} to="/search">
        <div className="flex flex-row text-[#555] items-center gap-[3px] py-[7px]">
          <HistoryIcon />
          <span className="text-[15px]">Tra cứu đơn hàng</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemService;
