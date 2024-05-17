import React, { useState } from "react";
import { dataorder } from "../../../../../type/databill";
import ItemsUser from "./ItemsUser";
import { updateBill } from "../../../../../services/bill";

const BoxInforUser: React.FC<{ data: dataorder }> = ({ data }) => {
    const [status, setStatus] = useState<string>(data.status);

    async function updatebill(status: string) {
        const connect = data.connect;
        const code = data.code;
        if (status === data.status) {
            return alert("Không có gì để cập nhật");
        }

        const checkup = confirm("Bạn có thật sự muốn cập nhật");

        if (checkup) {
            const result = await updateBill(connect, code, status);
            alert("Cập nhật thành công");
            window.location.reload();
        }
    }

    return (
        <div className="w-[49%]">
            <div className="flex flex-col gap-[3px]">
                <p className="text-[22px] font-[600] mb-[10px]">Thông tin khách hàng</p>
                <ItemsUser title="Tên" content={data.name} />
                <ItemsUser title="Số điện thoại" content={data.phone} />
                <ItemsUser title="Ghi chú" content={data.guid} />
                {data.status === "Giao thành công" ? (
                    ""
                ) : (
                    <>
                        <p className="text-[22px] font-[600] mb-[10px]">Cập nhật trạng thái</p>
                        <select
                            value={status}
                            className="ouline-none border-[1px] p-[5px] rounded-[5px] border-[#000]"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Chuẩn bị">Chuẩn bị</option>
                            <option value="Đóng gói">Đóng gói</option>
                            <option value="Đang giao">Đang giao</option>
                            <option value="Giao thành công">Giao thành công</option>
                        </select>
                        <button
                            onClick={() => updatebill(status)}
                            className="bg-orange-500 text-[16px] text-[#fff] font-[500] self-start py-[6px] px-[15px] rounded-[6px] hover:bg-orange-700 duration-500 mt-[5px]"
                        >
                            Cập nhật
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default BoxInforUser;
