import { strapi } from "../../../../axios";

export const getLogByGq = async (key, { date, id }) => {
    const data = await strapi.request("POST", "/graphql", {
        data: {
            query: `
            query {
                logs{
                  position,
                  head,
                  count_ls,
                  start,
                  end,
                  command{
                    name,
                    id
                  },
                }
              }
                       
            `}
    })
    return data.data;
}

export const getLogsByGq = async (key, { date, id }) => {
    const data = await strapi.request("POST", "/graphql", {
        data: {
            query: `
            query {
                logs{
                  id,
                  position,
                  head,
                  count_ls,
                  start,
                  end,
                  command{
                    name,
                    id
                  },
                }
              }
                       
            `}
    })
    return data.data;
}

export const createLog = async (formData) => {
    const data = await strapi.createEntry('logs', formData)
    return data;
}