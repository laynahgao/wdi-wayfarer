// require mongoose and connect to database
var mongoose = require('mongoose');
var uri = 'http://localhost:3000/';
var options = { useNewUrlParser: true };
let User = require('./user');
let Post = require('./post')

module.exports = {
  User: User,
  Post: Post
};

mongoose.connect(uri, options);

var mdb = mongoose.connection;

mdb.on('error', console.error.bind(console, 'connection error:'));
