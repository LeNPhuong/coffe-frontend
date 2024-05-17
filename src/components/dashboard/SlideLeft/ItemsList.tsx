import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const ItemsList: React.FC<{
    data: {
        id: number;
        name: string;
        icons: ReactNode;
        links: string;
    };
}> = ({ data }) => {
    const url = useLocation().pathname;

    return (
        <div>
            <Link to={data.links}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "end",
                        color: url.includes(data.links) ? "#fff" : "#111827",
                        background: url.includes(data.links) ? "#f97316" : "none",
                        padding: "10px",
                        borderRadius: "10px",
                        transition: "all .5s",
                    }}
                >
                    <span className="w-[28px] h-[28px]">{data.icons}</span>
                    <span className="ml-[20px] text-[16px] capitalize font-[500]">{data.name}</span>
                </Box>
            </Link>
        </div>
    );
};

export default ItemsList;
