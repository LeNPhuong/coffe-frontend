interface type {
  id: number;
  name: string;
  img: string;
  keys: string;
}

const paymethod: type[] = [
  {
    id: 1,
    name: "Tiền mặt",
    img: "/methodpay/tienmat.png",
    keys: "tien-mat",
  },
  {
    id: 2,
    name: "Momo",
    img: "/methodpay/momo.png",
    keys: "mo-mo",
  },
  {
    id: 3,
    name: "Zalo Pay",
    img: "/methodpay/zalopay.png",
    keys: "zalo-pay",
  },
  {
    id: 4,
    name: "Shopee Pay",
    img: "/methodpay/shoppe.png",
    keys: "shopee-pay",
  },
  {
    id: 5,
    name: "Thẻ ngân hàng",
    img: "/methodpay/atm.png",
    keys: "the-ngan-hang",
  },
];

export default paymethod;
