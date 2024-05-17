import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getproduct } from "../../../../../services/product";
import Loading from "../../../../loading/Loading";
import Items from "./Items";
import ErrorQuery from "../../../../error/ErrorQuery";
import { product } from "../../../../../type/databill";
import Paginate from "./Paginate";

const BoxProduct = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error } = useQuery({
        queryKey: ["product", page],
        queryFn: async () => {
            const data = await getproduct(page);
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
        <div className="p-[10px] w-full shadow-[0_0_15px_#ccc] rounded-[8px] h-full flex flex-col">
            {/* header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
                <p className="capitalize text-center text-[14px] font-[500]">hình ảnh</p>
                <p className="capitalize text-center text-[14px] font-[500]">tên</p>
                <p className="capitalize text-center text-[14px] font-[500]">giá</p>
                <p className="capitalize text-center text-[14px] font-[500]">trạng thái</p>
                <p className="capitalize text-center text-[14px] font-[500]">hành động</p>
            </div>
            {/* body */}

            <div className="flex flex-col gap-[40px] mt-[10px]">
                {data.data.drink.map((e: product) => (
                    <Items key={e._id} data={e} />
                ))}
            </div>

            {/* paginate */}
            <div className="my-[40px] flex flex-row justify-center">
                <Paginate page={page} setPage={setPage} length={data.result} />
            </div>
        </div>
    );
};

export default BoxProduct;
