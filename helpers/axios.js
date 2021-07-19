import axios from 'axios';

const url = 'https://nodejs-firee.herokuapp.com' || 'http://localhost:8080'

export default axios.create({
    baseURL:
        url,
    withCredentials: true
});