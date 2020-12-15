import { strapi } from "../../axios";
const token = JSON.parse(localStorage.getItem('user')) ? `access_token=${JSON.parse(localStorage.getItem('user')).id}` : ''

export const getUsers = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `users?${token}&filter=${filter}` : `users?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getUser = async (key, { id }) => {
    const data = await strapi.request('get', `users/${id}?${token}`)
    return data
};

export const updateUser = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `users/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addUser = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `users?${token}`,
        { data: { ...body } }
    )
    return data
};
