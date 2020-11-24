import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { strapi } from "../../axios";

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
  const query = `
  query {
      logs (where: { start_lte: "${date}", end_gte: "${date}", command:{ id_gt : ${0} }}, sort:"id:asc"){
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
             
  `
  const data = await strapi.request("POST", "/graphql", {
    data: {
      query: query
    }
  })
  return data.data;
}

export const getAllLogsByGq = async (key, { date, id }) => {
  const query = `
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
             
  `
  const data = await strapi.request("POST", "/graphql", {
    data: {
      query: query
    }
  })
  return data.data;
}

export const createLog = async (formData) => {
  const data = await strapi.createEntry('logs', formData)
  return data;
}