const db = require ('../../dataBase').getInstance();

module.exports = async userId => {
    try {  
        const UserModel = db.getModel('User');

        const userById = await UserModel.findByPk(userId);

        return userById;

    } catch (e) {
        throw new Error (e.message);
    }
}