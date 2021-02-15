import { strapi, user } from "../../axios";
import { useQuery } from "react-query";

const token = user ? `access_token=${user.id}` : ''

export const getStatistic = async (key, { filter } = { filter: false }) => {
    const path = filter ? `admins/statistic?filter=${filter}` : `admins/statistic`
    const data = await strapi.request('get', path)
    return data.result.data
  };