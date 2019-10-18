const {userService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const user = req.body;
    
        await userService.userCreate(user);

        res.render('login');
        
    } catch (e) {
        res.status(400).json(e.message);   
    }
}