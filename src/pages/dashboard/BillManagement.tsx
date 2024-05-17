import React from "react";
import BillBox from "../../components/dashboard/ContentRight/bill/BillBox";

const BillManagement: React.FC = () => {
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
                <div>
                    <p className="text-[24px] font-[500] capitalize ">Quản lý đơn hàng</p>
                </div>
                <BillBox />
            </div>
        </div>
    );
};

export default BillManagement;
