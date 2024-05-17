import { Button } from "@mui/material";
import React from "react";
import { statusAccount } from "../../../../services/user";

const Btn: React.FC<{ type: string; id: string }> = ({ type, id }) => {
    async function status(id: string, action: boolean) {
        const authen = confirm(`Bạn có muốn ${action ? "Kích hoạt" : "Vô hiệu"} tài khoản không`);

        if (authen) {
            const data = await statusAccount(id, action);
            alert(data.message);
            window.location.reload();
        }
    }
    return (
        <Button
            onClick={() => status(id, type === "active" ? false : true)}
            sx={{
                background: type === "active" ? "#ef4444" : "#3b82f6",
                color: "#fff",
                ":hover": {
                    background: type === "active" ? "#b91c1c" : "#1d4ed8",
                },
            }}
        >
            {type === "active" ? "Vô hiệu" : "Kích hoạt"}
        </Button>
    );
};

export default Btn;
