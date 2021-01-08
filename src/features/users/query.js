import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

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


export const getCount = async (key, {where}={where:{}}) => {
    const path = where ? `users/count?${token}&where=${where}` : `users/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `users/count?${token}`)
    return data
};

export const delUser = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `users/${id}?${token}`
    )
    return data
};