module.exports = function restrict(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.redirect(`/account/login?retUrl=${req.originalUrl}`);
    }

    next();
} 