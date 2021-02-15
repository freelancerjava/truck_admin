import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''

export const getPartnerms = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `partners?${token}&filter=${filter}` : `partners?${token}`
    const data = await strapi.request('get', path).catch(e => {
        console.log('asd', e);
        window.location = '/auth/login'
    })

    return data
};



export const getPartnerm = async (key, { id }) => {
    const data = await strapi.request('get', `partners/${id}?${token}`)
    return data
};

export const updatePartnerm = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `partners/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addPartnerm = async ({ body }) => {
    if (body.password == null) body.password = '000000'
    const data = await strapi.request(
        'post',
        `partners?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, { where } = { where: {} }) => {
    const path = where ? `partners/count?${token}&where=${where}` : `partners/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `partners/count?${token}`)
    return data
};

export const delPartnerm = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `partners/${id}?${token}`
    )
    return data
};