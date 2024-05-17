import { Box, Radio, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import changecurrency from "../../utils/changeCurrency";

const Detail_Core_Size_Items: React.FC<{
  data: { _id: string; name: string; price: number };
  size: { _id: string; name: string; price: number } | null;
  setSize: React.Dispatch<
    SetStateAction<{ _id: string; name: string; price: number } | null>
  >;
}> = ({ data, size, setSize }) => {
  return (
    <Box
      key={data._id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <Radio
        value={JSON.stringify(data)}
        checked={JSON.stringify(data) === JSON.stringify(size)}
        name="radio-buttons"
        onChange={(e) => setSize(JSON.parse(e.target.value))}
        sx={{
          padding: 0,
          "& .MuiSvgIcon-root": {
            fontSize: 28,
          },
          "&.Mui-checked": {
            color: "#fa8c16",
          },
        }}
        size="medium"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
          }}
        >
          {data.name}
        </Typography>
        <Typography>+ {changecurrency(data.price)}</Typography>
      </Box>
    </Box>
  );
};

export default Detail_Core_Size_Items;
