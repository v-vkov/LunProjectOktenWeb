const {tokenVerif} = require('../../helper')

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token){
            throw new Error('Token is undefinded')
        }

        const userFromToken = tokenVerif(token);

        req.user = userFromToken;
        next();

    } catch (e) {
        res.status(403).json(e.message);
    }
}