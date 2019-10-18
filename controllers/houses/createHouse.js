const {houseService} = require ('../../services');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;

        await houseService.houseCreate(houseToCreate);
    
        res.end('OK');
    
    } catch (e){
        res.status(400).json(e.message);
    }
    
}