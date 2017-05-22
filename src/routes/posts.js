const postRoutes = require('express').Router();
const db         = require('../db');


postRoutes.route('/')
    .get((req, res) => {
        db.pool.query('SELECT P.POST, P.CREATED_AT, U.USER_NAME FROM POSTS AS P INNER JOIN USERS AS U ON  P.CREATED_BY = U.USER_ID')
        .then((result) => {
            return res.status(200).json({
                data : result
            });
        })
        .catch((err) => {
            return res.status(503).json({
                status : 'failed',
                message : 'something went wrong'
            });
        });
    })
    .post((req, res ) => {
        const post = req.body.post;
        const userId = req.body.userId;
        
        db.pool.query('INSERT INTO POSTS SET ?', {POST : post, CREATED_BY : userId})
        .then((result) => {
            return res.status(200).json({
                status : 'success',
                data   : result
            });
        })
        .catch((err) => {
            return res.status(503).json({
                status : 'failed',
                message : 'something went wrong'
            });
        });
    });


postRoutes.route('/:id')
    .get((req, res) => {
       let id = req.params.id;
       db.pool.query('SELECT * FROM POSTS WHERE POST_ID = ?', [id])
       .then((result) => {
           return res.status(200).json(result);
       })
       .catch((err) => {
           return res.status(503).json({
               status : 'failed',
               message : 'service is not available'
           });
       });
    })
    .patch((req, res) => {
        res.status(200).json({
            status: 'success',
            message: 'patch route'
        });
    })
    .delete((req, res) => {
        let id = req.params.id;
        db.pool.query('DELETE FROM POSTS WHERE POST_ID = ?', [id])
        .then((result) => {
            return res.status(200).json({
                status : 'success',
                message : 'deleted successfully'
            });
        })
        .catch((err) => {
            return res.status(404).json({
                status : 'failed',
                message : 'not found'
            });
        });
    });


module.exports = {
    postRoutes
};
