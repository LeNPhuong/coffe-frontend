import React, { useState } from "react";
import { Card } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useQuery } from "@tanstack/react-query";
import { changeProduct } from "../../redux/sliceProduct";
import { toast } from "react-toastify";
import Edit_Core_Header from "./Edit_Core_Header";
import Edit_Core_Image from "./Edit_Core_Image";
import Edit_Core_Content from "./Edit_Core_Content";
import Edit_Core_Note from "./Edit_Core_Note";
import Edit_Core_Size from "./Edit_Core_Size";
import Edit_Core_Content_Topping from "./Edit_Core_Content_Topping";
import Loading from "../loading/Loading";
import { switchEdit } from "../../redux/editSlice";
import { getonecoffe } from "../../services/coffe";
import changecurrency from "../../utils/changeCurrency";
import ErrorQuery from "../error/ErrorQuery";

const Edit_Core: React.FC = () => {
  const core = useAppSelector((e) => e.edit.data);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(core?.quantity || 1);
  const [note, setNote] = useState<string>("");
  const [size, setSize] = useState<{
    _id: string;
    name: string;
    price: number;
  } | null>(core?.size || null);
  const [topping, setTopping] = useState<{
    _id: string;
    name: string;
    price: number;
    quantity: number;
  } | null>(core?.topping || null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["OneCoffe"],
    queryFn: async () => {
      const data = await getonecoffe(core?._id || "");
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorQuery />;
  }

  function changeEdit() {
    dispatch(
      changeProduct({
        keys: core?.keys || 1,
        quantity: quantity,
        size: size,
        topping: topping,
      }),
    );
    dispatch(switchEdit(null));
    return toast.success("Sửa đổi thành công", {
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
        <Edit_Core_Header />
        <Edit_Core_Image image={core?.img || ""} />
        <Edit_Core_Content
          quantity={quantity}
          setQuantity={setQuantity}
          data={data?.data?.coffe}
        />
        <Edit_Core_Note note={note} setNote={setNote} />
        <Edit_Core_Size size={size} setSize={setSize} data={data?.data?.coffe.size} />
        <Edit_Core_Content_Topping
          topping={topping}
          setTopping={setTopping}
          data={data?.data?.coffe.topping}
        />
        <div className="p-[10px] w-[100%]">
          <button
            onClick={changeEdit}
            className="bg-[#f78812] w-[100%] mx-auto p-[12px] rounded-full text-[13px] text-stone-100"
          >
            {changecurrency(
              (data?.data?.coffe.price +
                (topping ? topping.price * topping.quantity : 0) +
                (size ? size.price : 0)) *
                quantity,
            )}{" "}
            - Sửa đổi sản phẩm
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Edit_Core;
