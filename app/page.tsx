import { HeroSection } from '@/components/home/hero-section'
import { GrappaIntroSection } from '@/components/home/grappa-intro-section'
import { TraditionSection } from '@/components/home/tradition-section'
import { BeerSection } from '@/components/home/beer-section'
import { LightDrinksSection } from '@/components/home/light-drinks-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GrappaIntroSection />
      <TraditionSection />
      <BeerSection />
      <LightDrinksSection />
    </>
  )
}
