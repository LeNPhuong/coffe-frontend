import React from "react";
import { Outlet } from "react-router-dom";
import SlideLeft from "../../components/dashboard/SlideLeft/SlideLeft";

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className="max-w-[1440px] min-w-[1440px] h-[100vh] overflow-hidden mx-auto p-[20px]">
        <div className="flex flex-row w-full h-full overflow-y-auto shadow-[0_0_5px_#0000004b] rounded-[8px]">
          <SlideLeft />
          <div className="w-[75%]">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
