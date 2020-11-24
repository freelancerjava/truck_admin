import { strapi } from "../../axios";

export const getSrcByGq = async () => {
  const query = `
    query {
        srcObjects{
          id
          name
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

export const getDeviceByGq = async () => {
  const query = `
    query {
        devices{
          id
          name
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


export const getUtilsByGq = async () => {
  const query = `
    query {
        srcObjects(sort:"id:asc"){
          id
          name
        }
        devices(sort:"id:asc"){
          id
          name
        }
        records(sort:"id:asc"){
          id
          count
          src_object{
            id
          }
          device{
            id
          }
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

export const createRecord = async ({ data, records }) => {
  console.log(data.records);
  console.log(records);
  let tempData = []
  data.records.map(item => tempData.push(item.id))
  let tempRecords = []
  records.map(item => tempRecords.push(item.id))

  tempRecords.map((item, key) => {
    if (!tempData.includes(item)) strapi.deleteEntry('records', item)
  })

  data.records.map((item, key) => {
    if (item.id) strapi.updateEntry('records', item.id, item)
    else strapi.createEntry('records', item)
  })

  // const data = await strapi.updateEntry('records', records)
  // return data
}
