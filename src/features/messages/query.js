const { strapi } = require("../../axios");

export const getMessagesByGq = async() => {
  let gq = `
        query{
            orders(sort:"id:ASC"){
                id
                text
                created_at
                visitor{
                    id
                    chat_id
                    username
                }
                users_permissions_user{
                    username
                    id
                }
                type{
                    id
                    name
                }
                checked
            }
        }
    `;

    const data = await strapi.request('post', 'graphql', {data:{
        query: gq
    }})

    return data.data

};
