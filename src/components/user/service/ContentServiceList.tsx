import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MapIcon from "@mui/icons-material/Map";
import ShieldIcon from "@mui/icons-material/Shield";
import HistoryIcon from "@mui/icons-material/History";
import ContentServiceItem from "./ContentServiceItem";

const buttonitem = [
    {
        id: 1,
        name: "Thông tin tài khoản",
        icon: <PersonIcon />,
        link: "form",
    },
    {
        id: 2,
        name: "Sổ địa chỉ",
        icon: <MapIcon />,
        link: "map",
    },
    {
        id: 3,
        name: "Quyền lợi thành viên",
        icon: <ShieldIcon />,
        link: "shield",
    },
    {
        id: 4,
        name: "Lịch sử mua hàng",
        icon: <HistoryIcon />,
        link: "/search",
    },
];

const ContentServiceList: React.FC = () => {
    return (
        <div className="mt-[10px]">
            <div className="flex flex-col justify-between items-start h-full">
                {buttonitem.map((e) => (
                    <ContentServiceItem key={e.id} data={e} />
                ))}
            </div>
        </div>
    );
};

export default ContentServiceList;
