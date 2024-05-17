import { Typography } from "@mui/material";
import React, { SetStateAction } from "react";

const ItemSearch: React.FC<{
    data: { main_text: string; description: string };
    setMap: React.Dispatch<SetStateAction<string>>;
    setDataSearch: React.Dispatch<SetStateAction<string | null>>;
}> = ({ data, setMap, setDataSearch }) => {
    return (
        <div
            onClick={() => {
                setMap(data.description);
                setDataSearch(null);
            }}
            className="flex flex-col border-b-[1px] border-b-[#ccc] mb-[10px] py-[10px] cursor-pointer"
        >
            <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                {data?.main_text}
            </Typography>
            <Typography
                sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                }}
            >
                {data?.description}
            </Typography>
        </div>
    );
};

export default ItemSearch;
