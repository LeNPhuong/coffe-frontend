import React from "react";
import ContentService from "./service/ContentService";
import ContentInfor from "./infor/ContentInfor";

const UserContent: React.FC = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col lg:items-start sm:items-center gap-[50px] w-full">
      <ContentService />
      <ContentInfor />
    </div>
  );
};

export default UserContent;
