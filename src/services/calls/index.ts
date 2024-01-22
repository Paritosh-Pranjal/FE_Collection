import api from "services/api"

export const fetchAllUsers = () => {
    return api.get('/users?page=1');
}