import React from "react";
import SearchMain_Step from "./SearchMain_Step";
import SearchCore_Main from "./SearchCore_Main";
import { dataorder } from "../../type/databill";

const SearchCore: React.FC<{
  data: dataorder;
}> = ({ data }) => {
  return (
    <div className="flex flex-col items-center py-[20px] px-[15px]">
      <SearchMain_Step status={data.status} />
      <div className="flex flex-col items-start w-full px-[15px] py-[20px] rounded-[8px] shadow-[0_0_5px_#0000001d] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[400px]">
        <SearchCore_Main data={data} />
      </div>
    </div>
  );
};

export default SearchCore;
