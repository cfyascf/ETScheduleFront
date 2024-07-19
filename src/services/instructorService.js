import { getHeaders } from "./headers";
import api from "./api";

const getAllInstructors = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/instructor",
        {
            headers: headers
        }
    );

    console.log(response);

    return response;
}

export { getAllInstructors };