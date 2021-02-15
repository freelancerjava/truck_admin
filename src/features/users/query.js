import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getUsers = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `users?${token}&filter=${filter}` : `users?${token}`
    const data = await strapi.request('get', path).catch(e => {
        console.log('asd', e);
        window.location = '/auth/login'
    })

    return data
};

export const getPartnerUsers = async (key, { filter } = { filter: false }) => {

    const per_page = parseInt(JSON.parse(filter).limit)
    const page = parseInt(JSON.parse(filter).skip) / (per_page) + 1
    const path = `/admins/partneruser?${token}&page=${page}&per_page=${per_page}`
    const data = await strapi.request('get', path)
    return data.result.data
};

export const getPartnerCount = async (key, { where } = { where: {} }) => {
    // const path = where ? `users/count?${token}&where=${where}` : `users/count?${token}`
    // const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `users/count?${token}`)
    return 100
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
    if (body.password == null) body.password = '000000'
    const data = await strapi.request(
        'post',
        `users?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, { where } = { where: {} }) => {
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