import api from "./api";

const getAllGroups = async() => {
    const response = api.get("/group");

    return response;
}

export { getAllGroups };