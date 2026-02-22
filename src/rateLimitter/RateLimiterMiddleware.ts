import { Request, Response, NextFunction } from "express";
import { RateLimitter } from "./RateLimitter";

export class RateLimiterMiddleware {
  constructor(private readonly rateLimiter: RateLimitter) {}

  public handle = (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? req.socket.remoteAddress;
    if (!key) {
      return res.status(400).json({
        success: false,
        message: "Unable to determine client IP",
      });
    }
    console.log("IP", key);
    const allowed = this.rateLimiter.isAllowed(key);
    if (!allowed) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later.",
      });
    }
    next();
  };
}
