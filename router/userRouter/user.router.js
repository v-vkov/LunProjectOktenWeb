const rout = require ('express').Router();

const {userMdware} = require ('../../middlewares');
const {user} = require ('../../controllers');

rout.get('/', user.findUser);
rout.get('/:userId', userMdware.isUserPresentMdware, userMdware.checkAccessToken, user.getById);
rout.post('/', userMdware.isUserValidMdware, user.createUser);
rout.post('/auth', user.authUser);

module.exports = rout;