const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/create', userController.createUser);
router.put('/user/edit', userController.editUser);
router.delete('/user/delete', userController.deleteUser);
router.get('/user/getAll', userController.getAllUsers);
router.post('/user/findUserForLogin', userController.findUserForLogin);

module.exports = router;
