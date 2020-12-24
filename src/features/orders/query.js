import { strapi } from "../../axios";

export const getOrders = async (key, { filter }) => {
  const path = filter ? `orders?filter=${filter}` : 'orders'
  const data = await strapi.request('get', path)  
  return data
};

export const getOrder = async (key, { id, filter}) => {
  const path = filter ? `orders/${id}?filter=${filter}` : `orders/${id}`
  const data = await strapi.request('get', path)
  return data
};

export const updateOrder = async ({ id, body }) => {
  const data = await strapi.request(
    'post',
    `orders/update?where=${JSON.stringify({ id: id })}`,
    { data: { ...body } }
  )
  return data
};

export const addOrder = async ({ body }) => {
  const data = await strapi.request(
    'post',
    `orders`,
    { data: { ...body } }
  )
  return data
};

export const delOrder = async ({ id }) => {
  const data = await strapi.request(
    'delete',
    `orders/${id}`
  )
  return data
};

export const getCount = async (key,{where}={where:{}}) => {
  const data = await strapi.request('get', `orders/count?where=${where}`)
  // const data = await strapi.request('get', `orders/count`)
  return data
};