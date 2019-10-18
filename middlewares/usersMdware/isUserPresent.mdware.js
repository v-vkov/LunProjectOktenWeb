const {userService} = require ('../../services');

module.exports = async (req, res, next) => {
    try {
        const {userId} = req.params; 
        const {id} = req.user;

        if (+userId !== id) {
            throw new Error ("Sorry, it isnt your ID");
        }

        const isUserPresent = await userService.userById(userId);

        if (!isUserPresent) {
            throw new Error (`User with ${userId} ID is not found`);
        }

        req.user = isUserPresent;
        next(); 
    
    } catch (e) {
        res.status(400).json(e.message);
    }
}