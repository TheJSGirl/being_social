const userRoutes = require('express').Router();
const db         = require('../db');

// defining all the routes 

userRoutes.route('/')
    .get((req, res) => {
        db.pool.query('SELECT * FROM USERS').then((result) => {
            return res.status(200).json({
                status : 'success',
                data : result
            });
        }).catch((err) => {
            console.log(err);
            return res.status(503).json({
                status : 'failed',
                message : 'Service not available'
            });
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