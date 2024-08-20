import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      decoded?:
        | {
            userId: string;
            role: string;
          }
        | JwtPayload;
    }
  }
}
