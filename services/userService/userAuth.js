const db = require ('../../dataBase').getInstance();

module.exports = async auth => {
    try {
        const UserModel = db.getModel('User');
    
        const user = await UserModel.findOne({
            where:{
                login: `${auth.login}`,
                password: `${auth.password}`
            }
        });
        
        return user;

    } catch (e) {
        throw new Error (e.message);   
    }

}