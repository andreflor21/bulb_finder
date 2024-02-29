import axios from 'axios';

// const api = axios.create({
//  baseURL: 'http://0.0.0.0:3333/',
//});
const api = axios.create({
    baseURL: 'https://bulb-finder.haizerusa.com:3333/',
});

export default api;
