import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getPushes = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `pushes?${token}&filter=${filter}` : `pushes?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getPush = async (key, { id }) => {
    const data = await strapi.request('get', `pushes/${id}?${token}`)
    return data
};

export const updatePush = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `pushes/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addPush = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `pushes?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, {where}={where:{}}) => {
    const path = where ? `pushes/count?${token}&where=${where}` : `pushes/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `users/count?${token}`)
    return data
};

export const delPush = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `pushes/${id}?${token}`
    )
    return data
};