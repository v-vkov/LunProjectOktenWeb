const {houseService} = require ('../../services');

module.exports = async (req, res, next) => {
    try {
        const {houseId} = req.params;
    
        const isHousePresent = await houseService.findOne(houseId);

        if (!isHousePresent) {
            throw new Error (`House with ${houseId} ID is not found`);
        }

        req.house = isHousePresent;
        next(); 
    
    } catch (e) {
        res.status(400).json(e.message);
    }
}