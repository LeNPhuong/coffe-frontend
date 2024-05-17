import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAccount } from "../../../../services/user";
import Loading from "../../../loading/Loading";
import ErrorQuery from "../../../error/ErrorQuery";
import UserItem from "./UserItem";

const BoxUser: React.FC = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["userdata"],
        queryFn: async () => {
            const data = await getAccount();
            return data;
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorQuery />;
    }

    return (
        <div className="mt-[15px] p-[10px] shadow-[0_0_15px_#ccc] rounded-[8px]">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
                <p className="capitalize text-center text-[14px] font-[500]">Tên</p>
                <p className="capitalize text-center text-[14px] font-[500]">Email</p>
                <p className="capitalize text-center text-[14px] font-[500]">Số điện thoại</p>
                <p className="capitalize text-center text-[14px] font-[500]">trạng thái</p>
                <p className="capitalize text-center text-[14px] font-[500]">vai trò</p>
                <p className="capitalize text-center text-[14px] font-[500]">tích điểm</p>
                <p className="capitalize text-center text-[14px] font-[500]">Hành động</p>
            </div>
            <div className="flex flex-col gap-[15px] mt-[10px]">
                {data.data.user.map((e, index) => (
                    <UserItem key={index} data={e} />
                ))}
            </div>
        </div>
    );
};

export default BoxUser;
