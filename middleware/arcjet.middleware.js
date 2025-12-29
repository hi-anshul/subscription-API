import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {requested:1});
    if(decision.isDenied()) {
        if(decision.reasion.isRateLimit()) {
            return res.status(429).json({ success: false, message: "Too Many Requests" });
        }
        if(decision.reasion.isBot()) {
            return res.status(403).json({ success: false, message: "Forbidden - Bot Detected" });
        }
        return res.status(403).json({ success: false, message: "Forbidden" });  
    }
    next();
 
} catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}       

export default arcjetMiddleware;