import { strapi } from "../../axios";
const token = JSON.parse(localStorage.getItem('user')) ? `access_token=${JSON.parse(localStorage.getItem('user')).id}` : ''

export const getTransactions = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `transactions?${token}&filter=${filter}` : `transactions?${token}`
    const data = await strapi.request('get', path)
    return data
};

export const getTransaction = async (key, { id }) => {
    const data = await strapi.request('get', `transactions/${id}?${token}`)
    return data
};

export const updateTransaction = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `transactions/update?${token}&where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addTransaction = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `transactions?${token}`,
        { data: { ...body } }
    )
    return data
};


export const getCount = async (key, { where }) => {
    const path = where ? `transactions/count?${token}&where=${where}` : `transactions/count?${token}`
    const data = await strapi.request('get', path)
    // const data = await strapi.request('get', `transactions/count?${token}`)
    return data
};

export const getTransactionData = async (key, { id, filter = {} }) => {
    const path = filter != false ? `transactions/${id}?${token}&filter=${filter}` : `transactions/${id}?${token}`
    const data = await strapi.request('get', path)
    return data
};

