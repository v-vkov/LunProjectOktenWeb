const db = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {
    
    const UserModel = db.getModel('User');
    const user = req.body;
    
    await UserModel.findOne({
        where:{
            login: `${user.login}`,
            password: `${user.password}`
        }
    });

    res.json(user);

}