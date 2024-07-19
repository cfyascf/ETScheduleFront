import api from "./api";

const getAllInstructors = async() => {
    const response = await api.get(
        "/instructor"
    );

    return response;
}

export { getAllInstructors };