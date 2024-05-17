import { Typography } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const User: React.FC = () => {
  const url = useLocation();

  return (
    <div className="max-w-[1240px] h-[80vh] overflow-hidden mx-auto py-[30px]">
      <div className="w-full h-full shadow-[0_0_8px_#ccccccbc] overflow-auto max-w-[40%] mx-auto pt-[50px] px-[10px] rounded-lg">
        <div className="w-full h-full  flex flex-col p-[20px]">
          <div className="flex flex-col items-center justify-center mt-[20px]">
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "500",
                marginBottom: "20px",
                textTransform: "uppercase",
                color: "#ea580c",
              }}
            >
              {url.pathname === "/user/login" || url.pathname === "/user"
                ? "Đăng nhập"
                : url.pathname === "/user/register" && "Đăng ký"}
            </Typography>
            <img
              className="w-[100px] h-[100px]"
              src="https://play-lh.googleusercontent.com/LP5zrOXygcRYZi_bwD5A0460d94Ib9EyZ5SXldpnZv7pvKwbbFZrPz3exggDR2XAxYI"
              alt=""
            />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default User;
