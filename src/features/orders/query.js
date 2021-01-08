import { strapi, user } from "../../axios";
import { useQuery } from "react-query";

const token = user ? `access_token=${user.id}` : ''

export const getOrders = async (key, { filter } = { filter: false }) => {
  const path = filter ? `orders?${token}&filter=${filter}` : 'orders'
  const data = await strapi.request('get', path)
  return data
};

export const getOrder = async (key, { id, filter }) => {
  const path = filter ? `orders/${id}?${token}&filter=${filter}` : `orders/${id}?${token}`
  const data = await strapi.request('get', path)
  return data
};

export const updateOrder = async ({ id, body }) => {
  const data = await strapi.request(
    'patch',
    `orders/${id}?${token}`,
    { data: { ...body } }
  )
  return data
};

export const addOrder = async ({ body }) => {
  const data = await strapi.request(
    'post',
    `orders?${token}`,
    { data: { ...body } }
  )
  return data
};

export const delOrder = async ({ id }) => {
  const data = await strapi.request(
    'delete',
    `orders/${id}?${token}`
  )
  return data
};

export const getCount = async (key, { where } = { where: {} }) => {
  const data = await strapi.request('get', `orders/count?${token}&where=${where}`)
  // const data = await strapi.request('get', `orders/count`)
  return data
};


export const useOrders = (status) => {
  const { isLoading, error, data, isFetching } = useQuery(['ordersbytype', status], async () => {
    const data = await strapi.request('get', `orders/count?${token}&where=${JSON.stringify({ status: status })}`)
    return data
  })

  console.log(data);
  

  return data 
}

export const useOrdersGeo = (status) => {
  const data = useQuery(['ordersgeo', status], async () => {
    const data = await strapi.request('get', `orders?${token}&filter=${JSON.stringify({ status: status })}`)
    return data
  })
  return data.data && data.data || []
}