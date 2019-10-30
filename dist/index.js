'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

_mongoose2.default.connect('mongodb://localhost:27017/blog');

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', function (req, res) {
    var data = req.body;
    console.log(data);
    var post = new _Post2.default({
        title: data.title,
        text: data.text
    });

    post.save().then(function () {
        res.send({ status: 'ok' });
    });
});

app.get('/posts', function (req, res) {
    _Post2.default.find().then(function (err, posts) {
        if (err) {
            res.send(err);
            return;
        }

        res.json(posts);
    });
});

app.delete('/posts/:id', function (req, res) {
    _Post2.default.remove({
        _id: req.params.id
    }).then(function (post) {
        if (post) {
            res.send({ status: 'deleted' });
        } else {
            res.send({ status: 'error' });
        }
    });
});

app.put('/posts/:id', function (req, res) {
    _Post2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ status: 'updated' });
        }
    });
});

app.listen(3333, function () {
    console.log('SERVER STARTED!');
});