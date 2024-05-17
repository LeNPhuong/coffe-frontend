import React, { useEffect, useState } from "react";
import slide from "../../dataclient/slide";
import Slide_Item from "./Slide_Item";
import Slide_Btn from "./Slide_Btn";

const Slide_Box = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(
        function () {
            const id = setInterval(() => {
                setCount((e) => (e > 3 ? 0 : (e += 1)));
            }, 5000);
            return () => clearInterval(id);
        },
        [count],
    );

    return (
        <div className="w-full relative">
            <Slide_Item data={slide[count]} />
            <Slide_Btn slide={slide} count={count} setCount={setCount} />
        </div>
    );
};

export default Slide_Box;
