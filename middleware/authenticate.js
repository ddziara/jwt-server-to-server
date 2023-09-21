const tokenService = require("../service/token");

function authenticate(req, res, next) {
    const authorizationHeader = req.get("Authorization");

    if(!authorizationHeader) {
        return res.status(401).json("missing token");
    }

    // 1. extract token from header
    // "Bearer: <jwt-token>"
    const token = authorizationHeader.substring(8);

    // 2. decode the token
    const decodedToken = tokenService.verifyToken(token);

    if(!decodedToken) {
        return res.status(401).json("invalid token");
    }

    req.token = decodedToken;
    next();
}

module.exports = authenticate;