import React from "react";

const Slide_Btn_Item: React.FC<{
    count: number;
    setCount: React.Dispatch<number>;
    data: { id: number; name: string; img: string };
}> = ({ data, count, setCount }) => {
    return (
        <button
            onClick={() => setCount(data.id - 1)}
            style={{
                background: data.id === count + 1 ? "#f8700e" : "#cccccc75",
            }}
            className="mx-[5px] h-[3px] w-[39px]"
        ></button>
    );
};

export default Slide_Btn_Item;
