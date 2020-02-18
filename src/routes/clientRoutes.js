const express = require('express');
const router = express.Router();
const { createClient,
    getClientByEmail,
    updateClient,
    deleteClient } = require('../controllers/clientController');

router.post('/', createClient);
router.get('/', getClientByEmail);
router.put('/', updateClient);
router.delete('/', deleteClient);

module.exports = router;