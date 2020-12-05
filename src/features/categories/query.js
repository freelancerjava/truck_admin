import { strapi } from "../../axios";

export const getCats = async () => {
    const data = await strapi.request('get', 'categories')
    return data   
};

export const getCat = async (key, {id}) => {
    const data = await strapi.request('get', `categories/${id}`)
    return data   
};
