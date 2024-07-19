import api from "./api";

const createCourse = async(body) => {
    const response = api.post(
        "/course",
        body
    );

    return response;
}

const getAllCourses = async() => {
    const response = api.get(
        "/course"
    );

    return response;
}

export {
    createCourse,
    getAllCourses
};