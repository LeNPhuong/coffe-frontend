import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { GrShop } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import ItemService from "./ItemService";
import UserService from "./UserService";

const Service: React.FC<NonNullable<unknown>> = () => {
    const [service, setService] = useState<boolean>(false);
    const user = useAppSelector((e) => e.user.user);
    const count = useAppSelector((e) => e.product.cart);

    return (
        <div className="flex flex-row items-center gap-[10px] md:p-0">
            {user ? (
                <UserService user={user} />
            ) : (
                <button
                    onClick={() => setService((e) => (e = !e))}
                    className="text-[#fff] text-[20px] rounded-full w-[40px] h-[40px] border-[2px] border-[#fff] flex justify-center items-center relative"
                >
                    <FaRegUser />

                    {service && <ItemService setService={setService} />}
                </button>
            )}

            <button
                className={` text-[20px] rounded-full w-[40px] h-[40px] border-[2px] ${
                    count
                        ? "text-orange-500 border-[#fff] bg-[#fff]"
                        : "text-[#fff] border-[#fff]"
                } flex justify-center items-center relative`}
            >
                <Link to="/pay">
                    <GrShop />
                </Link>
                {count && (
                    <span className="absolute text-[12px] w-[25px] h-[25px] top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-red-500 text-[#fff] rounded-full leading-[25px]">
                        {count.reduce((acc, cur) => acc + cur.quantity, 0)}
                    </span>
                )}
            </button>
        </div>
    );
};

export default Service;
