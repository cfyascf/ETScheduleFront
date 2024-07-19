import api from "./api";

const createCourse = async(body) => {
    const response = api.post(
        "/api/v1/course",
        body
    );

    return response;
}

export { createCourse };