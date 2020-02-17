import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://localhost:9000',
});

export const registerApi = (payload) => {
  instance.post('/register', payload);
};

export const createKidsApi = (payload) => {
  instance.post('/kid/kid', payload);
}

export const kidDetailApi = (payload) => {
  instance.post('/kid/kid-detail', payload);
}