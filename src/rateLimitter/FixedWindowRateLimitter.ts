import { RateLimitter } from "./RateLimitter";

interface RateLimitRecord {
  count: number;
  startTime: number;
}

export class FixedWindowRateLimitter implements RateLimitter {
  private readonly windowSize: number;
  private readonly maxRequest: number;
  private readonly store: Map<string, RateLimitRecord>;
  constructor(windowSizeInMS: number, maxRequest: number) {
    this.windowSize = windowSizeInMS;
    this.maxRequest = maxRequest;
    this.store = new Map();
  }

  isAllowed(key: string): boolean {
    const currentTime = Date.now();
    const record = this.store.get(key);

    if (!record) {
      this.store.set(key, { count: 1, startTime: currentTime });
      return true;
    }

    const elaspeTime = currentTime - record.startTime;

    if (elaspeTime < this.windowSize) {
      if (record.count > this.maxRequest) {
        return false;
      }
      record.count++;
      return true;
    }

    this.store.set(key, { count: 1, startTime: currentTime });
    return true;
  }
}
