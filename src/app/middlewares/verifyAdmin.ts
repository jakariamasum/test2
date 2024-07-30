import { NextFunction, Request, Response } from "express";

require("dotenv").config();

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { decoded } = req;
  if (!decoded || decoded.role === "reporter") {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access - Invalid Admin",
    });
  }
  next();
};

module.exports = verifyAdmin;
