import { Stack } from "@mui/material";
import React from "react";
import Product_Type_Items from "./Product_Type_Items";

const Product_Type: React.FC<{
    typeprd: string;
    setTypePrd: React.Dispatch<string>;
    data: {
        _id: string;
        name: string;
        img: string;
        status: boolean;
        type: string;
        slug: string;
    }[];
}> = ({ data, typeprd, setTypePrd }) => {
    return (
        <section className="w-full mb-[10px]">
            <div className="overflow-y-hidden loverflow-x-auto">
                <Stack
                    direction="row"
                    sx={{
                        "@media (min-width:768px)": {
                            justifyContent: "center",
                            flexWrap: "nowrap",
                        },
                        "@media (min-width:992px)": {
                            justifyContent: "center",
                            flexWrap: "wrap",
                            maxWidth: "900px",
                            minWidth: "900px",
                            margin: "0 auto",
                        },
                        "@media (min-width:1280px)": {
                            justifyContent: "center",
                            flexWrap: "wrap",
                            maxWidth: "1150px",
                            minWidth: "1150px",
                            margin: "0 auto",
                        },
                    }}
                    spacing={2}
                >
                    {data.map((e) => (
                        <Product_Type_Items
                            typeprd={typeprd}
                            setTypePrd={setTypePrd}
                            key={e._id}
                            data={e}
                        />
                    ))}
                </Stack>
            </div>
        </section>
    );
};

export default Product_Type;
