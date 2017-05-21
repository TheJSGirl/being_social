
const postRoutes = require('express').Router();

postRoutes.route('/')
    .post((req, res ) => {
        const post = req.body.post;
        db.pool.query('INSERT INTO POSTS SET ?', post)
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
    })
    .get((req, res) => {
        db.pool.query('SELECT * FROM POSTS')
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
