import { strapi } from "../../axios";

export const getTransports = async (key, {filter}) => {
    const data = await strapi.request('get', `transports?filter=${filter}`)
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

const a = {
    "name": null,
    "gos_number": "01S777TA",
    "year_of_issue": null,
    "is_active": true,
    "attachment": {
        "transport1": {
            "result": "https://api.ordertruck.uz/docs/24/tm1606934081741.jpg",
            "preview": "https://api.ordertruck.uz/docs/24/preview_tm1606934081741.jpg"
        },
        "transport3": {
            "result": "https://api.ordertruck.uz/docs/24/tm1606934113398.jpg",
            "preview": "https://api.ordertruck.uz/docs/24/preview_tm1606934113398.jpg"
        }
    },
    "min_price": 100000,
    "one_km_price": 15000,
    "waiting_price": null,
    "one_hour_price": null,
    "min_hour": null,
    "status": "active",
    "min_order_price": null,
    "year": "2020",
    "min_rent_price": null,
    "min_hour_price": null,
    "enabled_rent": true,
    "enabled_cargo": true,
    "color": null,
    "id": 4,
    "driverId": 24,
    "categoryId": 10,
    "createdAt": "2020-12-02T18:36:15.903Z",
    "updatedAt": "2020-12-02T18:41:31.156Z",
    "modelId": 1,
    "makeId": 1
}