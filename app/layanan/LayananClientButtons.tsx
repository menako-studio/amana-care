'use client'

import Link from 'next/link'
import { trackCTAClick, trackPackageClick } from '@/lib/analytics'

interface LayananTrackedLinkProps {
  href: string
  className?: string
  id?: string
  children: React.ReactNode
  label: string
  section: string
  packageName?: string
  price?: string
}

export function LayananTrackedLink({
  href,
  className,
  id,
  children,
  label,
  section,
  packageName,
  price,
}: LayananTrackedLinkProps) {
  const handleClick = () => {
    trackCTAClick(label, href, section)
    if (packageName) {
      trackPackageClick(packageName, price)
    }
  }

  return (
    <Link href={href} className={className} id={id} onClick={handleClick}>
      {children}
    </Link>
  )
}
