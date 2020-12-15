import { strapi } from "../../axios";

export const getTransports = async (key, { filter } = { filter: false }) => {
    const path = filter != false ? `transports?filter=${filter}` : 'transports'
    const data = await strapi.request('get', path)
    return data
};

export const getTransport = async (key, { id }) => {
    const data = await strapi.request('get', `transports/${id}`)
    return data
};

export const updateTransport = async ({ id, body }) => {
    const data = await strapi.request(
        'post',
        `transports/update?where=${JSON.stringify({ id: id })}`,
        { data: { ...body } }
    )
    return data
};

export const addTransport = async ({ body }) => {
    const data = await strapi.request(
        'post',
        `transports`,
        { data: { ...body } }
    )
    return data
};

export const delTransport = async ({ id }) => {
    const data = await strapi.request(
        'delete',
        `transports/${id}`
    )
    return data
};


const data = {
    "name": "string",
    "gos_number": "string",
    "year_of_issue": "string",
    "is_active": true,
    "attachment": {},
    "min_price": 0,
    "one_km_price": 0,
    "waiting_price": 0,
    "one_hour_price": 0,
    "min_hour": 0,
    "status": "string",
    "min_order_price": 0,
    "year": "string",
    "min_rent_price": 0,
    "min_hour_price": 0,
    "enabled_rent": true,
    "enabled_cargo": true,
    "color": "string",
    "id": 0,
    "driverId": 0,
    "categoryId": 0,
    "createdAt": "2020-12-12T05:03:46.002Z",
    "updatedAt": "2020-12-12T05:03:46.002Z",
    "modelId": 0,
    "makeId": 0
}
