const errorHandler = (err, req, res, next) => {

    err.message = err.message || 'Something went wrong';
    err.status = err.status || 404;
    err.type = err.type || 'error';

    res.status(err.status).json(err);


}


module.exports = errorHandler;