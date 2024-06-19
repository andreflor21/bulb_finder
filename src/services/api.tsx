import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
});
//  const api = axios.create({
//    baseURL: 'http://3.83.86.36:3333/',
//  });

export default api;
