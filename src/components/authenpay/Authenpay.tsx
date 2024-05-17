import { Box } from "@mui/material";
import React from "react";
import ContentPay from "./ContentPay";

const Authenpay: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000093] z-[9999]">
      <Box
        sx={{
          maxWidth: "400px",
          minWidth: "400px",
          marginX: "auto",
          marginTop: "100px",
          background: "#fff",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <ContentPay />
      </Box>
    </div>
  );
};

export default Authenpay;
