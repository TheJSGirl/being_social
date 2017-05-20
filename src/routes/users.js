const userRoutes = require('express').Router();

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
    .get((req, res) => {
        res.status(200).json({
            message:'user get rout'
        });
    })
    .patch((req, res) => {
        res.status(200).json({
            message: 'user patch'
        });
    })
    .delete((req, res) => {
        res.status(200).json({
            message: 'delete route'
        })
    });

userRoutes.route('/login')
    .post((req, res) => {
        res.status(200).json({
            message: 'login route'
        });
    });



module.exports = {
    userRoutes
}