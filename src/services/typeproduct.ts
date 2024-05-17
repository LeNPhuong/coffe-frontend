import axios from "axios";

export async function gettypeproduct() {
  const option = {
    method: "GET",
    url: `http://localhost:3001/app/api/kind`,
  };
  try {
    const request = await axios.request(option);
    const result = request.data;
    return result;
  } catch (error) {
    return error;
  }
}

export async function updateStatus(id: string, status: boolean) {
  const option = {
    method: "PATCH",
    url: `http://localhost:3001/app/api/kind/update/${id}`,
    data: { status: status },
  };
  try {
    const request = await axios.request(option);
    const result = request.data;
    return result;
  } catch (error) {
    return error;
  }
}
