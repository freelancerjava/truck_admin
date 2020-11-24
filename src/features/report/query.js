import { strapi } from "../../axios";

export const getRepcats = async () => {
    const data = await strapi.getEntries('repcats');
    // console.log(data);
    return data;
}

export const createReport = async (formData) => {
    const data = await strapi.createEntry('reports', formData)
    return data;
}

export const updateReport = async (formData) => {
    const data = await strapi.updateEntry('reports', formData.id, formData)
    return data;
}

export const getReportsByGq = async (key, { date }) => {
    const data = await strapi.request("POST", "/graphql", {
        data: {
            query: `
            query {
                reports(where: { date: "${date}" }, sort:"id:asc") {
                  id
                  dej
                  dej_pom
                  royxat_boyicha
                  safda
                  safar
                  tatil
                  gospital
                  uy_karantin
                  command {
                    name
                  }
                  repcat {
                    id
                    name
                  }
                  file {
                    url
                  }
                }
              }
              
            `}
    })

    // const data = await strapi.getEntries('reports');

    // console.log("data", data.data.reports)
    return data.data;
}

export const getReportByGq = async (key, { date, id }) => {
    const data = await strapi.request("POST", "/graphql", {
        data: {
            query: `
            query {
                reports(where: { date: "${date}", command:{ id: ${id} } }, sort:"id:desc") {
                  id
                  dej
                  dej_pom
                  royxat_boyicha
                  safda
                  safar
                  tatil
                  gospital
                  uy_karantin
                  command {
                    name
                  }
                  repcat {
                    id
                    name
                  }
                  file {
                    url
                  }
                }
              }         
            `}
    })

    // const data = await strapi.getEntries('reports');

    // console.log("data", data.data.reports)
    return data.data;
}