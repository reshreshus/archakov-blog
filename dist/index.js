'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

_mongoose2.default.connect('mongodb://localhost:27017/blog');

var post = new _Post2.default({
    title: "Первая запись",
    text: "Hello Post!"
});

post.save().then(function () {
    console.log('OK!');
});