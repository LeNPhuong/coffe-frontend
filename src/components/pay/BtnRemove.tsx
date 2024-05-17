import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../redux/store";
import { removeCart } from "../../redux/sliceProduct";

const BtnRemove: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            }}
        >
            <Button
                onClick={() => dispatch(removeCart(null))}
                variant="contained"
                color="warning"
            >
                Xoá đơn hàng
            </Button>
        </Box>
    );
};

export default BtnRemove;
