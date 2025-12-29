import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ success: false, message: "unauthorize" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id)
        
        if (!user) {
            return res.status(401).json({ success: false, message: "unauthorize" });
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ success: false, message: "unauthorize" });
    }
};

export default authorize