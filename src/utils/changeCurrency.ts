function changecurrency(money: number) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
    .format(money)
    .replace("₫", "đ");
}

export default changecurrency;
