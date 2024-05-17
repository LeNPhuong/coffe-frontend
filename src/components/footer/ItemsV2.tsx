import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import styledata from "./CssItemv2";

interface type {
    id: number;
    title: string;
    stylecore: string;
    menusub: string[];
}

const ItemsV2: React.FC<{ data: type }> = ({ data }) => {
    const [menusub, setMenusub] = useState<boolean>(false);
    return (
        <li className={`${styledata[data.stylecore]}`}>
            <div className="flex flex-row items-center gap-[5px] mb-[10px]">
                <button onClick={() => setMenusub((e) => !e)}>
                    {menusub ? <FaMinus /> : <FaPlus />}
                </button>
                <span className="font-[600]">{data.title}</span>
            </div>
            {menusub && (
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

export default ItemsV2;
