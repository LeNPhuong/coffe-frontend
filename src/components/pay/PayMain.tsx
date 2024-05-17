import React, { SetStateAction } from "react";
import PayHeader from "./PayHeader";
import PayBody from "./PayBody";

const PayMain: React.FC = () => {
    return (
        <div className="max-w-[1440px] mx-auto mt-[90px] mb-[30px] lg:px-[20px] sm:px-[0px]">
            <PayHeader />
            <PayBody />
        </div>
    );
};

export default PayMain;
