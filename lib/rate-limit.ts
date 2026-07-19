interface RateLimitStore {
  count: number
  resetTime: number
}

const cache = new Map<string, RateLimitStore>()

/**
 * In-memory Rate Limiter helper for API routes.
 * @param ip Client IP address
 * @param limit Maximum allowed requests per window
 * @param windowMs Time window in milliseconds (default: 60000ms / 1 min)
 */
export function rateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now()
  const record = cache.get(ip)

  // Clean up expired entries periodically
  if (cache.size > 1000) {
    for (const [key, value] of cache.entries()) {
      if (now > value.resetTime) {
        cache.delete(key)
      }
    }
  }

  if (!record || now > record.resetTime) {
    const newRecord: RateLimitStore = {
      count: 1,
      resetTime: now + windowMs,
    }
    cache.set(ip, newRecord)
    return { success: true, remaining: limit - 1, reset: newRecord.resetTime }
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime }
  }

  record.count += 1
  cache.set(ip, record)
  return { success: true, remaining: limit - record.count, reset: record.resetTime }
}
