import { Box } from "@mui/material";
import React from "react";
import PayIF from "./PayIF";
import PayPRD from "./PayPRD";

const PayBody: React.FC = () => {
    return (
        <Box
            sx={{
                "@media (min-width:1px)": {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "900px",
                    margin: "0 auto",
                    paddingTop: "15px",
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "#cccccc8c",
                },
                "@media (min-width:1000px)": {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    paddingTop: "15px",
                    border: "none",
                },
            }}
        >
            <PayIF />
            <PayPRD />
        </Box>
    );
};

export default PayBody;
