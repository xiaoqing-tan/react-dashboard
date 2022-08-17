import axios from 'axios';

const request = axios.create({
  baseURL: 'https://reqres.in/api',
});

const login = async (param: any) => {
  try {
    const { data } =  await request.post('/login', {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

const getList = async ({ url, params } : { url: string, params: any }) => {
  try {
    const { data } = await request.get(url, { params });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

const createItem = async ({ url, params } : { url: string, params: any }) => {
  try {
    const { data } = await request.post(url, { params });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}


export const services = {
  login,
  getList,
  createItem
}