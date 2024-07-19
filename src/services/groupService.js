import { getHeaders } from "./headers";
import api from "./api";

const getAllGroups = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/group",
        {
            headers: headers
        }
    );

    return response;
}

export { getAllGroups };