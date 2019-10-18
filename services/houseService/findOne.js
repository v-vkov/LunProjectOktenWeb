const db = require ('../../dataBase').getInstance();

module.exports = async houseId => {  
    try {
        const houseModel = db.getModel('House');
        const isHousePresent = await houseModel.findByPk(houseId);

        if (!isHousePresent) {
            throw new Error (`House with ${houseId} ID is not found`);
        }

        return isHousePresent;
    
    } catch (e) {
        throw new Error (e.message);
    }
}