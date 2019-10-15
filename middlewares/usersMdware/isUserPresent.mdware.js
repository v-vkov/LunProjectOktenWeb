const db = require ('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    
    try {
    const {userId} = req.params; 
    const UserModel = db.getModel('User');

    const isUserPresent = await UserModel.findByPk(userId);

    if (!isUserPresent) {
        throw new Error (`User with ${userId} ID is not found`);
    }

    console.log(isUserPresent);

    req.user = isUserPresent;
    next(); 
    
    } catch (e) {
    res.status(400).json(e.message);
    }
}