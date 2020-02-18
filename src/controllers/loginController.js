let jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.TEST_USER_LOGIN && password === process.env.TEST_USER_PASSWORD) {
        var token = jwt.sign({username}, "strongPassword", {
            expiresIn: 7200
        });

        res.json({
            success: true,
            message: 'token created! :)',
            toke: token
        });
    }
};

module.exports = { login }