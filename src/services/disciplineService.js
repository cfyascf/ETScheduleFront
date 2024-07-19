import api from "./api";

const createDiscipline = async(body) => {
    const response = api.post(
        "/discipline",
        body
    );

    return response;
};

export { createDiscipline };