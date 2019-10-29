"use strict";

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


var arr = [1, 2, 3, 4];
var result = arr.map(function (value) {
  return value * 2;
});

console.log(result);