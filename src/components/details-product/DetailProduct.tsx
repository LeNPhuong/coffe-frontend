import { FC } from "react";
import { useAppDispatch } from "../../redux/store";
import { getDetails } from "../../redux/sliceProduct";
import Detail_Core from "./Detail_Core";

const DetailProduct: FC<NonNullable<unknown>> = () => {
    const dispatch = useAppDispatch();

    return (
        <div
            onClick={() => dispatch(getDetails(null))}
            className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999]"
        >
            <Detail_Core />
        </div>
    );
};

export default DetailProduct;
