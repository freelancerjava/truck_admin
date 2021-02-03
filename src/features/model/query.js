import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getModels = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `models?${token}&filter=${filter}` : `models?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getModel = async (key, { id }) => {
    const data = await strapi.request('get', `models/${id}?${token}`)
    return data
};

export const updateModel = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `models/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addModel = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `models?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, {where}={where:{}}) => {
    const path = where ? `models/count?${token}&where=${where}` : `models/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `models/count?${token}`)
    return data
};

export const delModel = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `models/${id}?${token}`
    )
    return data
};