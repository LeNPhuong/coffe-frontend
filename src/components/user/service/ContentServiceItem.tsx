import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const ContentServiceItem: React.FC<{
    data: { id: number; name: string; icon: ReactNode; link?: string };
}> = ({ data }) => {
    const url = useLocation();

    return (
        <Link
            to={`${data.link}`}
            className={`flex flex-row items-center gap-[10px] w-full border-b-[2px] ${
                "/infor/" + data.link === url.pathname
                    ? "border-b-[#ffe0b2]"
                    : "border-b-[#ccc]"
            }  px-[5px] pb-[10px] mb-[10px]`}
        >
            <span
                className={`${
                    "/infor/" + data.link === url.pathname
                        ? "text-orange-500"
                        : "text-[#d3d3d3]"
                }`}
            >
                {data.icon}
            </span>
            <span
                className={`text-[16px] font-[400] ${
                    "/infor/" + data.link === url.pathname
                        ? "text-orange-500"
                        : "text-[#000]"
                }`}
            >
                {data.name}
            </span>
        </Link>
    );
};

export default ContentServiceItem;
