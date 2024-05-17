import { CardHeader, Fab, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../redux/store";
import { getDetails } from "../../redux/sliceProduct";

const Details_Core_Header: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <CardHeader
      sx={{
        borderBottom: "solid",
        borderBottomColor: "#ccc",
        borderBottomWidth: "1px",
        width: "100%",
        marginBottom: "5px",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      title={
        <Typography fontSize="14px" fontWeight="500" variant="caption" textAlign="center">
          Thêm món mới
        </Typography>
      }
      action={
        <Fab
          onClick={() => dispatch(getDetails(null))}
          sx={{
            boxShadow: "none",
            background: "none",
            position: "absolute",
            top: "50%",
            left: "5px",
            transform: "translateY(-50%)",

            ":active": {
              background: "orange",
              boxShadow: "none",
              color: "#fff",
            },

            height: "40px",
            width: "40px",
          }}
        >
          <CloseIcon fontSize="small" />
        </Fab>
      }
    />
  );
};

export default Details_Core_Header;
