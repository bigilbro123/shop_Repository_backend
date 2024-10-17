const jwt = require('jsonwebtoken');

const athuUser = async (req, res, next) => {
    try {
        const token = req.cookies?.jwt || req.headers['authorization']?.replace('Bearer ', '');


        // console.log(token);

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Failed to authenticate token' });
            }
            // console.log(decoded.userdetail);


            req.user = decoded.userdetail;
            // console.log(req.user._id + " " + req.user.email);

            next();
        });

    } catch (error) {
        res.status(500).json({
            error: "JWT token error",
        });
    }
};

module.exports = athuUser;
