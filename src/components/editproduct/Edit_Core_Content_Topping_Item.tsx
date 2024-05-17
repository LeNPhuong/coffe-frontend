import { Box, Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import changecurrency from "../../utils/changeCurrency";

const Edit_Core_Content_Topping_Item: React.FC<{
  data: { _id: string; name: string; price: number };
  topping: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
  } | null;
  setTopping: React.Dispatch<
    SetStateAction<{
      _id: string;
      name: string;
      price: number;
      quantity: number;
    } | null>
  >;
}> = ({ data, topping, setTopping }) => {
  function addTopping(data: { _id: string; name: string; price: number }) {
    if (!topping) {
      setTopping({ ...data, quantity: 1 });
    } else {
      if (topping._id === data._id) {
        setTopping({ ...topping, quantity: topping.quantity + 1 });
      } else {
        setTopping({ ...data, quantity: 1 });
      }
    }
  }

  function minusTopping(data: { _id: string; name: string; price: number }) {
    setTopping((e) =>
      e?._id === data._id && e.quantity > 1 ? { ...e, quantity: e.quantity - 1 } : null,
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "4px 0px",
        padding: "10px 0",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>{data.name}</Typography>
        <Typography sx={{ fontWeight: "500", fontSize: "15px" }}>
          + {changecurrency(data.price)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {topping && topping._id === data._id ? (
          <Box
            onClick={() => minusTopping(data)}
            sx={{
              borderRadius: "50%",
              border: "2px solid #e4e4e4",
              height: "25px",
              width: "25px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <RemoveIcon
              sx={{
                width: "20px !important",
                height: "20px !important",
                color: "#e4e4e4",
              }}
            />
          </Box>
        ) : (
          ``
        )}

        <Typography
          sx={{
            color: "#000 !important",
            lineHeight: "30px",
          }}
          fontSize="18px !important"
          variant="subtitle1"
        >
          {topping ? (topping._id === data._id ? topping.quantity : 0) : 0}
        </Typography>

        <Box
          onClick={() => addTopping(data)}
          sx={{
            borderRadius: "50%",
            border: "2px solid #e4e4e4",
            height: "25px",
            width: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AddIcon
            sx={{
              width: "20px !important",
              height: "20px !important",
              color: "#e4e4e4",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Edit_Core_Content_Topping_Item;
