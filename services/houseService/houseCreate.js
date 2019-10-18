const db = require ('../../dataBase').getInstance();

module.exports = async houseToCreate => {
    try {
        const houseModel = db.getModel('House');

        const house = await houseModel.create(houseToCreate);
    
        return house;
    
    } catch (e){
        throw new Error(e.message);
    }
}