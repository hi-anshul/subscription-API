const errorMiddleware = (err, req, res, next) => {
    try {
        console.error(err);

        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';

        res.status(statusCode).json({
            success: false,
            message: message,
        });
    } catch (error) {
        next(error);
    }
    
}

export default errorMiddleware;