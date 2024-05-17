import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { removeCart } from "../../redux/sliceProduct";
import { btnauth } from "../../redux/modelSlice";
import { gettoken } from "../../redux/dataSlice";
import addtocart from "../../services/addcartmethod";

const ContentMain: React.FC = () => {
  const product = useAppSelector((e) => e.product.cart);
  const user = useAppSelector((e) => e.pay.user);
  const methodpay = useAppSelector((e) => e.product.medthodPay);
  const map = useAppSelector((e) => e.product.map);
  const dispatch = useAppDispatch();
  async function add(): Promise<void> {
    const token: { token: string } = await addtocart(user, methodpay, product, map);
    dispatch(btnauth(false));
    dispatch(gettoken(token.token));
    dispatch(removeCart(null));
  }
  return (
    <div>
      <button
        onClick={add}
        className="w-full p-[8px] bg-orange-500 rounded-[20px] text-[16px] text-[#fff] font-[500] mt-[30px]"
      >
        Xác nhận
      </button>
    </div>
  );
};

export default ContentMain;
