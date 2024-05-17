import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllBill } from "../../../../../services/bill";
import Loading from "../../../../loading/Loading";
import BillItem from "./BillItem";

const BoxInfor = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["mngbill"],
        queryFn: async () => {
            const data = await getAllBill();
            return data;
        },
    });
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="mt-[15px] p-[10px] shadow-[0_0_15px_#ccc] rounded-[8px]">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_2fr_1fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
                <p className="capitalize text-center text-[14px] font-[500]">Tên</p>
                <p className="capitalize text-center text-[14px] font-[500]">Số điện thoại</p>
                <p className="capitalize text-center text-[14px] font-[500]">Hình thức</p>
                <p className="capitalize text-center text-[14px] font-[500]">trạng thái</p>
                <p className="capitalize text-center text-[14px] font-[500]">Giá</p>
                <p className="capitalize text-center text-[14px] font-[500]">Thời gian</p>
                <p className="capitalize text-center text-[14px] font-[500]">Hành động</p>
            </div>
            <div className="flex flex-col gap-[15px] mt-[10px]">
                {data.data.bill.map((e, index) => (
                    <BillItem key={index} data={e} />
                ))}
            </div>
        </div>
    );
};

export default BoxInfor;
