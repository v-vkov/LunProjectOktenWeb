const db = require ('../../dataBase').getInstance();

module.exports = async (req, res) => {
    
    try {
         
    const UserModel = db.getModel('User');
    const user = req.body;
    
    await UserModel.findOne({
        where:{
            login: `${user.login}`,
            password: `${user.password}`
        }
    });

    res.json(user);

    } catch (e) {
        res.status(400).json(e.message);   
    }

}