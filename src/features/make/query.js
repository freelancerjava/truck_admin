import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getMakes = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `makes?${token}&filter=${filter}` : `makes?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getMake = async (key, { id }) => {
    const data = await strapi.request('get', `makes/${id}?${token}`)
    return data
};

export const updateMake = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `makes/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addMake = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `makes?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, {where}={where:{}}) => {
    const path = where ? `makes/count?${token}&where=${where}` : `makes/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `makes/count?${token}`)
    return data
};

export const delMake = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `makes/${id}?${token}`
    )
    return data
};