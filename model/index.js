var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.223.74:27017/zrrtodo');
//定义一个模型
module.exports = mongoose.model('todo',mongoose.Schema({
    text:String
}))
