import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ItemsV2 from "./ItemsV2";
import datafooter from "./data";

const ListV2: React.FC<NonNullable<unknown>> = () => {
    return (
        <ul className="flex flex-wrap items-start w-full">
            {datafooter.map((e) => (
                <ItemsV2 key={e.id} data={e} />
            ))}
        </ul>
    );
};

export default ListV2;
