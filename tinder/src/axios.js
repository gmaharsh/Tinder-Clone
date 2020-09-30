import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:2701/",
});

export default instance;