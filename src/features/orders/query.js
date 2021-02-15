import { strapi, user } from "../../axios";
import { useQuery } from "react-query";

const token = user ? `access_token=${user.id}` : ''

export const getOrders = async (key, { filter } = { filter: false }) => {
  const path = filter ? `orders?${token}&filter=${filter}` : 'orders'
  const data = await strapi.request('get', path)
  return data
};

export const getPartnerOrders = async (key, { filter } = { filter: false }) => {
  const per_page = parseInt(JSON.parse(filter).limit)
  const page = parseInt(JSON.parse(filter).skip) / (per_page) + 1
  const path = `/admins/partnerorders?${token}&page=${page}&per_page=${per_page}`
  const data = await strapi.request('get', path)
  return data.result.data
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
  body.payment = {type:'cash'}
  body.status = 'new'
  body.type = 'cargo'
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
  const path = where ? `orders/count?${token}&where=${where}` : `orders/count?${token}`
  const data = await strapi.request('get', path)
  // const data = await strapi.request('get', `orders/count`)
  return data
};


export const useOrders = (filter) => {
  const data = useQuery(['ordersbytype' + filter.status], async () => {
    const data = await strapi.request('get', `orders/count?${token}&where=${JSON.stringify(filter)}`)
    return data
  })
  return data.data && data.data.count || 0
}

export const useOrdersGeo = (status) => {
  const data = useQuery(['ordersgeo', status], async () => {
    const data = await strapi.request('get', `orders?${token}&filter=${JSON.stringify({ status: status })}`)
    return data
  })
  return data.data && data.data || []
}

export const useActiveOrders = (filter) => {
  const data = useQuery(['ordersgeo'], async () => {
    const data = await strapi.request('get', `orders?${token}&filter=${JSON.stringify(filter)}`)
    return data
  })
  return data.data && data.data || []
}

export const getMainTransaction = async (key, { id, filter }) => {
  const path = filter ? `mains/transaction/${id}?${token}&filter=${filter}` : `mains/transaction/${id}?${token}`
  const data = await strapi.request('get', path)
  return data
};


export const searchLocation = async (input) => {
  const KEY = process.env.REACT_APP_MAP_API_KEY || 'AIzaSyC1OC2iyKiTe7GiBv0-z-WtZIaMWGJ6NSA';
  const country = 'us';
  const cors = 'https://fork.uz';
  const googleUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:${country}&key=${KEY}`;

  let predictions = [];

  const { data } = await strapi.request('get', googleUrl);

  if (data.status === 'OK') {
    predictions = data.predictions.map(el => ({
      value: el.description, label: el.description
    }))
  }

  return predictions
}