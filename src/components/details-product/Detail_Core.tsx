import React, { useState } from "react";
import { Card } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Details_Core_Header from "./Details_Core_Header";
import Detail_Core_Image from "./Detail_Core_Image";
import Detail_Core_Content from "./Detail_Core_Content";
import Detail_Core_Note from "./Detail_Core_Note";
import Detail_Core_Size from "./Detail_Core_Size";
import Detail_Core_Content_Topping from "./Detail_Core_Content_Topping";
import { getCart } from "../../redux/sliceProduct";
import { toast } from "react-toastify";
import { btnmap } from "../../redux/modelSlice";
import changecurrency from "../../utils/changeCurrency";
import { product } from "../../type/databill";

const Detail_Core: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState<string>("");
  const [size, setSize] = useState<{
    _id: string;
    name: string;
    price: number;
  } | null>(null);
  const [topping, setTopping] = useState<{
    _id: string;
    name: string;
    price: number;
    quantity: number;
  } | null>(null);

  const data: product = useAppSelector((e) => e.product.details!);
  const dispatch = useAppDispatch();
  const mapdata = useAppSelector((e) => e.product.map);

  function addCart() {
    if (mapdata.length === 0) {
      return dispatch(btnmap(true));
    } else if (!size) {
      return toast.error("Vui lòng chọn size", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(
        getCart({
          _id: data._id,
          name: data.name,
          price: data.price,
          img: data.img,
          size,
          topping,
          note,
          quantity,
          keys: Math.random(),
        }),
      );
      return toast.success("Thêm thành công vào giỏ hàng", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute left-1/2 translate-x-[-50%] top-[20px] bg-[#fff] rounded-lg h-[80vh] overflow-hidden"
    >
      <Card
        sx={{
          "@media (min-width:1px)": {
            width: "400px",
          },
          height: "80vh",
          padding: "10px 0px",
          overflowY: "auto",
        }}
      >
        <Details_Core_Header />
        <Detail_Core_Image image={data.img} />
        <Detail_Core_Content quantity={quantity} setQuantity={setQuantity} data={data} />
        <Detail_Core_Note note={note} setNote={setNote} />
        <Detail_Core_Size size={size} setSize={setSize} data={data.size} />
        <Detail_Core_Content_Topping
          topping={topping}
          setTopping={setTopping}
          data={data.topping}
        />
        <div className="p-[10px] w-[100%]">
          <button
            onClick={addCart}
            className="bg-[#f78812] w-[100%] mx-auto p-[12px] rounded-full text-[13px] text-stone-100"
          >
            {changecurrency(
              (data.price +
                (topping ? topping.price * topping.quantity : 0) +
                (size ? size.price : 0)) *
                quantity,
            )}{" "}
            - Thêm vào giỏ hàng
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Detail_Core;
