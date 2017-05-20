const userRoutes = require('express').Router;

// defining all the routes 

userRoutes.route('/')
    .get((req, res) => {
        res.status(200).json({
            message : 'GET /users route is running'
        });
    })
    .post((req, res) => {
        res.status(200).json({
            message : 'POST /users route is running'
        });
    });

userRoutes.route('/:id')
    .get()
    .patch()
    .delete();

module.exports = {
    userRoutes
}