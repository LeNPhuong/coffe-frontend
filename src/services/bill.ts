import axios from "axios";

export async function getAllBill() {
    try {
        const options = {
            method: "GET",
            url: "http://localhost:3001/app/api/bill/all",
        };
        const getLink = await axios.request(options);
        const result = getLink.data;
        return result;
    } catch (error) {
        return error.response;
    }
}

export async function getSelectBill(id: string) {
    try {
        const getLink = await axios.get(`${id}`);
        const result = getLink.data;
        return result;
    } catch (error) {
        return error.response;
    }
}

export async function updateBill(connect: string, code: string, status: string) {
    try {
        const url: string =
            "http://localhost:3001/app/api/bill/update" +
            `${connect ? "?id=" + connect : ""}` +
            `${code ? (connect ? "&code=" + code : "?code=" + code) : ""}`;
        const getLink = await axios.patch(url, { status: status });
        return getLink.data;
    } catch (error) {
        return error.response;
    }
}
