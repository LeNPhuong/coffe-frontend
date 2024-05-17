import React from "react";
import Content from "./Content";
import { useAppDispatch } from "../../../redux/store";
import { btnorderdelete } from "../../../redux/modelSlice";

const DeleteOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(btnorderdelete(false))}
      className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999] flex items-center justify-center"
    >
      <Content />
    </div>
  );
};

export default DeleteOrder;
