import React from "react";
import Content from "./Content";
import { useAppDispatch } from "../../../redux/store";
import { btnbfdelte } from "../../../redux/modelSlice";

const StatusDelte = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(btnbfdelte(false))}
      className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999] flex items-center justify-center px-[10px]"
    >
      <Content />
    </div>
  );
};

export default StatusDelte;
