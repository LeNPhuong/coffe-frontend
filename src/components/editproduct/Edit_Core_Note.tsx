import React, { SetStateAction } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Edit_Core_Note: React.FC<{
  note: string;
  setNote: React.Dispatch<SetStateAction<string>>;
}> = ({ note, setNote }) => {
  return (
    <div className="p-[16px]">
      <div className="flex items-center rounded-[4px] overflow-hidden border-[1px] border-[#ededee]">
        <div className="text-[18px] p-[2px] text-[#ccc] bg-[#f5f5f5]">
          <EditNoteIcon
            sx={{
              width: "35px !important",
              height: "35px !important",
            }}
          />
        </div>
        <input
          type="text"
          className="text-[14px] border-none outline-none px-[5px] w-full"
          placeholder="Ghi chú thêm cho món này"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Edit_Core_Note;
