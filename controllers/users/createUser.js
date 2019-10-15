const db = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {
    const userToCreate = req.body;
    const UserModel = db.getModel('User');

    await UserModel.create(userToCreate);
    
    res.render('login'); 
}