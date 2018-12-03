const express = require('express');
const router = express.Router();

const deudoresController =require ('../controllers/deudoresController');
const loginController = require('../controllers/loginController');

router.get('/',deudoresController.list);
router.post('/add', deudoresController.save);
router.get('/delete/:id', deudoresController.delete);
router.get('/update1/:id', deudoresController.update1);
router.post('/update2/:id', deudoresController.update2);
router.get('/call1/:id', deudoresController.call1);
router.get('/login', loginController.startLog);



module.exports = router;