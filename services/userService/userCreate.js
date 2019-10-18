const db = require ('../../dataBase').getInstance();

module.exports = async user => {
    try {
        const UserModel = db.getModel('User');

        await UserModel.create(user);

    } catch (e) {
        res.status(400).json(e.message);
    }
}