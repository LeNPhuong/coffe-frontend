import React from "react";
import { Link } from "react-router-dom";

const NavList: React.FC<NonNullable<unknown>> = () => {
  return (
    <ul className="lg:flex sm:hidden flex-row items-center gap-6 justify-start mr-6">
      <li className="text-[#fff] text-[14px] font-[500]">Cà phê hạt rang</li>
      <li className="text-[#fff] text-[14px] font-[500]">Tin tức</li>
      <li className="">
        <Link to="/store" className="text-[#fff] text-[14px] font-[500]">
          Cửa hàng
        </Link>
      </li>
      <li className="text-[#fff] text-[14px] font-[500]">Khuyến mãi</li>
      <li className="text-[#fff] text-[14px] font-[500]">Tuyển dụng</li>
    </ul>
  );
};

export default NavList;
