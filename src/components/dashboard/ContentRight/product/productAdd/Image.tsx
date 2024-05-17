import React, { useState } from "react";

const Image = () => {
  const [src, setSrc] = useState<string | null>("");

  return (
    <div className="flex flex-row items-start w-[50%]">
      <div className="flex flex-col">
        <label htmlFor="">Hình ảnh</label>
        <input
          type="file"
          name="imgprd"
          onChange={function (e) {
            const src = URL.createObjectURL(e.target.files[0]);
            setSrc(src);
          }}
        />
      </div>
      {src ? (
        <div className="w-full flex mt-[20px]">
          <div className="w-[200px] shadow-[0_2px_8px_rgba(0,0,0,.08)] overflow-hidden rounded-[8px]">
            <img src={src} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Image;
