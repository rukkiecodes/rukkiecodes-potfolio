import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import './ExperienceSection.css'

gsap.registerPlugin(ScrollToPlugin)

// TODO: replace with the real booking link once set up
const CAL_URL = 'https://cal.com/rukkiecodes'

interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    role: 'Head of R&D / Instructor',
    company: 'Wanlainjo Groups',
    period: '2023 — Present',
    bullets: [
      'Integrated AI agents and LLM-powered tooling into delivery workflows, cutting turnaround on R&D projects.',
      'Promoted to Head of Research & Development — lead teams building internal tools and client-facing digital platforms.',
      'Designed and delivered programming curricula across web, mobile, and backend for diverse learner groups.',
    ],
    tags: ['AI Agents', 'LLM Tooling', 'R&D'],
  },
  {
    role: 'Co-Founder & Lead Developer',
    company: 'Freelance Developer Collective',
    period: '2021 — Present',
    bullets: [
      'Co-founded a collective that has shipped 100+ digital solutions for private and government clients.',
      'Built production systems spanning real-time apps (Socket.IO), REST/GraphQL APIs, and cross-platform mobile.',
      'Owned delivery end-to-end — architecture, frontend, backend, mobile, deployment, and client relations.',
    ],
    tags: ['React Native', 'Node', 'Socket.IO', 'GraphQL'],
  },
  {
    role: 'Front-End Developer',
    company: 'Babbage',
    period: '2020 — 2021',
    bullets: [
      'Led UI revamps across multiple web products with Vue.js, enforcing component reusability and design consistency.',
      'Worked with designers and PMs in Agile sprints to ship polished, production-ready features on schedule.',
    ],
    tags: ['Vue.js', 'Agile'],
  },
  {
    role: 'Front-End Developer',
    company: 'Primed Soft',
    period: '2018 — 2019',
    bullets: [
      'Built modular Vue.js + Vuetify applications integrated with REST APIs for end-to-end feature delivery.',
      'Improved performance and responsive design across device types, reducing layout issues reported by QA.',
    ],
    tags: ['Vue.js', 'Vuetify', 'REST APIs'],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: '#experience',
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-experience', onOpen)
    return () => window.removeEventListener('open-experience', onOpen)
  }, [])

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault()
    gsap.to(window, { scrollTo: '#work', duration: 1.2, ease: 'power2.inOut' })
  }

  return (
    <section ref={sectionRef} className="experience-section" id="experience">
      <div className="experience-section__inner">
        <header className="experience-section__intro">
          <span className="experience-section__eyebrow">[ Experience ]</span>
          <h2 className="experience-section__title">Where I've Worked</h2>
          <p className="experience-section__copy">
            10+ years across product teams, R&amp;D, and full-stack delivery —
            shipping AI-powered products, cross-platform mobile, and full-stack web
            for private and government clients.
          </p>
        </header>

        <ol className="experience-timeline" role="list">
          {experiences.map((exp) => (
            <li key={exp.company} className="experience-item">
              <span className="experience-item__node" aria-hidden="true" />
              <article className="experience-card">
                <div className="experience-card__head">
                  <div className="experience-card__heading">
                    <h3 className="experience-card__role">{exp.role}</h3>
                    <span className="experience-card__company">{exp.company}</span>
                  </div>
                  <span className="experience-card__period">{exp.period}</span>
                </div>
                <ul className="experience-card__bullets" role="list">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <ul className="experience-card__tags" role="list">
                  {exp.tags.map((t) => (
                    <li key={t} className="experience-tag">{t}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <footer className="experience-section__footer">
          <p className="experience-section__footer-copy">
            Want this kind of delivery on your product?
          </p>
          <div className="experience-section__actions">
            <a
              className="cta-pill cta-pill--primary cta-pill--lg"
              href={CAL_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
            <a className="cta-pill cta-pill--ghost cta-pill--lg" href="#work" onClick={scrollToWork}>
              View work
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
