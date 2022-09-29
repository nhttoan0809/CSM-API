const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {

    console.log('\n\n\nMIDDLEWARE CHECK TOKEN HERE...\n');

    // Check header request are /login or /register
    console.log('--> Note: This step will be ignored if url request is /login or /register');

    switch (req.path) {
        case '/login':
            console.log("url request is auth/login: true");
            console.log("----> Ignore validate token");
            console.log('\nEND CHECK TOKEN!\n\n\n');
            return next()

        case '/register':
            console.log("url request is auth/logout: true");
            console.log("----> Ignore validate token");
            console.log('\nEND CHECK TOKEN!\n\n\n');
            return next()

        default:
            // Get token
            const accesToken = req.headers['authorization']
            console.log('accessToken: ', accesToken);

            if (!accesToken) {
                console.log("--------------> ACCESS TOKEN IS EMPTY");
                console.log('\nEND CHECK TOKEN!\n\n\n');
                return res.sendStatus(401)
            }

            // // verify token
            jwt.verify(accesToken, process.env.SECRET_KEY, (error, data) => {
                if (error) {
                    console.log("--------------> Invalid Token");
                    console.log('\nEND CHECK TOKEN!\n\n\n');
                    return res.sendStatus(401)
                }
                else {
                    console.log("--------------> Valid Token");
                    console.log('\nEND CHECK TOKEN!\n\n\n');
                    return next()
                }
            })
    }

}