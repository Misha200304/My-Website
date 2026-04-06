type RateLimitBucket = {
  count: number;
  expiresAt: number;
};

const memoryStore = new Map<string, RateLimitBucket>();

export function checkRateLimit(
  key: string,
  options: { maxRequests: number; windowMs: number } = {
    maxRequests: 4,
    windowMs: 1000 * 60 * 10,
  },
) {
  const now = Date.now();
  const existing = memoryStore.get(key);

  if (!existing || existing.expiresAt <= now) {
    memoryStore.set(key, {
      count: 1,
      expiresAt: now + options.windowMs,
    });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (existing.count >= options.maxRequests) {
    return {
      allowed: false,
      retryAfterMs: existing.expiresAt - now,
    };
  }

  existing.count += 1;
  memoryStore.set(key, existing);
  return { allowed: true, retryAfterMs: 0 };
}
