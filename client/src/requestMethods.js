import axios from "axios";

const BASE_URL = "https://kopzstorebackend.onrender.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWQ0Njc4YjQxNWJiYjA2NDViMmM4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNzY0OTcyNCwiZXhwIjoxNzE3OTA4OTI0fQ.ws2Twiv8xJSKc8lonEShFrdHxdV7zXi2D4tdggFx_XU";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer + ${TOKEN}`}
})