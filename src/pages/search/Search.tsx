import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchBox from "../../components/pagesearch/SearchBox";
import SearchMain from "../../components/pagesearch/SearchMain";

const Search: React.FC = () => {
  const [rawkey, setRawkey] = useState<string>("");
  const [mainkey, setMainkey] = useState<string | null>(null);

  return (
    <Box
      sx={{
        marginTop: "50px",
        marginX: "auto",
        "@media (min-width:1000px)": {
          minWidth: "1000px",
          maxWidth: "1000px",
        },
      }}
    >
      <SearchBox rawkey={rawkey} setRawkey={setRawkey} setMainkey={setMainkey} />
      {mainkey ? <SearchMain mainkey={mainkey} /> : <div className="h-[50vh]"></div>}
    </Box>
  );
};

export default Search;
