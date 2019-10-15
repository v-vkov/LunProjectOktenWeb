const rout = require ('express').Router();

const {userMdware} = require ('../../middlewares');
const {user} = require ('../../controllers');

rout.get('/', user.findUser);
rout.get('/:userId', userMdware.isUserPresentMdware, user.getById);
rout.post('/sign', userMdware.isUserValidMdware, user.createUser);
rout.post('/log', user.authUser);

module.exports = rout;