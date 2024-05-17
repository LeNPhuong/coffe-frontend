import React from "react";
import datafooter from "./data";
import ItemsV1 from "./ItemsV1";

const ListV1: React.FC<NonNullable<unknown>> = () => {
    return (
        <ul className="flex flex-row w-full justify-between items-start">
            {datafooter.map((e) => (
                <ItemsV1 key={e.id} data={e} />
            ))}
        </ul>
    );
};

export default ListV1;
