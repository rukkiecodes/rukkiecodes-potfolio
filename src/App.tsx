import { HeroSection } from './sections/HeroSection'
import { WorkSection } from './sections/WorkSection'
import { ServiceSection } from './sections/ServiceSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ContactSection } from './sections/ContactSection'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      <WorkSection />
      <ServiceSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
