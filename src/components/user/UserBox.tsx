import { Typography } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import React from "react";
import UserContent from "./UserContent";

const UserBox: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-[50px] h-full w-full overflow-y-auto p-[10px]">
            <Typography
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <span>
                    <AssignmentIndIcon
                        sx={{ width: "40px", height: "40px", color: "#fb923c" }}
                    />
                </span>
                <span className="text-[25px] font-[500]">Tài khoản của bạn</span>
            </Typography>
            <UserContent />
        </div>
    );
};

export default UserBox;
