import React from "react";

const Slide_Item: React.FC<{
    data: {
        name: string;
        id: number;
        img: string;
    };
}> = ({ data }) => {
    return (
        <div className="w-full">
            <img src={data.img} className="w-full object-cover" alt={data.name} />
        </div>
    );
};

export default Slide_Item;
