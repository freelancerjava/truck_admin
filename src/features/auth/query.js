import { strapi } from "../../axios";


export const loginAction = async (dataObj) => {
    const data = await strapi.request('post', 'auths/login/ra', { data: { ...dataObj } });

    // const time = new Date(data.created).getTime() + data.ttl * 1000;
    // localStorage.setItem('token', data.id);
    // localStorage.setItem('expiresOn', time)
    localStorage.setItem('user', JSON.stringify(data));
    console.log(data);

    return data;
}