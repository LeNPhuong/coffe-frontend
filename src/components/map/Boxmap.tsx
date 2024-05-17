import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../redux/store";
import { getMap } from "../../redux/sliceProduct";
import BoxSearch from "./BoxSearch";
import { btnmap } from "../../redux/modelSlice";
import searchMap from "../../services/getmap";

const Boxmap: React.FC = () => {
  const [map, setMap] = useState<string>(
    JSON.parse(localStorage.getItem("mapdata")!) || "",
  );
  const [dataSearch, setDataSearch] = useState<string | null>(null);
  const [datamap, setDatamap] = useState<
    { description: string; main_text: string; secondary_text: string }[] | null
  >(null);

  useEffect(() => {
    const id = setTimeout(async () => {
      const data = await searchMap(dataSearch || null);
      if (!data) {
        return setDatamap(null);
      }
      setDatamap(data.data.data);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [map, dataSearch]);

  const dispatch = useAppDispatch();

  return (
    <Box
      onClick={() => dispatch(btnmap(false))}
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "#00000072",
        zIndex: 9999,
        padding: "0 10px",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-[800px] mx-auto relative rounded-[8px] bg-[#fff] mt-[200px] shadow-[0_0_10px_#2f2d2d66]"
      >
        <div className="absolute top-0 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-full bg-[#fff] border-[1px] border-dashed border-orange-500 px-[15px] py-[10px]">
          <div className="bg-orange-500 flex flex-row rounded-full items-center p-[8px] gap-[12px]">
            <img className="h-[40px]" src="/imgicon/iconshiper.png" alt="" />
            <span className="text-[14px] font-[600] text-[#fff]">Giao hàng</span>
          </div>
        </div>
        <div className="pt-[60px] pb-[20px] px-[20px] relative">
          <input
            type="text"
            className="w-full shadow-xl outline-none px-[10px] py-[5px] text-[14px]"
            placeholder="Vui lòng nhập địa chỉ"
            value={map}
            onChange={(e) => {
              setMap(e.target.value);
              setDataSearch(e.target.value);
            }}
          />
          {map.length === 0 ? (
            ""
          ) : (
            <button
              onClick={() => setMap("")}
              className="absolute right-[30px] top-[62px] w-[25px] h-[25px] bg-[#ccc] rounded-full flex justify-center items-center"
            >
              <CloseIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  color: "#fff",
                }}
              />
            </button>
          )}
          {dataSearch && (
            <BoxSearch
              datamap={datamap!}
              setMap={setMap}
              setDataSearch={setDataSearch}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => {
                dispatch(getMap(map));
                dispatch(btnmap(false));
              }}
              className="bg-orange-500 text-[14px] font-[500] rounded-[8px] text-[#fff] py-[10px] px-[35px]"
            >
              Chọn địa chỉ này
            </button>
            <button
              onClick={() => setMap("")}
              className="bg-[#fff] text-[14px] font-[500] rounded-[8px] border-[1px] border-[#999] text-[#000] py-[10px] px-[35px]"
            >
              Nhập địa chỉ mới
            </button>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Boxmap;
