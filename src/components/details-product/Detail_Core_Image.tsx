import { CardMedia } from "@mui/material";
import { FC } from "react";

const Detail_Core_Image: FC<{ image: string }> = ({ image }) => {
    return (
        <div className="p-[5px_15px]">
            <CardMedia
                sx={{
                    "@media (min-width:1px)": {
                        width: "100%",
                        borderRadius: "10px",
                        display: "block",
                        objectFit: "cover",
                    },
                }}
                component="img"
                image={image}
            />
        </div>
    );
};

export default Detail_Core_Image;
