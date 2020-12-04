const { myAxios } = require("../../axios");

export const getCats = async () => {
    const data = await myAxios.request('post', 'categories')

    console.log(data);    

};
