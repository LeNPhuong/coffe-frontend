import { Box, Typography } from "@mui/material";
import React from "react";
import SearchCore from "./SearchCore";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import { getbill } from "../../services/coffe";

const SearchMain: React.FC<{
  mainkey: string | null;
}> = ({ mainkey }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["ordersearch", mainkey],
    queryFn: async () => {
      const data = getbill(mainkey || "");
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="h-[50vh] flex flex-col gap-[10px] justify-center items-center">
        <div>
          <img
            className="h-[100px]"
            src="https://cdn-icons-png.freepik.com/512/6582/6582456.png"
            alt=""
          />
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Đơn hàng không tồn tại
        </Typography>
      </div>
    );
  }

  return (
    <Box
      sx={{
        marginY: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SearchCore data={data!} />
    </Box>
  );
};

export default SearchMain;
