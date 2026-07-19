import { describe, it, expect } from 'vitest'
import { rateLimit } from '@/lib/rate-limit'

describe('rateLimit helper', () => {
  it('should allow requests within limit', () => {
    const testIp = '192.168.1.1'
    const limit = 3

    const r1 = rateLimit(testIp, limit, 60000)
    expect(r1.success).toBe(true)
    expect(r1.remaining).toBe(2)

    const r2 = rateLimit(testIp, limit, 60000)
    expect(r2.success).toBe(true)
    expect(r2.remaining).toBe(1)

    const r3 = rateLimit(testIp, limit, 60000)
    expect(r3.success).toBe(true)
    expect(r3.remaining).toBe(0)
  })

  it('should block requests when limit is exceeded', () => {
    const testIp = '10.0.0.1'
    const limit = 2

    rateLimit(testIp, limit, 60000)
    rateLimit(testIp, limit, 60000)

    const blocked = rateLimit(testIp, limit, 60000)
    expect(blocked.success).toBe(false)
    expect(blocked.remaining).toBe(0)
  })
})
