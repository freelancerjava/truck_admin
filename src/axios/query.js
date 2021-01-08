import strapi2, { strapi, user, setToken } from ".";

// const token = user ? `access_token=${user.id}` : ''

setToken(user.id)

export const getMakes = async (key, { filter } = { filter: false }) => {

    const path = filter != false ? `makes?filter=${filter}` : `makes`
    const data = await strapi.request('get', path)
    return data
};

export const getModels = async (key, { filter } = { filter: false }) => {

    const path = filter != false ? `models?filter=${filter}` : `models`
    const data = await strapi.request('get', path)
    return data
};

export const onFileUpload = async ({ onChange, values, field, selectedFile }) => {

    const formData = new FormData();
    formData.append(
        "file",
        selectedFile,
        // selectedFile.name
    );
    // console.log(selectedFile);
    // console.log(values);
    // console.log(field);
    const token = JSON.parse(localStorage.getItem('user')).id
    const data = await strapi.request("post",
        `admins/file?folder=upload`, { data: formData });
    // // console.log("data", data);

    values[field] = data.result

    onChange(values);

}
