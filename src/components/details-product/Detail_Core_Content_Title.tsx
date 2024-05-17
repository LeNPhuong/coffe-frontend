import { Typography } from "@mui/material";
import { FC } from "react";

const Detail_Core_Content_Title: FC<{ name: string; des: string }> = ({ name, des }) => {
  return (
    <>
      <Typography
        variant="caption"
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#666",
          fontSize: "14px",
        }}
        variant="subtitle1"
      >
        {des}
      </Typography>
    </>
  );
};

export default Detail_Core_Content_Title;
