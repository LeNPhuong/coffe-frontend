import axios from "axios";

async function searchMap(query: string | null): Promise<any> {
    const options = {
        method: "GET",
        url: "https://local-business-data.p.rapidapi.com/autocomplete",
        params: {
            query: query,
            region: "vi",
            language: "vn",
        },
        headers: {
            "X-RapidAPI-Key":
                "f193554cadmshbf1d85b9486dcb6p1b4735jsn74a2418ec613",
            "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
        },
    };
    if (!query) {
        return null;
    }
    const response = await axios.request(options);
    return response;
}
export default searchMap;
