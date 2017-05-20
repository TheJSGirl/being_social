// getting the express Router
const routes    = require('express').Router();

// importing routes
const {postRoutes}    = require('./posts');
const {userRoutes}    = require('./users');
const commentRoutes = require('./comments');

routes.use('/users', userRoutes);
routes.use('/posts', postRoutes);
routes.use('/comments', commentRoutes.commentRoutes);


module.exports = {
    routes
}