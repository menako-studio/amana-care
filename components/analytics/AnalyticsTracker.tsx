'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

function AnalyticsTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    const queryString = searchParams?.toString()
    const fullPath = queryString ? `${pathname}?${queryString}` : pathname
    trackPageView(fullPath)
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  )
}
