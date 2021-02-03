import { strapi, user } from "../../axios";

const token = user ? `access_token=${user.id}` : ''


export const getCats = async (key,{filter}={filter:JSON.stringify({include:[{parent:['parent']}]})}) => {    
    const path = filter != false ? `categories?${token}&filter=${filter}` : `categories?${token}` 
    const data = await strapi.request('get', path)
    return data
};

export const getCat = async (key, { id }) => {
    const data = await strapi.request('get', `categories/${id}?${token}&`)
    return data
};

export const updateCat = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `categories/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addCat = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `categories?${token}`,
        { data: { ...body } }
    )
    return data
};

export const delCat = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `categories/${id}?${token}`
    )
    return data
};

export const getCount = async (key, { where } = { where: {} }) => {
    const path = where ? `categories/count?${token}&where=${where}` : `categories/count?${token}`
    const data = await strapi.request('get', path)
    return data
};