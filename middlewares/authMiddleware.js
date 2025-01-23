import User from "../models/User.js";
import { verifyToken } from "../utils/jwt.js";

const protect = async (req, res, next) => {
    let token;
    try {
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
            console.log(token);

            if (!token) {
                res.status(400).json({ message: "token not found" });
            }

            const decoded = verifyToken(token);
            console.log(decoded);
            req.user = await User.findByPk(decoded.data);
            next();
        } else {
            res.status(400).json({ message: "Header not found!" });
        }
    } catch (error) {
        console.log(error);
    }
};

export { protect };
