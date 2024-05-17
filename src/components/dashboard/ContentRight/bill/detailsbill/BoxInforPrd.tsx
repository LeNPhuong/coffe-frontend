import React from "react";
import { dataorder } from "../../../../../type/databill";
import ItemsUser from "./ItemsUser";
import changecurrency from "../../../../../utils/changeCurrency";
import { getdeletebill } from "../../../../../services/coffe";
import { useNavigate } from "react-router-dom";

const BoxInforPrd: React.FC<{ data: dataorder }> = ({ data }) => {
    const navigate = useNavigate();

    async function deleteBill(code: string) {
        const data = await getdeletebill(code);
        alert(data);
        navigate(-1);
    }

    return (
        <div className="w-[49%]">
            <div className="flex flex-col gap-[3px]">
                <p className="text-[22px] font-[600] mb-[10px]">Thông tin đơn hàng</p>
                <ItemsUser
                    title="Số lượng"
                    content={data.bill.reduce((acc, cur) => acc + cur.quantity, 0)}
                />
                <ItemsUser
                    title="Tổng giá"
                    content={changecurrency(
                        data.bill.reduce(
                            (acc, cur) =>
                                acc +
                                (cur.price +
                                    (cur.size ? cur.size?.price : 0) +
                                    (cur.topping
                                        ? cur.topping.price * cur.topping.quantity
                                        : 0)) *
                                    cur.quantity,
                            0,
                        ),
                    )}
                />
                <ItemsUser title="Hình thức" content={data.methodpay.method} />
                <p className="text-[22px] font-[600] mb-[10px]">Trạng thái đơn hàng</p>
                <ItemsUser title="Trạng thái" content={data.status} />
                <button
                    onClick={() => deleteBill(data.code)}
                    className="bg-red-500 text-[16px] text-[#fff] font-[500] self-start py-[6px] px-[15px] rounded-[6px] hover:bg-orange-700 duration-500"
                >
                    Xoá đơn hàng
                </button>
            </div>
        </div>
    );
};

export default BoxInforPrd;
