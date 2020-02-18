const express = require('express');
const router = express.Router();
const {
    addToWishlist: _addToWishlist,
    getWishlist: _getWishlist,
    deleteFromWishlist: _deleteFromWishlist,
} = require("../controllers/wishlistController")

router.post('/', _addToWishlist);
router.get('/', _getWishlist);
router.delete('/', _deleteFromWishlist);

module.exports = router;