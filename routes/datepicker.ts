/// <reference path="../typings/tsd.d.ts" />
import * as express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '修改服务器时间', servertime:Date.now() });
});
router.put('/servertime', function (req, res, next) {
    console.log(req.body);
    res.write("hello world");
})
module.exports = router;
