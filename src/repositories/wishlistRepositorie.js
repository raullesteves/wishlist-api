const knex = require("../util/db");

const checkIfClientExists = async (clientEmail) => {
    const [clientExists] = await knex("clients").count().where("email_client", clientEmail);
    return +clientExists.count;
}

const addToWishlist = async ({ clientEmail, productId }) => {
    const [productIsAlreadyOnWishlist] = await knex("wishlist").count().where("email_client", clientEmail).andWhere("id_product", productId);
    if (+productIsAlreadyOnWishlist.count) return {response: "product is already on the wishlist"};
    if (!(await checkIfClientExists(clientEmail))) return {status: false, response: "client does not exists"};
    else {
        await knex("wishlist").insert({ "email_client": clientEmail, "id_product": productId })
        return {response: "product added to wishlist"};
    }
};

const getWishlist = async (clientEmail) => {
    if (!(await checkIfClientExists(clientEmail))) return {status: false, response: "client does not exists"};
    const result = await knex("wishlist").select().where("email_client", clientEmail);
    return result;
};

const deleteFromWishlist = async ({clientEmail, productId}) => {
    if (!(await checkIfClientExists(clientEmail))) return {status: false, response: "client does not exists"};
    const result = await knex("wishlist").where("email_client", clientEmail).andWhere("id_product", productId).del();
    return result ? {response: "deleted"} : {response: "not found"};
}

module.exports = {
    addToWishlist,
    getWishlist,
    deleteFromWishlist,
}