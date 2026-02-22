import express from "express";
import { FixedWindowRateLimitter } from "./rateLimitter/FixedWindowRateLimitter";
import { RateLimiterMiddleware } from "./rateLimitter/RateLimiterMiddleware";

const app = express();

app.use(express.json());

// Configure limiter: 5 requests per 1 minute
const rateLimiter = new FixedWindowRateLimitter(60 * 1000, 5);
const rateLimiterMiddleware = new RateLimiterMiddleware(rateLimiter);

app.get("/api/test", rateLimiterMiddleware.handle, (req, res) => {
  res.json({
    success: true,
    messgae: "Request Successful",
    timeStamp: new Date(),
  });
});

export default app;
