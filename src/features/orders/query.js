import { strapi } from "../../axios";

export const getOrders = async (key, {filter}) => {
    const data = await strapi.request('get', `orders?filter=${filter}`)
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

const arr = [
    {
      "fromAddress": "Узбекистан, Ташкент, Мирабадский район, махалля Шароф Рашидов",
      "toAddress": "Узбекистан, Ташкент, Чиланзарский район, массив Чиланзар, 19-й квартал, 27",
      "fromCoordinates": {
        "lng": 69.2689739245158,
        "lat": 41.306541120742
      },
      "toCoordinates": {
        "lng": 69.1849411,
        "lat": 41.2710841
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 8,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        4,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 1,
      "categoryId": 7,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-24T11:56:36.713Z",
      "updatedAt": "2020-12-06T06:56:34.248Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "fromCoordinates": {
        "lng": 69.2573842525319,
        "lat": 41.3033742674754
      },
      "toCoordinates": {
        "lng": 69.2573842525319,
        "lat": 41.3033742674754
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 4,
      "viewing_driverIds": [
        1,
        2,
        7,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 2,
      "categoryId": 7,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-24T12:16:46.181Z",
      "updatedAt": "2020-12-06T06:56:36.562Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Учтепинский район, массив Чиланзар, 21-й квартал",
      "fromCoordinates": {
        "lng": 69.2573842525319,
        "lat": 41.3033742674754
      },
      "toCoordinates": {
        "lng": 69.1737654,
        "lat": 41.2924208
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 7,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        2,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 3,
      "categoryId": 7,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-24T17:53:27.514Z",
      "updatedAt": "2020-12-02T18:27:14.620Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Янги Лабзак, 106",
      "toAddress": "Узбекистан, Ташкент, Учтепинский район, массив Чиланзар, 21-й квартал",
      "fromCoordinates": {
        "lng": 69.1605152978609,
        "lat": 41.3156156287652
      },
      "toCoordinates": {
        "lng": 69.1737654,
        "lat": 41.2924208
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "closed",
      "start_date": "2020-11-26T04:19:13.733Z",
      "end_date": "2020-11-26T04:20:46.704Z",
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving",
          "date": "2020-11-26T04:18:07.214Z"
        },
        {
          "driverId": 2,
          "status": "arrived",
          "date": "2020-11-26T04:19:13.733Z"
        },
        {
          "driverId": 2,
          "status": "on_the_way",
          "date": "2020-11-26T04:20:40.297Z"
        },
        {
          "driverId": 2,
          "status": "delivered",
          "date": "2020-11-26T04:20:44.192Z"
        },
        {
          "driverId": 2,
          "status": "completed",
          "date": "2020-11-26T04:20:46.708Z"
        },
        {
          "driverId": 2,
          "status": "closed",
          "date": "2020-11-26T04:20:56.746Z"
        }
      ],
      "comment": null,
      "mileage": 0,
      "cache_mileage_date": "Thu Nov 26 2020 04:20:40 GMT+0000 (Coordinated Universal Time)",
      "status_comment": null,
      "distance": 2,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": {
        "extra_km_price": 177000,
        "extra_km": 177,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 179
      },
      "allowAdditionalLoad": null,
      "total_price": 177000,
      "viewedByDriver": null,
      "id": 4,
      "categoryId": 7,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-11-24T17:56:18.024Z",
      "updatedAt": "2020-12-02T16:11:44.734Z",
      "transportId": 1
    },
    {
      "fromAddress": "Узбекистан, Ташкент, Учтепинский район, массив Чиланзар, 21-й квартал, 29",
      "toAddress": "Узбекистан, Ташкент, Яккасарайский район, улица Кушбеги, 10",
      "fromCoordinates": {
        "lng": 69.1729907243395,
        "lat": 41.2927844256813
      },
      "toCoordinates": {
        "lng": 69.2460335,
        "lat": 41.2765672
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "closed",
      "start_date": "2020-11-26T04:28:27.922Z",
      "end_date": "2020-11-26T06:17:53.428Z",
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving",
          "date": "2020-11-26T04:28:23.897Z"
        },
        {
          "driverId": 2,
          "status": "arrived",
          "date": "2020-11-26T04:28:27.922Z"
        },
        {
          "driverId": 2,
          "status": "on_the_way",
          "date": "2020-11-26T04:28:32.853Z"
        },
        {
          "driverId": 2,
          "status": "delivered",
          "date": "2020-11-26T06:17:50.807Z"
        },
        {
          "driverId": 2,
          "status": "completed",
          "date": "2020-11-26T06:17:53.431Z"
        },
        {
          "driverId": 2,
          "status": "closed",
          "date": "2020-11-26T06:18:00.320Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": {
        "extra_km_price": 6281000,
        "extra_km": 6281,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 6287
      },
      "allowAdditionalLoad": null,
      "total_price": 6281000,
      "viewedByDriver": null,
      "id": 5,
      "categoryId": 7,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-11-26T04:22:14.157Z",
      "updatedAt": "2020-11-26T12:24:49.556Z",
      "transportId": 1
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Фархадская улица, 21",
      "fromCoordinates": {
        "lng": 69.2573845184519,
        "lat": 41.3033715214106
      },
      "toCoordinates": {
        "lng": 69.174642,
        "lat": 41.2953504
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        4,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 6,
      "categoryId": 11,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-26T09:09:05.180Z",
      "updatedAt": "2020-12-06T06:56:38.505Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Фархадская улица, 21",
      "fromCoordinates": {
        "lng": 69.2573845184519,
        "lat": 41.3033715214106
      },
      "toCoordinates": {
        "lng": 69.174642,
        "lat": 41.2953504
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        4,
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 7,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-26T09:09:37.290Z",
      "updatedAt": "2020-12-06T13:39:36.868Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, улица Фазылтепа, 259",
      "fromCoordinates": {
        "lng": 69.2573845184519,
        "lat": 41.3033715214106
      },
      "toCoordinates": {
        "lng": 69.1804708,
        "lat": 41.2978921
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "closed",
      "start_date": "2020-11-26T10:06:17.675Z",
      "end_date": "2020-11-26T10:06:24.189Z",
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving", 
          "date": "2020-11-26T10:06:15.692Z"
        },
        {
          "driverId": 2,
          "status": "arrived",
          "date": "2020-11-26T10:06:17.675Z"
        },
        {
          "driverId": 2,
          "status": "on_the_way",
          "date": "2020-11-26T10:06:20.480Z"
        },
        {
          "driverId": 2,
          "status": "delivered",
          "date": "2020-11-26T10:06:22.108Z"
        },
        {
          "driverId": 2,
          "status": "completed",
          "date": "2020-11-26T10:06:24.193Z"
        },
        {
          "driverId": 2,
          "status": "closed",
          "date": "2020-11-26T10:06:27.143Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": {
        "extra_km_price": 1273200,
        "extra_km": 6366,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 6372
      },
      "allowAdditionalLoad": null,
      "total_price": 1273200,
      "viewedByDriver": null,
      "id": 8,
      "categoryId": 19,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-11-26T09:17:02.836Z",
      "updatedAt": "2020-11-26T12:01:44.108Z",
      "transportId": 2
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Фархадская улица, 21",
      "fromCoordinates": {
        "lng": 69.257377398604,
        "lat": 41.3033376312096
      },
      "toCoordinates": {
        "lng": 69.174642,
        "lat": 41.2953504
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "closed",
      "start_date": "2020-11-26T12:07:25.916Z",
      "end_date": "2020-11-26T12:07:29.752Z",
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving",
          "date": "2020-11-26T12:07:22.956Z"
        },
        {
          "driverId": 2,
          "status": "arrived",
          "date": "2020-11-26T12:07:25.916Z"
        },
        {
          "driverId": 2,
          "status": "on_the_way",
          "date": "2020-11-26T12:07:27.196Z"
        },
        {
          "driverId": 2,
          "status": "delivered",
          "date": "2020-11-26T12:07:28.602Z"
        },
        {
          "driverId": 2,
          "status": "completed",
          "date": "2020-11-26T12:07:29.755Z"
        },
        {
          "driverId": 2,
          "status": "closed",
          "date": "2020-11-26T12:07:32.023Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": {
        "extra_km_price": 1376400,
        "extra_km": 6882,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 6888
      },
      "allowAdditionalLoad": null,
      "total_price": 1376400,
      "viewedByDriver": null,
      "id": 9,
      "categoryId": 19,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-11-26T09:59:25.309Z",
      "updatedAt": "2020-11-26T12:33:30.124Z",
      "transportId": 2
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Фархадская улица, 21",
      "fromCoordinates": {
        "lng": 69.2574307896576,
        "lat": 41.3033550709038
      },
      "toCoordinates": {
        "lng": 69.174642,
        "lat": 41.2953504
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": "",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 6,
      "viewing_counts": 4,
      "viewing_driverIds": [
        1,
        2,
        4,
        3
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 10,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-11-26T12:06:54.966Z",
      "updatedAt": "2020-12-07T04:28:47.366Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Саудовская Аравия, Эр-Рияд",
      "fromCoordinates": {
        "lng": 16.474391,
        "lat": 43.5038900996172
      },
      "toCoordinates": {
        "lng": 46.6752957,
        "lat": 24.7135517
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 3449,
      "viewing_counts": 3,
      "viewing_driverIds": [
        8,
        4,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 11,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 8,
      "createdAt": "2020-11-30T17:39:25.987Z",
      "updatedAt": "2020-12-06T06:56:56.976Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743324,
        "lat": 43.5038795996171
      },
      "toCoordinates": {
        "lng": 16.4743324,
        "lat": 43.5038795996171
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "url": "https://api.ordertruck.uz/order_attachments/tm1606761642103.jpg"
        }
      ],
      "order_events": null,
      "comment": "Нужно протестить",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        8,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 12,
      "categoryId": 12,
      "driverId": null,
      "creatorId": 8,
      "createdAt": "2020-11-30T18:42:11.777Z",
      "updatedAt": "2020-12-05T06:52:22.797Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743548,
        "lat": 43.5038681996171
      },
      "toCoordinates": {
        "lng": 16.4743487,
        "lat": 43.5038715996171
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "cancel",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": "test",
      "canceledByUserId": 8,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        8
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 13,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 8,
      "createdAt": "2020-12-01T01:39:19.551Z",
      "updatedAt": "2020-12-01T01:39:46.794Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "toAddress": "Узбекистан, Ташкент, улица Фазылтепа, 259",
      "fromCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "toCoordinates": {
        "lng": 69.1804708,
        "lat": 41.2978921
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "card",
        "card": {
          "name": "work",
          "is_active": null,
          "balance": null,
          "expire_date": "0822",
          "card_number": "8600 00** **** 0000",
          "token": null,
          "id": 1,
          "userId": 1,
          "createdAt": "2020-11-26T12:05:59.457Z",
          "updatedAt": "2020-11-26T12:05:59.461Z"
        }
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "url": "https://api.ordertruck.uz/order_attachments/tm1606842088184.JPG"
        }
      ],
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 8,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        4,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 14,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-01T17:01:36.583Z",
      "updatedAt": "2020-12-06T06:57:19.005Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "toAddress": "Узбекистан, Ташкент, улица Фазылтепа, 259",
      "fromCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "toCoordinates": {
        "lng": 69.1804708,
        "lat": 41.2978921
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "card",
        "card": {
          "name": "work",
          "is_active": null,
          "balance": null,
          "expire_date": "0822",
          "card_number": "8600 00** **** 0000",
          "token": null,
          "id": 1,
          "userId": 1,
          "createdAt": "2020-11-26T12:05:59.457Z",
          "updatedAt": "2020-11-26T12:05:59.461Z"
        }
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606842580827.JPG",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606842580827.JPG"
          }
        },
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606842686140.JPG",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606842686140.JPG"
          }
        }
      ],
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 8,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        4,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 15,
      "categoryId": 20,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-01T17:11:43.820Z",
      "updatedAt": "2020-12-06T06:57:04.603Z",
      "transportId": null
    },
    {
      "fromAddress": null,
      "toAddress": null,
      "fromCoordinates": null,
      "toCoordinates": null,
      "when": null,
      "date": null,
      "payment": null,
      "status": null,
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": null,
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": null,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 16,
      "categoryId": null,
      "driverId": null,
      "creatorId": null,
      "createdAt": "2020-12-01T19:16:56.638Z",
      "updatedAt": "2020-12-01T19:16:56.638Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сегет",
      "toAddress": "Хорватия, Брачский пролив",
      "fromCoordinates": {
        "lng": 16.2085253337168,
        "lat": 43.517551682103
      },
      "toCoordinates": {
        "lng": 16.469541985494,
        "lat": 43.4990406413384
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "url": "https://api.ordertruck.uz/order_attachments/tm1606908116524.jpg"
        }
      ],
      "order_events": null,
      "comment": "Fhdbgfkfehjv",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 21,
      "viewing_counts": 2,
      "viewing_driverIds": [
        8,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 17,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 8,
      "createdAt": "2020-12-02T13:35:22.829Z",
      "updatedAt": "2020-12-04T18:38:26.240Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "toAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "fromCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "toCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "card",
        "card": {
          "name": "YEysetste",
          "is_active": null,
          "balance": null,
          "expire_date": "2222",
          "card_number": "8600 02** **** 3434",
          "token": null,
          "id": 12,
          "userId": 1,
          "createdAt": "2020-12-02T10:20:41.005Z",
          "updatedAt": "2020-12-02T10:20:41.007Z"
        }
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606888115385.JPG",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606888115385.JPG"
          }
        }
      ],
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        1
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 18,
      "categoryId": 22,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-02T15:44:18.623Z",
      "updatedAt": "2020-12-02T16:10:32.175Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Матбуотчилар",
      "toAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "fromCoordinates": {
        "lng": 69.2724632149558,
        "lat": 41.3119095484781
      },
      "toCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 4,
      "viewing_driverIds": [
        1,
        2,
        4,
        3
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 19,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-02T16:48:50.446Z",
      "updatedAt": "2020-12-07T04:11:23.642Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, Янгихаётский район, махалля Мархамат",
      "toAddress": "Узбекистан, Ташкент, Фархадская улица, 21",
      "fromCoordinates": {
        "lng": 69.2000127,
        "lat": 41.2141753996247
      },
      "toCoordinates": {
        "lng": 69.174642,
        "lat": 41.2953504
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606929224302.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606929224302.jpg"
          }
        },
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606929311911.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606929311911.jpg"
          }
        },
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606929346683.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606929346683.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 9,
      "viewing_counts": 5,
      "viewing_driverIds": [
        1,
        2,
        28,
        3,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 20,
      "categoryId": 20,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-02T17:17:18.773Z",
      "updatedAt": "2020-12-05T06:55:18.185Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, Мирабадский район, махалля Шароф Рашидов",
      "toAddress": "Узбекистан, Ташкент, Яккасарайский район, улица Абдуллы Каххара, 49",
      "fromCoordinates": {
        "lng": 69.2690481005141,
        "lat": 41.3052756999986
      },
      "toCoordinates": {
        "lng": 69.2641807,
        "lat": 41.2775815
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "card",
        "card": {
          "name": "uzcard",
          "is_active": true,
          "balance": null,
          "expire_date": "1123",
          "card_number": "8600 08** **** 7847",
          "token": "A287267D1C402A27E0530100007FC4AA",
          "id": 16,
          "userId": 23,
          "createdAt": "2020-12-02T18:10:08.548Z",
          "updatedAt": "2020-12-02T18:10:32.247Z"
        }
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1606933421795.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1606933421795.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "dsfsdfsd",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 3,
      "viewing_counts": 4,
      "viewing_driverIds": [
        23,
        2,
        3,
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 21,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 23,
      "createdAt": "2020-12-02T18:28:04.086Z",
      "updatedAt": "2020-12-06T06:57:08.351Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, Мирабадский район, махалля Миробод",
      "toAddress": "Узбекистан, Ташкент, Чиланзарский район, массив Чиланзар, 19-й квартал, 27",
      "fromCoordinates": {
        "lng": 69.2705119245215,
        "lat": 41.2907440113205
      },
      "toCoordinates": {
        "lng": 69.1849411,
        "lat": 41.2710841
      },
      "when": "planned",
      "date": "2020-12-04T08:02:00.000Z",
      "payment": {
        "type": "cash"
      },
      "status": "cancel",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": "Somethings",
      "canceledByUserId": 1,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving",
          "date": "2020-12-03T08:08:45.118Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 7,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 22,
      "categoryId": 10,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-12-03T08:03:32.999Z",
      "updatedAt": "2020-12-06T18:19:53.489Z",
      "transportId": 1
    },
    {
      "fromAddress": "Узбекистан, Ташкент, сквер Амира Темура",
      "toAddress": "Узбекистан, Ташкент, Шайхантахурский район, массив Хадра, 9А",
      "fromCoordinates": {
        "lng": 69.279779285913,
        "lat": 41.3110214529723
      },
      "toCoordinates": {
        "lng": 69.2478124686979,
        "lat": 41.3268213236292
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 3,
      "viewing_counts": 4,
      "viewing_driverIds": [
        25,
        28,
        4,
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 23,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 25,
      "createdAt": "2020-12-03T11:09:25.589Z",
      "updatedAt": "2020-12-06T13:40:14.636Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 24,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:26:56.778Z",
      "updatedAt": "2020-12-06T06:57:13.060Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 25,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:27:04.224Z",
      "updatedAt": "2020-12-04T20:27:05.166Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 26,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:27:54.529Z",
      "updatedAt": "2020-12-04T20:27:55.458Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 27,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:29:19.216Z",
      "updatedAt": "2020-12-04T20:29:20.205Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 28,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:09.343Z",
      "updatedAt": "2020-12-04T20:31:10.163Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 29,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:11.542Z",
      "updatedAt": "2020-12-04T20:31:12.458Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 30,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:15.566Z",
      "updatedAt": "2020-12-04T20:31:16.430Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 31,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:19.529Z",
      "updatedAt": "2020-12-04T20:31:20.318Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 32,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:36.989Z",
      "updatedAt": "2020-12-04T20:31:37.791Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 33,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:38.850Z",
      "updatedAt": "2020-12-04T20:31:39.679Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 34,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:31:41.220Z",
      "updatedAt": "2020-12-06T06:56:28.393Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 35,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:32:28.812Z",
      "updatedAt": "2020-12-04T20:32:29.763Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 36,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:32:32.228Z",
      "updatedAt": "2020-12-04T20:32:33.097Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 37,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:32:34.348Z",
      "updatedAt": "2020-12-04T20:32:35.257Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 38,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:33:31.550Z",
      "updatedAt": "2020-12-04T20:33:32.456Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 39,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:33:33.631Z",
      "updatedAt": "2020-12-04T20:33:34.573Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 40,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:33:35.770Z",
      "updatedAt": "2020-12-04T20:33:36.583Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 41,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:36:09.294Z",
      "updatedAt": "2020-12-04T20:36:10.163Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769996171
      },
      "toCoordinates": {
        "lng": 16.4743417,
        "lat": 43.5038663996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 42,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:38:06.203Z",
      "updatedAt": "2020-12-04T20:38:07.205Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "toCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": null,
      "viewing_driverIds": null,
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 43,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:44:37.024Z",
      "updatedAt": "2020-12-04T20:44:38.119Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "toCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 44,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:44:40.512Z",
      "updatedAt": "2020-12-06T13:10:04.014Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "toCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        7,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 45,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:44:42.892Z",
      "updatedAt": "2020-12-06T06:56:24.935Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4770706049572,
        "lat": 43.5114970154857
      },
      "toCoordinates": {
        "lng": 16.474357,
        "lat": 43.5038769992343
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 1,
      "viewing_counts": 1,
      "viewing_driverIds": [
        4
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 46,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:47:55.833Z",
      "updatedAt": "2020-12-05T06:43:32.704Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4770706049572,
        "lat": 43.5114970154857
      },
      "toCoordinates": {
        "lng": 16.4770706049572,
        "lat": 43.5114970154857
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607108538851.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607108538851.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Test last",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 5,
      "viewing_driverIds": [
        29,
        7,
        4,
        2,
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 47,
      "categoryId": 17,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T20:58:29.716Z",
      "updatedAt": "2020-12-06T13:09:57.410Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4742945776811,
        "lat": 43.5039337960626
      },
      "toCoordinates": {
        "lng": 16.4742945776811,
        "lat": 43.5039337960626
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "cancel",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": "test",
      "canceledByUserId": 29,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607116943587.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607116943587.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Тест",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        29,
        7
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 48,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T21:22:41.303Z",
      "updatedAt": "2020-12-05T00:28:03.130Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743802,
        "lat": 43.5038837992343
      },
      "toCoordinates": {
        "lng": 16.4743802,
        "lat": 43.5038837992343
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 4,
      "viewing_driverIds": [
        29,
        4,
        2,
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 49,
      "categoryId": 18,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-04T21:43:31.159Z",
      "updatedAt": "2020-12-06T13:10:00.137Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743236,
        "lat": 43.5038797996171
      },
      "toCoordinates": {
        "lng": 16.4743236,
        "lat": 43.5038797996171
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 4,
      "viewing_driverIds": [
        29,
        4,
        2,
        30
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 50,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 29,
      "createdAt": "2020-12-05T00:18:58.651Z",
      "updatedAt": "2020-12-06T13:09:55.150Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, Учтепинский район, массив Чиланзар, 15-й квартал, 31А",
      "fromCoordinates": {
        "lng": 69.2573574126951,
        "lat": 41.3033317065717
      },
      "toCoordinates": {
        "lng": 69.1809099,
        "lat": 41.2923929
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "closed",
      "start_date": "2020-12-06T12:14:43.045Z",
      "end_date": "2020-12-06T12:14:51.503Z",
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607238139676.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607238139676.jpg"
          }
        }
      ],
      "order_events": [
        {
          "driverId": 2,
          "status": "arriving",
          "date": "2020-12-06T07:16:34.697Z"
        },
        {
          "driverId": 2,
          "status": "arrived",
          "date": "2020-12-06T12:14:43.045Z"
        },
        {
          "driverId": 2,
          "status": "on_the_way",
          "date": "2020-12-06T12:14:45.055Z"
        },
        {
          "driverId": 2,
          "status": "delivered",
          "date": "2020-12-06T12:14:48.116Z"
        },
        {
          "driverId": 2,
          "status": "completed",
          "date": "2020-12-06T12:14:51.514Z"
        },
        {
          "driverId": 2,
          "status": "closed",
          "date": "2020-12-06T12:14:53.196Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 8,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        2
      ],
      "receipt": {
        "extra_km_price": 6417000,
        "extra_km": 6417,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 6425
      },
      "allowAdditionalLoad": null,
      "total_price": 6417000,
      "viewedByDriver": null,
      "id": 51,
      "categoryId": 10,
      "driverId": 2,
      "creatorId": 1,
      "createdAt": "2020-12-06T07:02:28.868Z",
      "updatedAt": "2020-12-06T12:14:53.413Z",
      "transportId": 1
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "fromCoordinates": {
        "lng": 69.2574624,
        "lat": 41.3033445996243
      },
      "toCoordinates": {
        "lng": 69.2574624,
        "lat": 41.3033445996243
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "cancel",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": "test",
      "canceledByUserId": 1,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 3,
      "viewing_driverIds": [
        1,
        30,
        2
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 52,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 1,
      "createdAt": "2020-12-06T13:20:30.907Z",
      "updatedAt": "2020-12-06T18:26:43.511Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "toAddress": "Узбекистан, Ташкент, улица Юнуса Раджаби, 71",
      "fromCoordinates": {
        "lng": 69.2574706,
        "lat": 41.3033466996244
      },
      "toCoordinates": {
        "lng": 69.2574624,
        "lat": 41.3033445996243
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "delivered",
      "start_date": "2020-12-06T13:45:57.816Z",
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": [
        {
          "driverId": 30,
          "status": "arriving",
          "date": "2020-12-06T13:42:20.094Z"
        },
        {
          "driverId": 30,
          "status": "arrived",
          "date": "2020-12-06T13:45:57.816Z"
        },
        {
          "driverId": 30,
          "status": "on_the_way",
          "date": "2020-12-06T13:53:12.879Z"
        },
        {
          "driverId": 30,
          "status": "delivered",
          "date": "2020-12-06T13:53:20.702Z"
        }
      ],
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        1,
        30
      ],
      "receipt": {
        "extra_km_price": 0,
        "extra_km": 0,
        "extra_waiting_time": 0,
        "extra_waiting_price": 0,
        "distance": 0
      },
      "allowAdditionalLoad": null,
      "total_price": 0,
      "viewedByDriver": null,
      "id": 53,
      "categoryId": 10,
      "driverId": 30,
      "creatorId": 1,
      "createdAt": "2020-12-06T13:41:12.263Z",
      "updatedAt": "2020-12-06T14:36:23.136Z",
      "transportId": 8
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4743569,
        "lat": 43.5038696996172
      },
      "toCoordinates": {
        "lng": 16.4743569,
        "lat": 43.5038696996172
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607263939007.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607263939007.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Need to move furniture",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        6,
        31
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 54,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-06T14:12:25.713Z",
      "updatedAt": "2020-12-07T03:27:00.962Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4706015631814,
        "lat": 43.5062743086476
      },
      "toCoordinates": {
        "lng": 16.4706015631814,
        "lat": 43.5062743086476
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607264728110.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607264728110.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Нуну",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        6
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 55,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-06T14:25:50.545Z",
      "updatedAt": "2020-12-06T14:39:55.572Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит, Ulica Josipa Jovića, 93",
      "fromCoordinates": {
        "lng": 16.4744089624842,
        "lat": 43.5040225919657
      },
      "toCoordinates": {
        "lng": 16.4842174,
        "lat": 43.5192017
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": "Rrrrr",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 3,
      "viewing_counts": 1,
      "viewing_driverIds": [
        6
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 56,
      "categoryId": 10,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-06T14:50:41.152Z",
      "updatedAt": "2020-12-06T20:58:34.265Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкентская область, Кибрайский район, населённый пункт Сергели",
      "toAddress": "Узбекистан, Ташкентская область, Кибрайский район, населённый пункт Сергели",
      "fromCoordinates": {
        "lng": 69.5081335,
        "lat": 41.417441799624
      },
      "toCoordinates": {
        "lng": 69.508103223476,
        "lat": 41.4174362850595
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607277464088.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607277464088.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Testn1",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        5,
        31
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 57,
      "categoryId": 20,
      "driverId": null,
      "creatorId": 5,
      "createdAt": "2020-12-06T17:58:13.361Z",
      "updatedAt": "2020-12-07T03:26:22.070Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит, Poljicka cesta",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит, Poljicka cesta",
      "fromCoordinates": {
        "lng": 16.4637855139305,
        "lat": 43.5065540293527
      },
      "toCoordinates": {
        "lng": 16.4637855139305,
        "lat": 43.5065540293527
      },
      "when": "planned",
      "date": "2020-12-07T15:59:00.000Z",
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 1,
      "viewing_driverIds": [
        6
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 58,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-06T21:00:17.341Z",
      "updatedAt": "2020-12-06T21:01:17.414Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.474392,
        "lat": 43.5038905996171
      },
      "toCoordinates": {
        "lng": 16.474358,
        "lat": 43.5038708996171
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607300156237.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607300156237.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Нужно перевезти мешок песка",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 2,
      "viewing_driverIds": [
        6,
        31
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 59,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-07T00:16:59.396Z",
      "updatedAt": "2020-12-07T03:24:16.864Z",
      "transportId": null
    },
    {
      "fromAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "toAddress": "Хорватия, Сплитско-Далматинская жупания, Сплит",
      "fromCoordinates": {
        "lng": 16.4468423996202,
        "lat": 43.5077051102291
      },
      "toCoordinates": {
        "lng": 16.4468423996202,
        "lat": 43.5077051102291
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": null,
      "order_events": null,
      "comment": null,
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 0,
      "viewing_counts": 3,
      "viewing_driverIds": [
        6,
        31,
        3
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 60,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 6,
      "createdAt": "2020-12-07T03:20:29.116Z",
      "updatedAt": "2020-12-07T04:06:32.166Z",
      "transportId": null
    },
    {
      "fromAddress": "Узбекистан, Ташкент, Яккасарайский район, улица Абдуллы Каххара, 47",
      "toAddress": "Узбекистан, Ташкент, Мирабадский район, махалля Шароф Рашидов",
      "fromCoordinates": {
        "lng": 69.2641691,
        "lat": 41.2780054996244
      },
      "toCoordinates": {
        "lng": 69.2692981,
        "lat": 41.305465
      },
      "when": "now",
      "date": null,
      "payment": {
        "type": "cash"
      },
      "status": "new",
      "start_date": null,
      "end_date": null,
      "accepted_time": null,
      "delivered_time": null,
      "type": "cargo",
      "cancelReason": null,
      "canceledByUserId": null,
      "canceledByUser": null,
      "attachments": [
        {
          "isVideo": false,
          "data": {
            "result": "https://api.ordertruck.uz/order_attachments/tm1607314088437.jpg",
            "preview": "https://api.ordertruck.uz/order_attachments/preview_tm1607314088437.jpg"
          }
        }
      ],
      "order_events": null,
      "comment": "Srochna pajalusta",
      "mileage": null,
      "cache_mileage_date": null,
      "status_comment": null,
      "distance": 4,
      "viewing_counts": 1,
      "viewing_driverIds": [
        5
      ],
      "receipt": null,
      "allowAdditionalLoad": null,
      "total_price": null,
      "viewedByDriver": null,
      "id": 61,
      "categoryId": 19,
      "driverId": null,
      "creatorId": 5,
      "createdAt": "2020-12-07T04:08:33.093Z",
      "updatedAt": "2020-12-07T04:08:39.781Z",
      "transportId": null
    }
  ]