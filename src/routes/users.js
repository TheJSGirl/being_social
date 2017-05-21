const userRoutes = require('express').Router();
const db         = require('../db');

// defining all the routes 

userRoutes.route('/')
    .get((req, res) => {
        db.pool.query('SELECT * FROM USERS')
            .then((result) => {
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
        const user_data = {
            user_name : req.body.user_name,
            user_email : req.body.user_email,
            user_pass : req.body.user_pass
        };
        db.pool.query('INSERT INTO USERS SET ?', user_data)
        .then((result) => {
            res.status(200).json({
                status: 'success',
                message : `{user_data}saved successfully`
            });
        })
        .catch((err) => {
            res.status(503).json({
                status : 'failed',
                message : 'something went wrong'
            });
        });
    });

userRoutes.route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        db.pool.query('SELECT * FROM USERS WHERE USER_ID = ?', [id])
            .then((row) => {
                console.log(row[0].USER_NAME);
                return res.status(200).json(row);
            }).catch((err) => {
                console.log(err);
                return res.status(503).json({
                    status : 'failed',
                    message : 'Service not available'
                });
            });
    })
    .patch((req, res) => {
        res.status(200).json({
            message: 'user patch'
        });
    })
    .delete((req, res) => {
        let id = req.params.id;
        db.pool.query('DELETE FROM USERS WHERE ID = ?', [id])
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

userRoutes.route('/login')
    .post((req, res) => {
        res.status(200).json({
            message: 'login route'
        });
    });



module.exports = {
    userRoutes
}