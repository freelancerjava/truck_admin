import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getMessages = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `messages?${token}&filter=${filter}` : `messages?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getMessage = async (key, { id }) => {
    const data = await strapi.request('get', `messages/${id}?${token}`)
    return data
};

export const updateMessage = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `messages/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addMessage = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `messages?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, {where}={where:{}}) => {
    const path = where ? `messages/count?${token}&where=${where}` : `messages/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `users/count?${token}`)
    return data
};

export const delMessage = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `messages/${id}?${token}`
    )
    return data
};