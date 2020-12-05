import Strapi from 'strapi-sdk-javascript';
import Axios from 'axios';

export const apiUrl = 'https://api.ordertruck.uz/api/'

export const serverPort = 443

export const strapi = new Strapi(`${apiUrl}`);


export const myAxios = Axios.create({ baseURL: apiUrl });