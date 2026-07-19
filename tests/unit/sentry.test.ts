import { describe, it, expect } from 'vitest'
import * as Sentry from '@sentry/nextjs'

describe('Sentry Integration', () => {
  it('should have Sentry captureException function available', () => {
    expect(typeof Sentry.captureException).toBe('function')
  })

  it('should safely execute captureException for error reporting', () => {
    const testError = new Error('Test Exception for Sentry')
    expect(() => Sentry.captureException(testError)).not.toThrow()
  })
})
