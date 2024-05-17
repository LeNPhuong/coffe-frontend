import { Box, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useAppDispatch } from "../../redux/store";
import { switchEdit } from "../../redux/editSlice";
import { deleteItems } from "../../redux/sliceProduct";
import changecurrency from "../../utils/changeCurrency";
import { databill } from "../../type/databill";

const PayPRD_Item: React.FC<{
  data: databill;
}> = ({ data }) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "10px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ gap: "10px" }}
      >
        <button
          onClick={() => {
            dispatch(switchEdit(data));
          }}
        >
          <EditIcon
            sx={{
              width: "20px",
              height: "20px",
              color: "#fa8c16",
            }}
          />
        </button>
        <Stack direction="column">
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            {data.quantity} x {data.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              marginTop: "5px",
            }}
          >
            {data.size?.name}
          </Typography>
          {data.topping && (
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              {data.topping.quantity} x {data.topping.name}
            </Typography>
          )}
          <button
            onClick={() => dispatch(deleteItems(data.keys))}
            className="text-left mt-[5px] text-[15px] font-[400]"
          >
            Xoá
          </button>
        </Stack>
      </Stack>
      <Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
        {changecurrency(
          (data.price +
            (data.topping ? data.topping?.price * data.topping?.quantity : 0) +
            (data.size?.price ? data.size?.price : 0)) *
            data.quantity,
        )}
      </Typography>
    </Box>
  );
};

export default PayPRD_Item;
