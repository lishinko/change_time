"use strict";
/// <reference path="../typings/tsd.d.ts" />
const express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '修改服务器时间', servertime: Date.now() });
}).put('/servertime', function (req, res, next) {
    console.log(req.body);
    res.send("hello world");
});
module.exports = router;
