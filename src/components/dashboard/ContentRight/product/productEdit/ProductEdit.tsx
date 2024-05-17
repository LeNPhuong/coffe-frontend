import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getproductid, updateproduct } from "../../../../../services/product";
import Loading from "../../../../loading/Loading";

const ProductEdit = () => {
  const params: string | undefined = useParams().id;
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [des, setDes] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["product", params],
    queryFn: async () => {
      const data = await getproductid(params!);
      return data;
    },
  });

  const mutate = useMutation({
    mutationFn: async (id: string | undefined) => {
      if (name === "" && price === "" && des === "") {
        return alert("Không có gì để cập nhật");
      }

      const result = confirm("Bạn có chắc chắn muốn cập nhật");
      if (result) {
        const getlink = await updateproduct({ name: name, price: price, des: des }, id);
        return getlink;
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-[20px] items-start">
          <div className="max-w-[370px] min-w-[370px] shadow-[0_0_16px_#00000058] rounded-[8px] overflow-hidden">
            <img src={data.product.img} alt="" />
          </div>

          <div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Tên</label>
              <input
                className="outline-none border-[2px] border-stone-300 p-[5px] rounded-[8px]"
                type="text"
                value={name.length === 0 ? data.product.name : name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="">Giá</label>
              <input
                className="outline-none border-[2px] border-stone-300 p-[5px] rounded-[8px]"
                type="text"
                value={price.length === 0 ? data.product.price : price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="">Miêu tả</label>
              <textarea
                className="outline-none border-[2px] border-[#ccc] rounded-[8px] p-[2px] w-full"
                rows="5"
                cols="100"
                value={des.length === 0 ? data.product.des : des}
                onChange={(e) => setDes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={() => mutate.mutate(params)}
          className="bg-[#f97316] mt-[20px] p-[10px] font-[500] text-[18px] text-[#fff] rounded-[8px] shadow-[0_0_16px_#0000002c]"
        >
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export default ProductEdit;
