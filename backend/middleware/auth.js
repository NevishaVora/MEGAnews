const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {

    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ message: "Token is required" });
    }
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    } else {
        return res.status(400).json({ message: "Invalid token format" });
    }
    try {
        const verifytoken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.auth = verifytoken;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            console.log("🚀 ~ verifyToken ~ err.name:", err.name)
            return res.status(401).json({ message: "Token has expired" });
        }
        return res.status(401).json({ message: "Invalid token. Authentication failed." });
    }
}

module.exports = {
    verifyToken
}