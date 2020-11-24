import { strapi } from "../../../axios";


export const loginAction = async (dataObj) => {
    const data = await strapi.login(dataObj.email, dataObj.password);

    // const time = new Date(data.created).getTime() + data.ttl * 1000;
    // localStorage.setItem('token', data.id);
    // localStorage.setItem('expiresOn', time)
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
}

export const uploadFile = async (formdata) => {
    const form = new FormData();
    form.append('files', formdata.fileInputElement.files[0], 'file-name.ext');
    // form.append('files', fileInputElement.files[1], 'file-2-name.ext');
    const files = await strapi.upload(form);
    return files;
}

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

