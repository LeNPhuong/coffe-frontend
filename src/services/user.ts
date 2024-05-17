import axios from "axios";
import { userquery } from "../type/datauser";

export async function userregister(data: userquery) {
    try {
        const request = await axios.post("http://localhost:3001/app/api/user/create", data, {
            withCredentials: true,
        });
        const result = await request.data;

        return result;
    } catch (error: {}) {
        return error.response.data;
    }
}

export async function logoutuser() {
    const request = await axios.get("http://localhost:3001/app/api/user/logout", {
        withCredentials: true,
    });
    window.location.reload();
}

export async function autolog() {
    try {
        const request = await axios.get("http://localhost:3001/app/api/user/autologin", {
            withCredentials: true,
        });
        const result = request.data;
        return result;
    } catch (error) {
        return error.response.data;
    }
}

export async function loginuser(email: string, password: string) {
    try {
        const getlink = await axios.post(
            "http://localhost:3001/app/api/user/login",
            { email: email, password: password },
            { withCredentials: true },
        );
        return getlink.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function updateuser(data: { name: string | null; phone: string | null; email: string | null }) {
    try {
        if (Object.keys(data).length === 0) {
            return alert("Không có gì để thay đổi");
        }

        const getLink = await axios.patch(
            "http://localhost:3001/app/api/user/updateacount",
            { data: data },
            { withCredentials: true },
        );
        const result = getLink.data;
        return result;
    } catch (error) {
        return error;
    }
}

export async function getAccount() {
    try {
        const getLink = await axios.get("http://localhost:3001/app/api/user/account");
        const data = getLink.data;
        return data;
    } catch (error) {
        return error.response;
    }
}

export async function statusAccount(id: string, action: boolean) {
    try {
        const getLink = await axios.post(`http://localhost:3001/app/api/user/status/${id}`, {
            action: action,
        });
        return getLink.data;
    } catch (error) {
        return error.response;
    }
}
