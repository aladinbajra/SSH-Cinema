import axios from 'axios';

const baseURL = 'http://localhost:3000'; 
const userAccessToken = localStorage.getItem('filmsToken');

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${userAccessToken}`,
        'Content-Type': 'application/json',
    }
})

export default {
    films: {
        fetchAll: () => axiosInstance.get("/api/authfilms").then(response => response.data.films),
        fetchById: id => axiosInstance.get(`/api/authfilms/${id}`).then(response => response.data.film),
        create: film => axiosInstance.post("/api/authfilms", {film}).then(response => response.data.film),
        update: film => axiosInstance.put(`/api/authfilms/${film._id}`, {film}).then((response) => response.data.film),
        delete: film => axiosInstance.delete(`/api/authfilms/${film._id}`, {film}),
    },
    users: {
        create: user => axiosInstance.post("/api/users/", {user}),
        login: credentials => axiosInstance.post("/api/auth", {credentials}).then(response => response.data.token),
    }
}
