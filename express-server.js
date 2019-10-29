const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const posts = [
    {
        title: 'Hello Blog',
        text: 'Lorem ne lorem'
    }
]

app.get('/posts', function(req, res) {
    return res.send(posts);
});

app.post('/posts', function(req, res) {
    const data = req.body;
    console.log('post /posts data' + data);
    posts.push(data)
    return res.send(posts);
})

app.get('/posts/:id', function(req, res) {
    const id = req.param.id;
    return res.send(posts[id]);
}); 

app.listen(3333, function() {
    console.log('Server working');
});