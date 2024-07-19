import { getHeaders } from "./headers";
import api from "./api";

const createCourse = async(body) => {
    const headers = getHeaders();
    const response = await api.post(
        "/course",
        {
            headers: headers,
            body: body
        }
    );

    return response;
}

const getAllCourses = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/course",
        {
            headers: headers
        }
    );

    return response;
}

export {
    createCourse,
    getAllCourses
};