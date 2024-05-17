import axios from "axios";
import { databill } from "../../type/databill";

interface typeuser {
  name: string | null;
  phone: string | null;
  guid: string | null;
}

interface typemethodpay {
  id: number;
  name: string;
  img: string;
  keys: string;
}

async function addtocart(
  user: typeuser,
  methodpay: typemethodpay | null,
  product: databill[] | null,
  map: string,
): Promise<{ token: string }> {
  let statuspay: string = "";
  if (
    methodpay?.keys === "mo-mo" ||
    methodpay?.keys === "zalo-pay" ||
    methodpay?.keys === "shopee-pay" ||
    methodpay?.keys === "the-ngan-hang"
  ) {
    statuspay = "Chưa thanh toán";
  } else {
    statuspay = "lấy tiền mặt";
  }
  const data = {
    user,
    methodpay: { method: methodpay?.name, keys: methodpay?.keys },
    product,
    statuspay: statuspay,
    map,
  };
  const getLink = await axios.post("http://localhost:3001/app/api/bill", data, {
    withCredentials: true,
  });
  const result = getLink.data;
  return result;
}

export default addtocart;
// "mo-mo"
//     "zalo-pay"
//     "shopee-pay"
//     "the-ngan-hang"
