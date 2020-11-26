import Strapi from 'strapi-sdk-javascript';

export const apiUrl = 'https://admin.socket.uz'

export const serverPort = 443

export const mapPort = 8080

export const mapUrl = `${apiUrl}:${mapPort}/styles/klokantech-basic/{z}/{x}/{y}.png`

export const strapi = new Strapi(`${apiUrl}:${serverPort}`);


