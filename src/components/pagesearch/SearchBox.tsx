import React, { SetStateAction } from "react";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";

const SearchBox: React.FC<{
  rawkey: string;
  setRawkey: React.Dispatch<SetStateAction<string>>;
  setMainkey: React.Dispatch<SetStateAction<string | null>>;
}> = ({ setRawkey, setMainkey, rawkey }) => {
  function getKey() {
    if (rawkey.length === 0) {
      return toast.error("Vui lòng nhập mã đơn hàng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (rawkey.length < 12) {
      return toast.error("Mã đơn hàng phải có đủ 12 ký tự", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (rawkey.length > 12) {
      return toast.error("Mã đơn hàng không thể lớn hơn 12 ký tự", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(rawkey)) {
      return toast.error("Mã đơn hàng phải chứa chữ số và ký tự đặc biệt", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setMainkey(rawkey);
    }
  }

  return (
    <div className="mb-[20px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-[20px] mb-[10px]">
          <span className="text-orange-500">
            <HistoryIcon sx={{ width: "40px", height: "40px" }} />
          </span>
          <span className="text-[26px] font-[500]">Tra cứu đơn hàng</span>
        </div>
        <div className="flex flex-row items-center border-[1px] border-[#ccc] mt-[10px] rounded-[8px] overflow-hidden">
          <input
            type="text"
            className="lg:w-[400px] sm:w-[200px] p-[10px] outline-none"
            value={rawkey}
            onChange={(e) => setRawkey(e.target.value)}
            placeholder="Tra cứu đơn hàng của bạn bằng mã đơn hàng"
          />
          <button onClick={getKey} className="p-[10px] bg-[#f5f5f5]">
            <SearchIcon sx={{ color: "#808080" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
