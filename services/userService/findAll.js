const db = require ('../../dataBase').getInstance();

module.exports = async () => {
    try{
        const UserModel = db.getModel('User');

        const users = await UserModel.findAll();

        return users;
        
    } catch (e) {
        throw new Error (e.message);
    }
}