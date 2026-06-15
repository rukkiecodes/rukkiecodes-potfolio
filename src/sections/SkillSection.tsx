import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import './SkillSection.css'

interface SkillGroup {
  n: string
  title: string
  chips: string[]
  featured?: boolean
}

const groups: SkillGroup[] = [
  { n: '01', title: 'Languages', chips: ['TypeScript', 'JavaScript', 'GLSL'] },
  {
    n: '02',
    title: 'Frontend',
    chips: ['React 19', 'Next.js', 'Vue 3', 'Vuetify', 'three.js', 'React Three Fiber', 'GSAP', 'react-router', 'Vite'],
  },
  {
    n: '03',
    title: 'Mobile',
    chips: ['React Native', 'Expo', 'Google Play delivery', 'Offline-first sync'],
    featured: true,
  },
  {
    n: '04',
    title: 'Backend & APIs',
    chips: ['Node.js', 'Firebase', 'REST APIs', 'GraphQL', 'Socket.IO real-time'],
  },
  {
    n: '05',
    title: 'AI & Automation',
    chips: ['LLM integration', 'AI agents', 'In-browser / on-device AI', 'Telegram bot delivery', 'Markdown / JSON processing', 'Image codec tooling'],
    featured: true,
  },
  {
    n: '06',
    title: 'Tooling & Delivery',
    chips: ['Chrome extensions', 'CLI / dev tools', 'npm publishing', 'Design systems', 'ESLint', 'GitHub Pages', 'Netlify', 'Spline 3D'],
  },
]

export function SkillSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onOpen = () =>
      gsap.to(window, { scrollTo: '#skills', duration: 1.2, ease: 'power2.inOut' })
    window.addEventListener('open-skills', onOpen)
    return () => window.removeEventListener('open-skills', onOpen)
  }, [])

  return (
    <section ref={sectionRef} className="skill-section" id="skills">
      <div className="skill-section__inner">
        <header className="skill-section__intro">
          <span className="skill-section__eyebrow">[ Skills ]</span>
          <h2 className="skill-section__title">Tech I Build With</h2>
          <p className="skill-section__copy">
            10+ years shipping production web, mobile, and AI products. A current,
            full-stack toolkit — from cross-platform mobile to LLM-powered features
            and browser tooling.
          </p>
        </header>

        <div className="skill-grid">
          {groups.map((g) => (
            <article
              key={g.n}
              className={`skill-card${g.featured ? ' skill-card--featured' : ''}`}
            >
              <div className="skill-card__head">
                <span className="skill-card__num">{g.n}</span>
                <h3 className="skill-card__title">{g.title}</h3>
              </div>
              <ul className="skill-card__chips">
                {g.chips.map((c) => (
                  <li key={c} className="skill-chip">{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
