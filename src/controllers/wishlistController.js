const {
    addToWishlist: _addToWishlist,
    deleteFromWishlist: _deleteFromWishlist,
} = require("../repositories/wishlistRepositorie");

const { getWishlist: _getWishlist, isAValidProduct } = require("../services/wishlistServices")

const addToWishlist = async (req, res) => {
    try {
        const {clientEmail} = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        const {productId} = req.body;
        if (!productId) res.status(400).send({status: false, message: "send a product id"});
        
        if (!(await isAValidProduct(productId))) {
            res.status(400).send({status: false, message: "product does not exist"});
        }
        const response = await _addToWishlist({clientEmail, productId});
        res.status(201).send({status: true, response});
    } catch (error) {
        res.status(400).send({status: false, message: error});
    }
}

const getWishlist = async (req, res) => {
    try {
        const { clientEmail } = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        const response = await _getWishlist(clientEmail);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send({status: false, message: error});
    }
}

const deleteFromWishlist = async (req, res) => {
    try {
        const {clientEmail} = req.query;
        if (!clientEmail) res.status(400).send({status: false, message: "send a client email"});

        const {productId} = req.body;
        if (!productId) res.status(400).send({status: false, message: "send a product id"});

        const response = await _deleteFromWishlist({clientEmail, productId});
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({status: false, message: error});
    }
}

module.exports = {
    addToWishlist,
    getWishlist,
    deleteFromWishlist,
}