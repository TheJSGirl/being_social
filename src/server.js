const express = require ('express');
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');


//app init
const app = express();

//routes
const posts = require('./routes/posts');
const users = require('./routes/users');
const comments = require('./routes/comments');