import axios from "axios";
import { dataorder } from "../type/databill";

export async function getdata() {
  const getLink = await axios.get("http://localhost:3001/app/api/coffe");
  return getLink;
}

export async function getbill(code: string) {
  if (!code) {
    return;
  }
  const getLink = await axios.post(`http://localhost:3001/app/api/bill/search/${code}`);
  const result: dataorder = getLink.data.data;
  return result;
}

export async function getonecoffe(id: string) {
  const getLink = axios.get(`http://localhost:3001/app/api/coffe/search/${id}`);
  return getLink;
}

export async function getdeletebill(code: string) {
  try {
    const getLink = await axios.delete(
      `http://localhost:3001/app/api/bill/delete/${code}`,
      {
        withCredentials: true,
      },
    );
    const result = getLink;
    return result.data.message;
  } catch (error) {
    return error.response.data.messgae;
  }
}
