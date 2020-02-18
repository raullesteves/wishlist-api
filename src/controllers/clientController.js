const {
    createClient: _createClient,
    getClientByEmail: _getClientByEmail,
    updateClient: _updateClient,
    deleteClient: _deleteClient,
} = require("../repositories/clientRepositorie")

const createClient = async (req, res) => {
    try {
        const {clientEmail, clientName} = req.body;
        if (clientEmail) res.status(400).send({status: false, message: "send a client email"});
        if (clientName) res.status(400).send({status: false, message: "send a client name"});

        await _createClient({clientEmail, clientName});
        res.status(201).send({status: true, response: "client created"});
    } catch (error) {
        res.status(400).send({status: false, message: error.detail});
    }
}
const getClientByEmail = async (req, res) => {
    try {
        const { clientEmail } = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        const [response] = await _getClientByEmail(clientEmail);
        if (!response) res.status(200).send({status: false, message: "user not found"});
        res.status(200).send({status: true, response});
    } catch (error) {
        res.status(400).send({status: false, message: error.detail});
    }
}

const updateClient = async (req, res) => {
    try {
        const { clientNewName } = req.body;
        if (!clientNewName) res.status(400).send({status: false, message: "send a client new name"});
        
        const { clientEmail } = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        await _updateClient({clientEmail, clientNewName});

        res.status(200).send({status: true, message: "client updated"})
    } catch (error) {
        res.status(400).send({status: false, message: error});
    }
}

const deleteClient = async (req, res) => {
    try {
        const {clientEmail} = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        const response = await _deleteClient(clientEmail);
        res.status(200).send({status: true, response});
    } catch (error) {
        res.status(400).send({status: false, message: error});
    }
}

module.exports = {
    createClient,
    getClientByEmail,
    updateClient,
    deleteClient,
}