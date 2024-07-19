import { getHeaders } from "./headers";
import api from "./api";

const createDiscipline = async(body) => {
    const headers = getHeaders();
    const response = await api.post(
        "/discipline",
        {
            headers: headers,
            body: body
        }
    );

    return response;
};

export { createDiscipline };