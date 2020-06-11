const jwt = require('jsonwebtoken');
const config = require('config');

// next is basically saying move on to the next middleware. it is needed for every middleware that you use
module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // check if not token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Toke is not valid' });
    }
}