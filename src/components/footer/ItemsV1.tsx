import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface type {
    id: number;
    title: string;
    stylecore: string;
    menusub: string[];
}

const ItemsV1: React.FC<{ data: type }> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <li className="relative flex flex-col items-start justify-start text-[#fff] w-[23%] after:content-[''] after:absolute after:bottom-0 after:w-full after:left-0 after:right-0 after:h-[1px] after:bg-[#fff] after:opacity-50 pb-[10px]">
            <button
                onClick={() => setOpen((e) => !e)}
                className="flex flex-row gap-5 mb-[10px]"
            >
                <span>{open ? <FaMinus /> : <FaPlus />}</span>
                <span className="text-[14px] font-[500]">{data.title}</span>
            </button>
            {open && (
                <div className="">
                    <ul className="flex flex-col gap-[5px] pl-[30px]">
                        {data.menusub.map((e) => (
                            <li className="list-disc text-[14px]">{e}</li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

export default ItemsV1;
