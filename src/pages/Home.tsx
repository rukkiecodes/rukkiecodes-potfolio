import { HeroSection } from '../sections/HeroSection'
import { WorkSection } from '../sections/WorkSection'
import { ServiceSection } from '../sections/ServiceSection'
import { SkillSection } from '../sections/SkillSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { ContactSection } from '../sections/ContactSection'

export function Home() {
  return (
    <div className="app">
      <HeroSection />
      <WorkSection />
      <ServiceSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
