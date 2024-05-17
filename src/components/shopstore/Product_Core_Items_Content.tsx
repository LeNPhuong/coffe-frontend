import { Box, CardContent, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import changecurrency from "../../utils/changeCurrency";

const Product_Core_Items_Content: FC<{ name: string; price: number }> = ({
  name,
  price,
}) => {
  return (
    <CardContent
      sx={{
        "@media (min-width:1px)": {
          width: "100%",
          padding: "3px 10px !important",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        },
        "@media (min-width:1000px)": {
          width: "100%",
          minHeight: "120px",
          maxHeight: "120px",
          padding: "3px 10px !important",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          "@media (min-width:1px)": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 0,
          },
          "@media (min-width:1000px)": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignSelf: "flex-start",
            padding: 0,
          },
        }}
      >
        <Typography
          sx={{
            "@media (min-width:1px)": {
              fontSize: "13px",
              fontWeight: "500",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            "@media (min-width:1px)": {
              fontSize: "15px",
              fontWeight: "400",
              color: "#fa8c16",
            },
          }}
        >
          {changecurrency(price)}
        </Typography>
      </Box>
      <Box
        sx={{
          "@media (min-width:1000px)": {
            position: "absolute",
            bottom: 0,
            right: 0,
          },
        }}
      >
        <Fab
          sx={{
            color: "#fff",
            background: "#fa8c16",
            width: "35px !important",
            height: "35px !important",
            ":hover": {
              background: "#fa8c16",
            },
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </CardContent>
  );
};

export default Product_Core_Items_Content;
