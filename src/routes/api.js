const express = require('express');
const adminController = require('../controller/adminController');
const postController = require('../controller/postController');
const subAdminController = require('../controller/subAdminController');
const userController = require('../controller/userController');
const router = express.Router();
router.get('/create', adminController.create);
router.get('/read', adminController.read);
router.get('/update', adminController.update);
router.get('/delete', adminController.delete);

router.get('/postAdmin',postController.create);
router.get('/postRead',postController.read);
router.get('/postUpdate',postController.update);
router.get('/postDelete',postController.delete);

router.get('/subAdmin',subAdminController.create);
router.get('/subAdminRead',subAdminController.read);
router.get('/subAdminUpdate',subAdminController.update);
router.get('/subAdminDelete',subAdminController.delete);

router.get('/user',userController.create);
router.get('/user',userController.read);
router.get('/user',userController.update);
router.get('/user',userController.delete);

module.exports = router;