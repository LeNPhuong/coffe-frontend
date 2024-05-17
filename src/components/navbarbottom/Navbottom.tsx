import React from "react";
import NavList from "./NavList";

const Navbottom: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="fixed bottom-0 right-0 left-0 bg-[#fff] shadow-[0_-4px_10px_rgba(0,0,0,.1)] px-[20px] py-[10px] z-[9999] lg:hidden sm:block">
            <NavList />
        </div>
    );
};

export default Navbottom;
