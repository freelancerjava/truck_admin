import Strapi from 'strapi-sdk-javascript';

export const apiUrl = 'http://fork.uz'

export const serverPort = 4444

export const strapi = new Strapi(`${apiUrl}:${serverPort}`);


