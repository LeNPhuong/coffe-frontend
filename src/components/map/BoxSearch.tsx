import React, { SetStateAction } from "react";
import ItemSearch from "./ItemSearch";

const BoxSearch: React.FC<{
    datamap: { main_text: string; description: string }[];
    setMap: React.Dispatch<SetStateAction<string>>;
    setDataSearch: React.Dispatch<SetStateAction<string | null>>;
}> = ({ datamap, setMap, setDataSearch }) => {
    return (
        <div className="absolute left-0 right-0 px-[20px] py-[10px] top-[90px]">
            <div className="w-full flex flex-col shadow-xl bg-[#fff] px-[20px] py-[10px] rounded-[8px]">
                {datamap?.map((e, index) => (
                    <ItemSearch
                        key={index}
                        data={e}
                        setMap={setMap}
                        setDataSearch={setDataSearch}
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxSearch;
