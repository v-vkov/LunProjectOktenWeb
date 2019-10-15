const rout = require ('express').Router();

const {houseMdware} = require ('../../middlewares');
const {house} = require ('../../controllers')

rout.post('/', houseMdware.isHouseValidMdware, house.createHouse);
rout.get('/', house.findHouses);
rout.get('/:houseId', houseMdware.isHousePresentMdware, house.getHouseById);

module.exports = rout;