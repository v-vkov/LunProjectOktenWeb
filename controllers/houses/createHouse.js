const db = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
    const houseToCreate = req.body;
    const houseModel = db.getModel('House');

    await houseModel.create(houseToCreate);
    
    res.end('OK');
    
    } catch (e){
        res.status(400).json(e.message);
    }
    
}