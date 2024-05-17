import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import UserBoxItem from "./UserBoxItem";

const UserService: React.FC<{
  user: { name: string; email: string; phone: string };
}> = ({ user }) => {
  const [service, setService] = useState<boolean>(false);
  return (
    <div className="flex flex-row items-center gap-[5px] relative">
      <button
        onClick={() => setService((e) => (e = !e))}
        className="text-[#fff] text-[20px] rounded-full w-[40px] h-[40px] border-[2px] border-[#fff] flex justify-center items-center relative"
      >
        <FaRegUser />
      </button>
      <span className="text-[15px] text-[#fff]">{user.name}</span>
      {service && <UserBoxItem setService={setService} />}
    </div>
  );
};

export default UserService;
