const db = require ('../../dataBase').getInstance();

module.exports = async (req,res) => {
    
    const houseModel = db.getModel('House');
    const houses = await houseModel.findAll();
    res.json(houses);
}
