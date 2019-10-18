const {userService} = require ('../../services');

module.exports = async (req,res) => {

    const users = await userService.findAll();
    
    res.json(users);
}