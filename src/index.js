// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

import mongoose from 'mongoose';

import Post from './models/Post';

mongoose.connect('mongodb://localhost:27017/blog');

const post = new Post({
    title: "Первая запись",
    text: "Hello Post!"
});

post.save().then(() => {
    console.log('OK!');
})