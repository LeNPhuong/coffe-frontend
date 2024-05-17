import { Box, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { SetStateAction } from "react";
import changecurrency from "../../utils/changeCurrency";

const Detail_Core_Price: React.FC<{
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  price: number;
}> = ({ price, quantity, setQuantity }) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography color="#fa8c16">{changecurrency(price)}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Fab
          onClick={() => setQuantity((pre) => (pre <= 1 ? (pre = 1) : pre - 1))}
          sx={{
            color: "#fff",
            background: quantity <= 1 ? "#e0e0e0" : "#fa8c16",
            ":hover": {
              background: quantity <= 1 ? "#e0e0e0" : "#fa8c16",
            },
          }}
          size="small"
        >
          <RemoveIcon />
        </Fab>
        <Typography
          sx={{
            color: "#fa8c16 !important",
          }}
          fontSize="18px !important"
          variant="subtitle1"
        >
          {quantity}
        </Typography>
        <Fab
          onClick={() => setQuantity((e) => (e += 1))}
          sx={{
            color: "#fff",
            background: "#fa8c16",
            ":hover": {
              background: "#fa8c16",
            },
          }}
          size="small"
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default Detail_Core_Price;
