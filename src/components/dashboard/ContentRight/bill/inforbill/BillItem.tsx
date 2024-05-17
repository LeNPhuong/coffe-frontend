import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { dataorder } from "../../../../../type/databill";
import changecurrency from "../../../../../utils/changeCurrency";
import { Link } from "react-router-dom";

interface datacore extends dataorder {
  _id: string;
}

const BillItem: React.FC<{ data: datacore }> = ({ data }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_2fr_1fr] content-center w-full p-[10px]">
      <p className="capitalize text-center text-[14px] font-[500]">{data.name}</p>
      <p className="capitalize text-center text-[14px] font-[500]">{data.phone}</p>
      <p className="capitalize text-center text-[14px] font-[500]">{data.methodpay.method}</p>
      <p className="capitalize text-center text-[14px] font-[500]">{data.status}</p>
      <p className="capitalize text-center text-[14px] font-[400] text-red-500">
        {changecurrency(
          data.bill.reduce(
            (acc, cur) =>
              acc +
              (cur.price +
                (cur.size ? cur.size?.price : 0) +
                (cur.topping ? cur.topping.price * cur.topping.quantity : 0)) *
                cur.quantity,
            0,
          ),
        )}
      </p>

      <p className="capitalize text-center text-[14px] font-[500]">{data.date}</p>
      <div className="flex justify-center">
        <Link to={`details/${data.code}`}>
          <button className="capitalize text-center text-[20px] font-[500] hover:rotate-180 duration-500">
            <IoSettingsOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillItem;
