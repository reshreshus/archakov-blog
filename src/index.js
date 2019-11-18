// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

import mongoose from 'mongoose';
import Post from './models/Post';
import express from 'express';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost:27017/blog');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/posts', (req, res) => {
    const data = req.body;
    console.log(data);
    const post = new Post({
        title: data.title,
        text: data.text
    });
    
    post.save().then(() => {
        res.send({ status: 'ok'});
    })
});

app.get('/posts', (req, res) => {
    Post.find().then( (err, posts) => {
        if (err) {
            res.send(err);
            return;
        }

        res.json(posts);
    });
});

app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id).then( (err, post) => {
        if (err) {
            res.send(err);
            return;
        }

        res.json(post);
    });
});


app.delete('/posts/:id', (req, res) => {
    Post.remove({
        _id: req.params.id
    }).then(post => {
        if (post) {
            res.send({status: 'deleted'});
        } else {
            res.send({status: 'error'})
        }
    })
});

app.put('/posts/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.json({status: 'updated'});
        }
    });
})

app.listen(3333, () => {
    console.log('SERVER STARTED!');
})