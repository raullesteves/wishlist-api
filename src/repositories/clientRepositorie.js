const knex = require("../util/db");

const createClient = async ({ clientName, clientEmail }) => {
    const result = await knex("clients").insert({ "nm_client": clientName, "email_client": clientEmail })
    return result;
};

const getClientByEmail = async (clientEmail) => {
    const result = await knex("clients").select().where("email_client", clientEmail);
    return result;
};

const updateClient = async ({clientEmail, clientNewName}) => {
    const result = await knex("clients").where("email_client", clientEmail).update({"nm_client": clientNewName});
    console.log("alo", result);
    return result ? {response: "updated"} : {response: "not found"};
}
const deleteClient = async (clientEmail) => {
    const result = await knex("clients").where("email_client", clientEmail).del();
    return result ? {response: "deleted"} : {response: "not found"};
}

module.exports = {
    createClient,
    getClientByEmail,
    updateClient,
    deleteClient,
}