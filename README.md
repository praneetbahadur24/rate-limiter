# Rate-Limiter

- It is a mechanism that controls that how many requests a client(IP/USER/API key) can make to server within defined time period.
- It protect your application from

  - Abuse & brute force attack
  - Traffic spikes
  - Server overload
  - Denial-of-service attack(DOS)

- A clean, extensible Rate Limiter implementation built with:
  - TypeScript
  - Express
  - Strategy Design Pattern
  - Middleware abstraction

# Feature

- Fixed Window Rate Limiting
- Strategy Pattern (pluggable algorithms)
- Express Middleware Integration
- Type-safe implementation
- Clean architecture & separation of concerns
- Easily extendable (Redis / Sliding Window / Token Bucket)

🏗 Architecture

- This project follows:
  - Strategy Pattern → IRateLimiter
  - Dependency Injection → Middleware receives limiter instance
  - Single Responsibility Principle
  - Clean folder structure

# Project Structure

```
node-rate-limiter/
├── src/
│   ├── rateLimiter/
│   │   ├── IRateLimiter.ts
│   │   ├── FixedWindowRateLimiter.ts
│   │   └── RateLimiterMiddleware.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```
