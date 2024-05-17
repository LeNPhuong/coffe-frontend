import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const Product_Type_Items: React.FC<{
  data: {
    _id: string;
    name: string;
    img: string;
    status: boolean;
    type: string;
    slug: string;
  };
  typeprd: string;
  setTypePrd: React.Dispatch<string>;
}> = ({ data, typeprd, setTypePrd }) => {
  return (
    <button onClick={() => setTypePrd(data.type)}>
      <Box
        sx={{
          "@media (min-width:1px)": {
            padding: "10px",
          },
          "@media (min-width:768px)": {
            padding: "2px",
          },
          "@media (min-width:992px)": {
            padding: "10px",
          },
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          sx={{
            "@media (min-width:1px)": {
              width: "60px",
              height: "60px",
            },
            "@media (min-width:992px)": {
              width: "80px",
              height: "80px",
            },
          }}
          bgcolor={`${data.type === typeprd ? "#ffe7ba" : "#fff7e6"}`}
          marginBottom="10px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBlockEnd="20px"
        >
          <Avatar
            src={data.img}
            sx={{
              justifySelf: "flex-start",
              "@media (min-width:1px)": {
                height: data.type === typeprd ? "42px" : "40px",
                width: data.type === typeprd ? "42px" : "40px",
              },
              "@media (min-width:992px)": {
                height: data.type === typeprd ? "56px" : "52px",
                width: data.type === typeprd ? "56px" : "52px",
              },
              margin: 0,
            }}
            alt={data.name}
          />
        </Box>
        <Typography
          sx={{
            "@media (min-width:1px)": {
              width: "65px",
              fontSize: "11px",
            },
            "@media (min-width:992px)": {
              width: "85px",
              fontSize: "13px",
            },
          }}
          fontWeight="500"
          height="50px"
          color={`${data.type === typeprd ? "#fa8c16" : "#b2b2b2"}`}
        >
          {data.name}
        </Typography>
      </Box>
    </button>
  );
};

export default Product_Type_Items;
