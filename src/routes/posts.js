const postRoutes = express.Router();


postRoutes.route('/')
.post((req, res ) => {
    res.json({
        message: 'post route'
    });
})
.get((req, res) => {
    res.status(200).json({
        message:'get route'
    });
});


postRoutes.route('/:id')
.get((req, res) => {
    res.status(200).json({
        message: 'get route'
    });
})
.patch((req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'patch route'
    });
})
.delete((req, res) => {
    res.status(200).json({
        status:'success',
        message: 'delete route'
    });
});


module.exports = {
    postRoutes
};
