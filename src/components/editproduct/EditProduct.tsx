import { FC } from "react";
import { useAppDispatch } from "../../redux/store";
import Edit_Core from "./Edit_Core";
import { switchEdit } from "../../redux/editSlice";

const EditProduct: FC<NonNullable<unknown>> = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(switchEdit(null))}
      className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999]"
    >
      <Edit_Core />
    </div>
  );
};

export default EditProduct;
