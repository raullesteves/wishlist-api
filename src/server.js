const app = require('./app');

app.listen(process.env.PORT, function () {
    console.log(`app listening on port ${process.env.PORT}`)
})