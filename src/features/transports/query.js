import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''


export const getTransports = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `transports?${token}&filter=${filter}` : `transports?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getPartnerTransports = async (key, { filter } = { filter: false }) => {
    const per_page = parseInt(JSON.parse(filter).limit)
    const page = parseInt(JSON.parse(filter).skip) / (per_page) + 1
    const path = filter != false ? `admins/partnertransports?${token}&filter=${filter}&page=${page}&per_page=${per_page}` : `admins/partnertransports?${token}&page=${page}&per_page=${per_page}`
    const data = await strapi.request('get', path)
    return data.result.data
};

export const getTransport = async (key, { id, filter}) => {
    const path = filter != false ? `transports/${id}?${token}&filter=${filter}` : `transports/${id}?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const updateTransport = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `transports/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addTransport = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `transports?${token}`,
        { data: { ...body } }
    )
    return data
};

export const delTransport = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `transports/${id}?${token}`
    )
    return data
};

export const getCount = async (key, { where } = { where: {} }) => {
    const data = await strapi.request('get', `transports/count?${token}&where=${where}`)
    return data
};

