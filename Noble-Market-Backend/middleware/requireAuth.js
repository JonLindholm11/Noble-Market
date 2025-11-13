import getUserFromToken from "./getUserFromToken.js";

export const requireAuth = (req, res, next) => {
  getUserFromToken(req, res, (error) => {
    if (!req.user) {
      return res.status(401).json({
        error: "Authentication required",
        message: "No token provided or invalid token",
      });
    }

    next();
  });
};
