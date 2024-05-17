import { FC, useState } from "react";
import { useAppSelector } from "../../../../redux/store";
import { useMutation } from "@tanstack/react-query";
import { updateuser } from "../../../../services/user";
import Loading from "../../../loading/Loading";

const FormContent: FC = () => {
    const datauser = useAppSelector((e) => e.user.user);

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { mutate } = useMutation({
        mutationFn: async () => {
            const datacore: { name: string; phone: string; email: string } = {
                name: name,
                phone: phone,
                email: email,
            };

            Object.keys(datacore).forEach((e) => (datacore[e] === "" ? delete datacore[e] : e));
            Object.keys(datacore).forEach((e) =>
                datacore[e] === datauser[e] ? delete datacore[e] : e,
            );

            const data = await updateuser(datacore);
            if (data.response.data.message === "Error") {
                return alert(data.response.data.data);
            } else {
                return window.location.reload();
            }
        },
    });

    if (!datauser) {
        return <Loading />;
    }

    return (
        <div className="w-full flex flex-col lg:items-start sm:items-center">
            <div className="flex flex-col lg:items-start sm:items-center w-full">
                <div className="flex flex-col gap-[8px] my-[5px] w-full lg:items-start sm:items-center">
                    <label>Tên khách hàng</label>
                    <input
                        type="text"
                        className="border-[1px] border-[#ccc] outline-none w-[60%] p-[5px] rounded-[5px] text-[14px]"
                        value={name.length === 0 ? datauser?.name : name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-[8px] my-[5px] w-full lg:items-start sm:items-center">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        className="border-[1px] border-[#ccc] outline-none w-[60%] p-[5px] rounded-[5px] text-[14px]"
                        value={phone.length === 0 ? datauser?.phone : phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-[8px] my-[5px] w-full lg:items-start sm:items-center">
                    <label>Email</label>
                    <input
                        type="text"
                        className="border-[1px] border-[#ccc] outline-none w-[60%] p-[5px] rounded-[5px] text-[14px]"
                        value={email.length === 0 ? datauser?.email : email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <button
                onClick={() => mutate()}
                type="button"
                className="bg-orange-500 text-[15px] text-[#fff] py-[7px] px-[20px] rounded-full mt-[20px]"
            >
                Cập nhật
            </button>
        </div>
    );
};

export default FormContent;
