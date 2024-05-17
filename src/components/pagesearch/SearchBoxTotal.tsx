import { Typography } from "@mui/material";
import React from "react";
import SearchBoxTotalCore from "./SearchBoxTotalCore";
import { useAppDispatch } from "../../redux/store";
import { btnorderdelete } from "../../redux/modelSlice";
import { getcodeorder } from "../../redux/dataSlice";
import { databill } from "../../type/databill";

const SearchBoxTotal: React.FC<{
    statuspay: string;
    code: string;
    phone: string;
    name: string;
    datatotal: databill[];
    status: string;
}> = ({ statuspay, code, phone, name, datatotal, status }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="pt-[10px] flex flex-row justify-between">
            <div className="flex flex-col">
                <Typography
                    sx={{
                        display: "inline-block",
                        position: "relative",
                        fontSize: "16px",
                        fontWeight: "500",
                        marginBottom: "10px",
                        paddingBottom: "5px",
                        ":after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            width: "20%",
                            height: "2px",
                            background: "#f97316",
                        },
                    }}
                    className="text-orange-500"
                >
                    Chức năng
                </Typography>
                <div className="flex flex-col justify-between h-full sm:gap-[7px]">
                    <Typography
                        sx={{
                            display: "flex",
                            "@media (min-width:1px)": {
                                alignItems: "flex-start",
                                flexDirection: "column !important",
                            },
                            "@media (min-width:768px)": {
                                flexDirection: "row !important",
                                alignItems: "center",
                            },
                            gap: "5px",
                        }}
                    >
                        <span className="md:text-[14px] sm:text-[12px] font-[400] text-stone-500">
                            Tên khách hàng:
                        </span>
                        <span className="md:text-[16px] sm:text-[13px] capitalize font-[500] text-[#000]">
                            {name}
                        </span>
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            "@media (min-width:1px)": {
                                alignItems: "flex-start",
                                flexDirection: "column !important",
                            },
                            "@media (min-width:768px)": {
                                flexDirection: "row !important",
                                alignItems: "center",
                            },
                            gap: "5px",
                        }}
                    >
                        <span className="md:text-[14px] sm:text-[12px] font-[400] text-stone-500">
                            Liên lạc:
                        </span>
                        <span className="md:text-[16px] sm:text-[13px] capitalize font-[500] text-[#000]">
                            {phone}
                        </span>
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            "@media (min-width:1px)": {
                                alignItems: "flex-start",
                                flexDirection: "column !important",
                            },
                            "@media (min-width:768px)": {
                                flexDirection: "row !important",
                                alignItems: "center",
                            },
                            gap: "5px",
                        }}
                    >
                        <span className="md:text-[14px] sm:text-[12px] font-[400] text-stone-500">
                            Mã đơn:
                        </span>
                        <span className="md:text-[16px] sm:text-[13px] font-[500] text-[#000]">
                            {code}
                        </span>
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            "@media (min-width:1px)": {
                                alignItems: "flex-start",
                                flexDirection: "column !important",
                            },
                            "@media (min-width:768px)": {
                                flexDirection: "row !important",
                                alignItems: "center",
                            },
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <span className="md:text-[14px] sm:text-[11px] font-[400] text-stone-500">
                            Trạng thái thanh toán:
                        </span>
                        <span className="md:text-[16px] sm:text-[12px] capitalize font-[500] text-[#000]">
                            {statuspay}
                        </span>
                    </Typography>

                    <div className="flex md:flex-row sm:flex-col md:items-center sm:items-start gap-[5px]">
                        <Typography
                            className="text-stone-500"
                            sx={{
                                "@media (min-width:1px)": {
                                    fontSize: "12px",
                                },
                                "@media (min-width:768px)": {
                                    fontSize: "14px",
                                },
                                fontWeight: "400",
                            }}
                        >
                            Hành động:
                        </Typography>
                        <button
                            disabled={status === "Chuẩn bị" ? false : true}
                            onClick={() => {
                                dispatch(btnorderdelete(true));
                                dispatch(getcodeorder(code));
                            }}
                            className={`group relative md:text-[15px] sm:text-[13px] bg-red-400 hover:bg-red-500 duration-300 p-[8px] text-[#fff] font-[500] rounded-[5px] ${
                                status === "Chuẩn bị" ? "" : "select-none cursor-not-allowed"
                            }`}
                        >
                            Xoá đơn hàng !
                            {status === "Chuẩn bị" ? (
                                ""
                            ) : (
                                <div className="group-hover:block hidden absolute top-[-150%] left-0 right-0 text-[10px] text-[#000] bg-[#fff] shadow-[0_0_8px_#00000052] font-[400] p-[5px] rounded-[4px]">
                                    Không thể xoá khi đã tới bước chuẩn bị trở lên
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <SearchBoxTotalCore datatotal={datatotal} />
        </div>
    );
};

export default SearchBoxTotal;
