const commentRoutes = require('express').Router();

//defining all routes

commentRoutes.route('/')
    .post((req, res) => {
        res.status(200).json({
            message: 'post route'
        });

    })
    .get((req, res) => { 
        res.status(200).json({
            message:'get route'
        });
    });

commentRoutes.route('/:id')
    .get((req, res) => {
        res.status(200).json({
            message: 'get route'
        });
    })
    .patch((req, res) => {
        res.status(200).json({
            message: 'patch route'
        });
    })
    .delete((req, res) => {
        res.status(200).json({
            message: 'delete route'
        });
    });

module.exports= {
    commentRoutes
}