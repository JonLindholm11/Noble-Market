export const requireRole = (allowedRoleIds) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }
    if (!allowedRoleIds.includes(req.user.role_id)) {
      return res.status(403).json({
        error: "Insufficient permissions",
        message: `This action requires role ${allowedRoleIds.join(" or ")}`,
      });
    }

    next();
  };
};
