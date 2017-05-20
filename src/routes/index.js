// getting the express Router
const routes    = require('express').Router;

// importing routes
const postRoutes    = require('./routes/posts');
const userRoutes    = require('./routes/users');
const commentRoutes = require('./routes/comments');

routes.use('/users', usersRoute);
routes.use('/posts', posts);
routes.use('/comments', comments);


module.exports = {
    routes
}