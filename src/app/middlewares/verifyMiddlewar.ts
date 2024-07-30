import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { verifyToken } from "../utils/tokenGenerateFunction";
require("dotenv").config();

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access - Missing authorization header",
      error: "",
    });
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access - Missing token",
      error: "",
    });
  }

  try {
    const decoded = verifyToken(token, config.jwt_secret as string);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access - Invalid token",
        error: "Invalid token",
      });
    }

    req.decoded = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access - Invalid token",
      error: err,
    });
  }
};

export default verifyJWT;
