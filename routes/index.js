var express = require('express');
var router = express.Router();
var todoModule = require('../model');

//渲染首页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//得到数据库中全部数据
router.get('/todos', function(req, res, next) {
  todoModule.find({},function(err,todos){
    if (err) {
      res.send({code: 0, msg: '查询错误!'});
    } else {
      res.send(todos);
    }
  })
});

//像服务器存储从客户端传过来的数据并返回给客户端
router.post('/todos', function(req, res) {
  todoModule.creat(req.body,function(err,todo){
    if (err) {
      res.send({code: 0, msg: '查询错误!'});
    } else {
      res.send(todo);
    }
  })
});

module.exports = router;
