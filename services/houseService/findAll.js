const db = require ('../../dataBase').getInstance();

module.exports = async () => {
    try {
        const houseModel = db.getModel('House');

        const houses = await houseModel.findAll();

        return houses;
    } catch(e){
        throw new Error (e.message);
    }
}