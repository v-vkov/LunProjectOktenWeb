module.exports = (sequelize, dataTypes) => {

    const House = sequelize.define( 'House', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: dataTypes.STRING
        },
        rooms: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false
        }
     }, {
            tableName: 'house',
            timestamps: false
        })
    
        return House;
    }