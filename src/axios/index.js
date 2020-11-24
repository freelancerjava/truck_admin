import Strapi from 'strapi-sdk-javascript';

export const apiUrl = 'http://network.loc'

export const serverPort = 1338

export const mapPort = 8080

export const mapUrl = `${apiUrl}:${mapPort}/styles/klokantech-basic/{z}/{x}/{y}.png`

export const strapi = new Strapi(`${apiUrl}:${serverPort}`);


