// getting the express Router
const routes    = require('express').Router;

// importing routes
const postRoutes    = require('./posts');
const userRoutes    = require('./users');
const commentRoutes = require('./comments');

routes.use('/users', usersRoute);
routes.use('/posts', posts);
routes.use('/comments', comments);


module.exports = {
    routes
}