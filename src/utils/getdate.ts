import moment from "moment";

function getDate() {
  const now = moment().day("Asia/Ho_Chi_Minh");
  const vietnamDateTime = now.add(60, "minutes").format("YYYY-MM-DD HH:mm:ss");
  return vietnamDateTime;
}

export default getDate;
