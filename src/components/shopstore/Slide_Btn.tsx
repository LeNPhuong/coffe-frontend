import React from "react";
import Slide_Btn_Item from "./Slide_Btn_Item";

const Slide_Btn: React.FC<{
    setCount: React.Dispatch<number>;
    slide: {
        id: number;
        name: string;
        img: string;
    }[];
    count: number;
}> = ({ slide, count, setCount }) => {
    return (
        <div className="absolute bottom-[10px] left-0 right-0">
            <div className="flex flex-row justify-center">
                {slide.map((e) => (
                    <Slide_Btn_Item
                        key={e.id}
                        setCount={setCount}
                        count={count}
                        data={e}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slide_Btn;
