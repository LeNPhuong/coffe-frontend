import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import RestoreIcon from "@mui/icons-material/Restore";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { logoutuser } from "../../services/user";

const UserBoxItem: React.FC<{
  setService: Dispatch<SetStateAction<boolean>>;
}> = ({ setService }) => {
  function logout() {
    logoutuser();
  }
  return (
    <div className="absolute top-[45px] right-0 left-[-90px] bottom-0 w-[250%] bg-[#fff] p-[10px] z-[99999] rounded-[8px] shadow-[0_0_5px_#dddddd8c] h-[700%]">
      <div className="relative">
        <button
          onClick={() => setService(false)}
          className="absolute right-[0px] top-[0px]"
        >
          <CloseIcon
            sx={{
              width: "20px",
              height: "20px",
              color: "#f97316",
            }}
          />
        </button>
      </div>
      <Link
        onClick={() => setService(false)}
        className="mt-[20px] pb-[15px] border-b-[1px] border-b-[#d4d4d8] w-full"
        to="/infor"
      >
        <div className="flex flex-row items-center">
          <PersonOutlineIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "#f97316",
            }}
          />{" "}
          <span className="text-[15px] leading-[30px] font-[300] ml-[10px] text-[#6b7280] hover:text-[#f97316]">
            Thông tin tài khoản
          </span>
        </div>
      </Link>
      <button
        onClick={() => setService(false)}
        className="mt-[20px] pb-[15px] border-b-[1px] border-b-[#d4d4d8] w-full"
      >
        <div className="flex flex-row items-center">
          <FmdGoodIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "#f97316",
            }}
          />{" "}
          <span className="text-[15px] leading-[30px] font-[300] ml-[10px] text-[#6b7280] hover:text-[#f97316]">
            Sổ địa chỉ
          </span>
        </div>
      </button>
      <Link
        onClick={() => setService(false)}
        className="mt-[20px] pb-[15px] border-b-[1px] border-b-[#d4d4d8] w-full"
        to="/search"
      >
        <div className="flex flex-row items-center">
          <RestoreIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "#f97316",
            }}
          />{" "}
          <span className="text-[15px] leading-[30px] font-[300] ml-[10px] text-[#6b7280] hover:text-[#f97316]">
            Lịch sử mua hàng
          </span>
        </div>
      </Link>
      <button
        onClick={() => {
          setService(false);
          logout();
        }}
        className="mt-[20px]"
      >
        <div className="flex flex-row items-center">
          <LogoutIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "#f97316",
            }}
          />{" "}
          <span className="text-[15px] leading-[30px] font-[300] ml-[10px] text-[#6b7280] hover:text-[#f97316]">
            Đăng xuất
          </span>
        </div>
      </button>
    </div>
  );
};

export default UserBoxItem;
