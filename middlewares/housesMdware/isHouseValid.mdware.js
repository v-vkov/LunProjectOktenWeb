const {isHouseValid} = require ('../../validators');

module.exports = (req, res, next) => {

    try {
        const house = req.body;
        isHouseValid.isHouseValid(house);

        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
}