export interface RateLimitter {
  isAllowed(key: string): boolean;
}
