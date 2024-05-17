import React from "react";
import { IoHome } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavList: React.FC<NonNullable<unknown>> = () => {
  return (
    <ul className="flex justify-between">
      <li>
        <Link className="text-[rgba(0,0,0,.6)] flex flex-col items-center" to="/">
          <span className="text-[19px]">
            <IoHome />
          </span>
          <span className="text-[12px] font-[600]">Trang chủ</span>
        </Link>
      </li>
      <li className="text-[rgba(0,0,0,.6)] flex flex-col items-center">
        <span className="text-[19px]">
          <FaCoffee />
        </span>
        <span className="text-[12px] font-[600]">Đặt hàng</span>
      </li>
      <li className="text-[rgba(0,0,0,.6)] flex flex-col items-center">
        <span className="text-[19px]">
          <GrArticle />
        </span>
        <span className="text-[12px] font-[600]">Tin tức</span>
      </li>
      <li>
        <Link className="text-[rgba(0,0,0,.6)] flex flex-col items-center" to="/store">
          <span className="text-[19px]">
            <FaStore />
          </span>
          <span className="text-[12px] font-[600]">Cửa hàng</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
