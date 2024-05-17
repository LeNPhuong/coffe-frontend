import React, { useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import ContentV2 from "./ContentV2";

const BoxBg = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: radial-gradient(100% 584.59% at 0% 50%, #d46b08 0%, #874d00 100%);
`;

const FooterVer2: React.FC<NonNullable<unknown>> = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="sm:block lg:hidden sm:mb-[60px] lg:mb-[0px]">
            <BoxBg>
                <div className="flex flex-col gap-1">
                    <p className="text-[13px] text-[#fff]">Đặt hàng (7:00-20:30)</p>
                    <p className="flex flex-row items-center text-[#fff] gap-[2px]">
                        <span className="text-[15px] ">
                            <FaSquarePhone />
                        </span>
                        <span className="text-[16px] font-[500]">18006936</span>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="w-[55px] text-[12px] text-center text-[#fff]">
                        Xem thêm thông tin
                    </p>
                    <button onClick={() => setOpen((e) => !e)} className="text-[#fff] text-[14px]">
                        {open ? <FaAngleDown /> : <FaChevronUp />}
                    </button>
                </div>
            </BoxBg>
            {open && <ContentV2 />}
        </div>
    );
};

export default FooterVer2;
