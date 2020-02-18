require("dotenv").config();
const express = require('express');
const app = express();
const ping = require('./routes/pingRoute');
const clientRoutes = require('./routes/clientRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const loginRoute = require('./routes/loginRoute');
const { checkToken } = require("./util/jwt");

app.use(express.json());
app.use('/ping', ping);
app.use('/client', checkToken, clientRoutes);
app.use('/wishlist', checkToken, wishlistRoutes);
app.use('/login', loginRoute);

module.exports = app;