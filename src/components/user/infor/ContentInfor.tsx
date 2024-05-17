import React from "react";
import { Outlet } from "react-router-dom";

const ContentInfor: React.FC = () => {
    return (
        <div className="lg:w-[65%] sm:w-full">
            <Outlet />
        </div>
    );
};

export default ContentInfor;
