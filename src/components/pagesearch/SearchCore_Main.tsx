import React from "react";
import BoxItem from "./BoxItem";
import SearchBoxTotal from "./SearchBoxTotal";
import { dataorder } from "../../type/databill";

const SearchCore_Main: React.FC<{
    data: dataorder;
}> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex lg:flex-row sm:flex-col items-center gap-[10px] border-b-[1px] border-b-[#cccccca0] w-full pb-[20px]">
                <div className="flex flex-row items-center gap-[10px]">
                    <p className="md:text-[16px] sm:text-[13px] text-[#aba5a5] font-[400]">
                        Đặt lúc:
                    </p>
                    <p className="md:text-[16px] sm:text-[13px] text-[#000] font-[400]">
                        {data.date}
                    </p>
                </div>
                <div className="h-[18px] w-[2px] bg-[#ccc] lg:block sm:hidden"></div>
                <div className="flex flex-row gap-[10px] text-orange-600">
                    <p className="md:text-[16px] sm:text-[13px] font-[400]">Hình thức:</p>
                    <p className="md:text-[16px] sm:text-[13px] font-[400]">
                        {data.methodpay.method}
                    </p>
                </div>
                <div className="h-[18px] w-[2px] bg-[#ccc] lg:block sm:hidden"></div>
                <div className="flex flex-row gap-[10px] text-[#000]">
                    <p className="md:text-[16px] sm:text-[13px] font-[400] text-[#aba5a5]">
                        Dự kiến tới nơi:
                    </p>
                    <p className="md:text-[16px] sm:text-[13px] font-[400]">
                        Khoảng 45 - 60 phút kể từ lúc đặt hàng
                    </p>
                </div>
            </div>
            <BoxItem data={data.bill} />
            <SearchBoxTotal
                statuspay={data.statuspay}
                code={data.code}
                phone={data.phone}
                name={data.name}
                datatotal={data.bill}
                status={data.status}
            />
        </div>
    );
};

export default SearchCore_Main;
