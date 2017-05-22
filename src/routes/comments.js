const commentRoutes = require('express').Router();
const db            = require('../db');
//defining all routes

commentRoutes.route('/')
    .get((req, res) => { 
        db.pool.query('SELECT * FROM COMMENTS')
            .then((result) => {
                console.log(result);
               return res.status(200).json({
                    status : 'success',
                    data   : result
                });
            })
            .catch((err) => {
                console.log( err);
                 return   res.status(503).json({
                        status  : 'failed',
                        message : 'something went wrong'
                    });
                });
            })
            .post((req, res) => {
                let comment = req.body.comment;
                db.pool.query(' INSERT INTO COMMENTS SET ?', comment)
                .then((result) => {
                    return res.status(200).json({
                        status : 'success',
                        data : result
                    });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(503).json({
                        status  : 'failed',
                        message : 'something went wrong'
                    });
                });
            });
            
            
            
commentRoutes.route('/:id')
    .get((req, res) => {
         let id = req.params.id ;
         db.pool.query('SELECT * FROM COMMENTS WHERE COMMENT_ID = ?', [id])
         .then((row) => {
             return  res.status(200).json(row);
            })
            .catch( (err) => {
                return res.status(503).json({
                status : 'failed',
                message : 'service unavailable'
                });
            });
        })
    .patch((req, res) => {
        // let id = req.param.id;
        // let comment = req.param.comment;
        // let updateFields= {};
        // if(comment && comment.length <8){
        //     updateFields.comment = comment;
        // }
        // db.pool.query('UPDATE COMMENTS WHERE ID = SET ?', updateFields)
        // .then((result) => {
        //     return res.status(200).json(result);
        // })
        // .catch ((err) => {
        //     console.log(err);
        //     res.status(503).json({
        //         status :'failed',
        //         message : 'something went wrong'
        //     });
        // });
            return res.status(200).json({
                message : 'patch route'
            });
        })
    .delete((req, res) => {
        let id = req.params.id;
        db.pool.query('DELETE FROM COMMENTS WHERE COMMENT_ID = ?', [id])
        .then((result) => {
            return res.status(200).json({
                status : 'success',
                message : 'deleted successfully'
            });
        })
        .catch((err) => {
            return res.status(404).json({
                status  : 'failed', 
                message : 'not found'
            });
        });
        
    });

module.exports= {
    commentRoutes
}