import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:3333/',
// });
const api = axios.create({
    baseURL: 'https://bulb-finder-api.vercel.app/',
});

export default api;
