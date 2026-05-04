import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import './ExperienceSection.css'

interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
}

const experiences: Experience[] = [
  {
    role: 'Head of R&D / Instructor',
    company: 'Wanlainjo Groups',
    period: '2023 – Present',
    bullets: [
      'Promoted to Head of Research & Development — lead teams building internal tools and client-facing digital platforms.',
      'Integrated AI agents and LLM-powered tooling into team workflows, cutting delivery time on R&D projects.',
      'Designed and delivered programming curricula across web, mobile, and backend for diverse learner groups.',
    ],
  },
  {
    role: 'Co-Founder & Lead Developer',
    company: 'Freelance Developer Collective',
    period: '2021 – Present',
    bullets: [
      'Co-founded a collective that has shipped 100+ digital solutions for private and government clients.',
      'Owned full-stack delivery end-to-end — architecture, frontend, backend, mobile, deployment, and client relations.',
      'Built production systems spanning real-time apps (Socket.IO), REST/GraphQL APIs, and cross-platform mobile.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Babbage',
    period: '2020 – 2021',
    bullets: [
      'Led UI revamps across multiple web products using Vue.js, enforcing component reusability and design consistency.',
      'Collaborated with designers and PMs in Agile sprints to deliver polished, production-ready features on schedule.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Primed Soft',
    period: '2018 – 2019',
    bullets: [
      'Built modular Vue.js + Vuetify applications integrated with REST APIs for end-to-end feature delivery.',
      'Improved performance and responsive design across device types, reducing layout issues reported by QA.',
    ],
  },
]

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="experience-card">
      <span className="experience-card__period">{exp.period}</span>
      <h3 className="experience-card__role">{exp.role}</h3>
      <span className="experience-card__company">{exp.company}</span>
      <ul className="experience-card__bullets">
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  )
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight * 3,
        duration: 1.4,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-experience', onOpen)
    return () => window.removeEventListener('open-experience', onOpen)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="experience-section"
      id="experience"
    >
      <button
        className="experience-section__close"
        type="button"
        aria-label="Close experience section"
        onClick={() => {
          gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.inOut' })
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            d="M6 6 L18 18 M18 6 L6 18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </button>

      <div className="experience-section__inner">
        <header className="experience-section__intro">
          <span className="experience-section__eyebrow">[ Experience ]</span>
          <h2 className="experience-section__title">Where I've Worked</h2>
          <p className="experience-section__copy">
            5+ years across product teams, R&amp;D, and front-end leadership.
          </p>
        </header>

        <div className="experience-grid">
          <div className="experience-column">
            <ExperienceCard exp={experiences[0]} />
            <ExperienceCard exp={experiences[2]} />
          </div>

          <div className="experience-portrait">
            <img src="/portrait.png" alt="Terry Amagboro" />
          </div>

          <div className="experience-column">
            <ExperienceCard exp={experiences[1]} />
            <ExperienceCard exp={experiences[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
