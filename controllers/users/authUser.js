const {userService} = require('../../services');

const {tokenizor} = require('../../helper');

module.exports = async (req, res) => {
    try {
        const auth = req.body;
    
        const user = await userService.userAuth(auth);

        const token = tokenizor({user})
        res.json(token);
        
    } catch (e) {
        res.status(400).json(e.message);   
    }
}