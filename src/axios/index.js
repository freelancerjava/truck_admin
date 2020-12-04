import Strapi from 'strapi-sdk-javascript';
import Axios from 'axios';

export const apiUrl = 'https://api.ordertruck.uz/api/'

export const serverPort = 4444

export const strapi = new Strapi(`${apiUrl}:${serverPort}`);


export const myAxios = Axios.create({ baseURL: apiUrl });