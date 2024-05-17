import axios from "axios";

export async function getproduct(page: number) {
  try {
    const option = {
      method: "GET",
      url: `http://localhost:3001/app/api/coffe/product?page=${page}`,
    };
    const request = await axios.request(option);
    const result = request.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
}

export async function getproductid(id: string) {
  try {
    const option = {
      method: "GET",
      url: `http://localhost:3001/app/api/coffe/prd/${id}`,
    };
    const request = await axios.request(option);
    const result = request.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
}

export async function updateproduct(data: { name: string; price: string; des: string }, id: string) {
  try {
    const option = {
      method: "PATCH",
      url: `http://localhost:3001/app/api/coffe/update/${id}`,
      data: { update: data },
    };
    const request = await axios.request(option);
    const result = request.data;
    alert("Cập nhật thành công");
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
}

export async function statusproduct(action: string, id: string) {
  try {
    const options = {
      method: "PATCH",
      url: `http://localhost:3001/app/api/coffe/status/${id}?action=${action}`,
    };
    const request = await axios.request(options);
    const result = request.data;
    return result;
  } catch (error) {
    return error;
  }
}

// export async function createProduct()
