module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define( 'User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        login: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }
     }, {
            tableName: 'user',
            timestamps: false
        })
    
        return User;
    }