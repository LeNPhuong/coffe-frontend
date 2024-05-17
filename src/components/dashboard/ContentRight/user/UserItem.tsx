import React from "react";
import Btn from "./Btn";

interface datauser {
    _id: string;
    active: true;
    email: string;
    name: string;
    phone: string;
    role: string;
    totaltoken: number;
}

const UserItem: React.FC<{ data: datauser }> = ({ data }) => {
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] content-center items-center w-full p-[10px] rounded-[8px]">
            <p className="text-center text-[12px]">{data.name}</p>
            <p className="text-center text-[12px]">{data.email}</p>
            <p className="text-center text-[12px]">{data.phone}</p>
            <p
                className={`text-center text-[12px] py-[10px] text-[#fff] font-[500] rounded-[8px] ${
                    data.active ? "bg-orange-500" : "bg-red-500"
                }`}
            >
                {data.active ? "Hoạt động" : "Vô hiệu"}
            </p>
            <p className="text-center text-[12px]">{data.role === "admin" ? "Quản trị" : "Người dùng"}</p>
            <p className="text-center text-[15px] font-[500] text-red-500">{data.totaltoken ? data.totaltoken : 0}</p>
            <div className="flex justify-center">
                {data.active ? <Btn id={data._id} type={"active"} /> : <Btn id={data._id} type={"disable"} />}
            </div>
        </div>
    );
};

export default UserItem;
