import { strapi } from "../../axios";

export const getOrders = async (key, { filter }) => {
  const data = await strapi.request('get', `orders?filter=${filter}`)
  return data
};

export const getOrder = async (key, { id }) => {
  const data = await strapi.request('get', `orders/${id}`)
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
