import HeroSection from '@/components/home/HeroSection'
import TrustTicker from '@/components/home/TrustTicker'
import MissionSection from '@/components/home/MissionSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import DayTimeline from '@/components/home/DayTimeline'
import ProgramTabs from '@/components/home/ProgramTabs'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import GalleryPreview from '@/components/home/GalleryPreview'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustTicker />
      <MissionSection />
      <FeaturesGrid />
      <DayTimeline />
      <ProgramTabs />
      <TestimonialsCarousel />
      <GalleryPreview />
      <ContactSection />
    </>
  )
}
