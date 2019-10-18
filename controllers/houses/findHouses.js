const {houseService} = require('../../services');

module.exports = async (req,res) => {
    
    const houses = await houseService.findAll();
    
    res.json(houses);
}
