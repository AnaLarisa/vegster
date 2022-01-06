import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWE0MDBmOTdmOTg3MjRjMDQ1MjA5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTcyNzk4NiwiZXhwIjoxNjM5OTg3MTg2fQ.Fz_ZtauKGAsFd00KRwIYOjCHqMWt2oz4DWQAV6Qv2Ag";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
