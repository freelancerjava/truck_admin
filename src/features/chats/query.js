import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getUsers = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `chats/getusers?${token}&filter=${filter}` : `chats/getusers?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getMessages = async (key, { page, secondUserId, filter } = { filter: { order: 'id asc' } }) => {
    const path = filter != false ? `chats/getmessages/${secondUserId}/${1}?${token}&filter=${filter}` : `chats/getmessages/${secondUserId}/${1}?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getMessage = async (key, { id }) => {
    const data = await strapi.request('get', `messages/${id}?${token}`)
    return data
};

export const sendMessage = async ({ toUserId, message }) => {
    const data = await strapi.request('post', `/chats/sendmessage?${token}&toUserId=${toUserId}`, {
        data: { ...message }
    })
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


export const getCount = async (key, { where } = { where: {} }) => {
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