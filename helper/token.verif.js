const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../config/config');

let user;

module.exports = token => {
    try {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                throw new Error("TOKEN IS NOT VALID")
            }

            return user = decoded;
        })
    } catch (e) {
        throw new Error ("Something wrong with token verification")
    }
}