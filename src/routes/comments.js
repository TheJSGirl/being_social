const commentRoutes = require('express').Router();
const db         = require('../db');
//defining all routes

commentRoutes.route('/')
    .get((req, res) => { 
        db.pool.query('SELECT * FROM COMMENTS')
            .then((result) => {
               return res.status(200).json({
                    status : 'success',
                    data   : result
                });
            })
            .catch((err) => {
                console.log( err);
                 return   res.status(503).json({
                        status  : 'failed',
                        message : 'service not available'
                    });
                });

    })
    
    .post((req, res) => {
       
       db.pool.query(' INSERT INTO COMMENTS SET ?', COMMENT)
        .then((result) => {
            return res.status(200).json({
                status : 'success',
                data : `{result} saved successfully`
            });
        })
        .catch((err) => {
            console.log(err);
           return res.status(503).json({
                status  : 'failed',
                message : 'not found'
            });
        });

    });
    

commentRoutes.route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        db.pool.query('SELECT * FROM COMMENTS WHERE COMMENT_ID = ?', [id])
        .then((row) => {
          return  res.status(200).json(row[0].COMMENT);
        })
        .catch( (err) => {
                return res.status(503).json({
                    status : 'failed',
                    message : 'service unavailable'
                })
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