import * as _ from 'jquery';
import * as express from 'express';
import * as moment from 'moment';
import * as shell from 'shelljs';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = moment();
  const dateFormat = "YYYY-MM-DD HH:mm:ss";
  res.render('index', { title: '修改服务器时间', servertime:date.format(dateFormat) });
    }).put('/', function (req, res, next) {
    console.log(req.body.time);
    //必须返回$.ajax的"dataType"参数规定的类型，否则虽然服务器会200，客户端还是收不到success消息。。
     const cmd = 'date -s "' + req.body.time + '"'
     console.log(cmd);
     const ret = shell.exec(cmd);
     //if (ret.code == 0) {
             if(true){
         res.status(200).send({newtime:moment().format()});
     }
     //else
     //{
         //res.status(500).send({newtime:"hello world"});
     //}
    //res.send({newtime:"修改服务器时间成功，但是现在是自己的机器，所以根本就没有修改"});
    //res.write可以通过编译,因为它是node的api!但是不是express的!如果想发送消息到客户端,需要res.send()方法.或者write();end();方法对!!!
    //res.write("hello world");
    //res.end("sssssss");
})
module.exports = router;
