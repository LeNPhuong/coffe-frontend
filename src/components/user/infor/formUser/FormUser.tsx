import React from "react";
import FormContent from "./FormContent";

const FormUser: React.FC = () => {
  return (
    <div className="flex flex-col lg:items-start sm:items-center">
      <p className="text-[34px] font-[500] pb-[11px] inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[60%] before:h-[2px] before:bg-orange-500 mb-[20px]">
        Thông tin tài khoản
      </p>
      <FormContent />
    </div>
  );
};

export default FormUser;
