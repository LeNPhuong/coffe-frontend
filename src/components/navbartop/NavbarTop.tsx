import React from "react";
import Service from "./Service";
import NavList from "./NavList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { btnmap } from "../../redux/modelSlice";

const NavbarTop: React.FC = () => {
  const mapdata = useAppSelector((e) => e.product.map);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between lg:gap-5 items-center w-full px-[15px] xl:max-w-[1240px] lg:max-w-[1040px] lg:mx-auto">
      <div onClick={() => navigate("/")} className="lg:block sm:hidden cursor-pointer">
        <img
          className="h-[14px]"
          src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
          alt=""
        />
      </div>

      <button onClick={() => dispatch(btnmap(true))} className="inline-block">
        <div className="bg-[rgba(232,130,21,.7)] rounded-full flex flex-row items-center gap-2 py-[5px] px-2 mr-1 overflow-hidden h-[60px] max-w-[270px] md:min-w-[270px]">
          <img className="h-[40px]" src="/imgicon/iconshiper.png" alt="" />
          <div className="overflow-hidden min-w-[1px] flex flex-col text-left">
            <p className="font-[500] text-[16px] text-[#fff]">Giao hàng</p>
            <span className="font-[400] text-[15px] text-[#fff] md:max-w-[250px] md:min-w-[250px] sm:max-w-[100px] sm:min-w-[100px] whitespace-nowrap">
              Tại: {mapdata.length === 0 ? "Nhập địa chỉ giao hàng" : mapdata}
            </span>
          </div>
          <span className="h-[5px] w-[5px] border-t-[1px] border-t-[#ccc] border-l-[1px] border-l-[#ccc] rotate-[-135deg]"></span>
        </div>
      </button>

      <NavList />

      <Service />
    </div>
  );
};

export default NavbarTop;
