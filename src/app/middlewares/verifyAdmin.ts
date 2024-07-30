import { NextFunction, Request, Response } from "express";

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.decoded &&
    typeof req.decoded !== "string" &&
    req.decoded.role === "admin"
  ) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Forbidden - Admin access required",
      error: "",
    });
  }
};

export default verifyAdmin;
