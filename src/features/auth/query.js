import { strapi } from "../../axios";


export const loginAction = async (dataObj) => {
    const data = await strapi.login(dataObj.email, dataObj.password);

    // const time = new Date(data.created).getTime() + data.ttl * 1000;
    // localStorage.setItem('token', data.id);
    // localStorage.setItem('expiresOn', time)
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
}