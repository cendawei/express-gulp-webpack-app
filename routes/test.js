/**
 * Created by cendawei on 2017/4/28.
 */
const express = require('express');
const router = express.Router();
const path = require('path')
const testControler = require('../controllers/test');

/* GET users listing. */
router.get('/list', testControler.getList)

module.exports = router;
