const db = require ('../../dataBase').getInstance();

module.exports = async (req,res) => {
    
    const UserModel = db.getModel('User');
    const users = await UserModel.findAll();
    res.json(users);
}