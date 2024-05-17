import React from "react";
import { Outlet } from "react-router-dom";

const BillBox: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BillBox;
