import Strapi from 'strapi-sdk-javascript';
import Axios from 'axios';

export const apiUrl = 'https://api.ordertruck.uz/api/'

export const serverPort = 443

export const user = JSON.parse(localStorage.getItem('user'))


export const strapi = new Strapi(`${apiUrl}`);

// const strapi2 = new Strapi(`${apiUrl}`);
// export const strapi = Axios.create({ baseURL: apiUrl });

export const setToken = (token) => {
    strapi.axios.defaults.headers['Authorization'] = token    
    // strapi2.axios.defaults.headers['Authorization'] = token    
}


export const myAxios = Axios.create({ baseURL: apiUrl });
// export default strapi2