import { Pagination, Stack } from "@mui/material";
import { Dispatch } from "@reduxjs/toolkit";
import React, { SetStateAction } from "react";

const Paginate: React.FC<{
  length: number;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}> = ({ length, page, setPage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={1}>
      <Pagination
        count={Math.ceil(length / 5)}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Paginate;
