import { strapi } from "../../axios";

export const getCats = async (key,{filter}={filter:false}) => {
    
    const path = filter != false ? `categories?filter=${filter}` : 'categories' 
    const data = await strapi.request('get', path)
    return data
};

export const getCat = async (key, { id }) => {
    const data = await strapi.request('get', `categories/${id}`)
    return data
};

export const updateCat = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `categories/update?where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addCat = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `categories`,
        { data: { ...body } }
    )
    return data
};

export const delCat = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `categories/${id}`
    )
    return data
};

export const getCount = async (key, { where } = { where: {} }) => {
    const data = await strapi.request('get', `categories/count?where=${where}`)
    return data
};