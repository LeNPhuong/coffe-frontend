import React from "react";
import BoxItem_Core from "./BoxItem_Core";
import { databill } from "../../type/databill";

const BoxItem: React.FC<{
  data: databill[];
}> = ({ data }) => {
  return (
    <div className="mt-[10px]">
      {data.map((e) => (
        <BoxItem_Core key={e._id} data={e} />
      ))}
    </div>
  );
};

export default BoxItem;
