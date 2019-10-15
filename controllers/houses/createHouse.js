const db = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {

    const houseToCreate = req.body;
    const houseModel = db.getModel('House');

    await houseModel.create(houseToCreate);
    
    res.end('OK');
    
}