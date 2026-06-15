import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import './ServiceSection.css'

// TODO: replace with the real booking link once set up
const CAL_URL = 'https://cal.com/rukkiecodes'
const EMAIL = 'rukkiecodes@gmail.com'

type IconKey = 'ai' | 'mobile' | 'web' | 'tools' | 'mentor'

interface Service {
  n: string
  title: string
  copy: string
  chips: string[]
  icon: IconKey
}

const services: Service[] = [
  {
    n: '01',
    title: 'AI-Powered Products',
    icon: 'ai',
    copy: 'Apps with real intelligence built in — LLM-driven assistants, in-browser/on-device AI, and chart-analysis tools that turn raw input into a clear, structured answer. Private when it needs to be, useful from the first click.',
    chips: ['LLM tooling', 'On-device AI', 'Chrome extension'],
  },
  {
    n: '02',
    title: 'Cross-Platform Mobile',
    icon: 'mobile',
    copy: 'iOS and Android from one codebase with React Native and Expo — shipped, store-published apps that feel native, from telemedicine to verified attendance with offline sync.',
    chips: ['React Native', 'Expo', 'Google Play'],
  },
  {
    n: '03',
    title: 'Full-Stack Web Apps',
    icon: 'web',
    copy: 'Production web apps end to end with React, Next.js, Node, and Firebase — auth, real-time data (Socket.IO), REST/GraphQL APIs, and payments. Architecture through deployment, owned by one person.',
    chips: ['React', 'Next.js', 'Node', 'Firebase'],
  },
  {
    n: '04',
    title: 'Extensions & Dev Tools',
    icon: 'tools',
    copy: 'Browser extensions and developer tooling that slot into real workflows — Chrome extensions, design systems, CLIs, and published npm packages. Tools other developers actually keep open.',
    chips: ['Chrome extension', 'npm package', 'CLI tooling'],
  },
  {
    n: '05',
    title: 'Mentoring & Curriculum',
    icon: 'mentor',
    copy: 'For teams that want to level up: 1:1 mentoring, workshops, and curriculum across web, mobile, and backend — the same stack I ship with, taught hands-on.',
    chips: ['Web', 'Mobile', 'Backend'],
  },
]

function ServiceIcon({ icon }: { icon: IconKey }) {
  const common = {
    className: 'service-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
  }
  switch (icon) {
    case 'ai':
      return (
        <svg {...common}>
          <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
          <path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'web':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18M7 7h.01M10 7h.01" />
        </svg>
      )
    case 'tools':
      return (
        <svg {...common}>
          <path d="M14 7a2 2 0 1 1 3 3l-1 1 3 3-3 3-3-3-1 1a2 2 0 1 1-3-3l1-1-3-3 3-3 3 3 1-1z" />
        </svg>
      )
    case 'mentor':
      return (
        <svg {...common}>
          <path d="M12 4l9 5-9 5-9-5 9-5z" />
          <path d="M7 11.5V16c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-4.5" />
        </svg>
      )
  }
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__head">
        <span className="service-card__icon">
          <ServiceIcon icon={s.icon} />
        </span>
        <span className="service-card__num">{s.n}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{s.title}</h3>
        <p className="service-card__copy">{s.copy}</p>
        <ul className="service-card__chips">
          {s.chips.map((c) => (
            <li key={c} className="service-card__chip">{c}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // open-service event smooth-scrolls down to this section
  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: '#services',
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-service', onOpen)
    return () => window.removeEventListener('open-service', onOpen)
  }, [])

  return (
    <section ref={sectionRef} className="service-section" id="services">
      <div className="service-section__inner">
        <header className="service-section__intro">
          <span className="service-section__eyebrow">[ Services ]</span>
          <h2 className="service-section__title">What I Build</h2>
          <p className="service-section__copy">
            End-to-end product work for founders and teams — from AI-powered tools
            to cross-platform apps and full-stack web. One developer, 10+ years,
            shipping the whole thing.
          </p>
        </header>

        <div className="service-gallery">
          {services.map((s) => (
            <ServiceCard key={s.n} s={s} />
          ))}
        </div>

        <div className="service-cta">
          <p className="service-cta__lead">Have something to build?</p>
          <div className="service-cta__actions">
            <a
              className="cta-pill cta-pill--primary cta-pill--lg"
              href={CAL_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a call <span aria-hidden>↗</span>
            </a>
            <a className="service-cta__secondary" href={`mailto:${EMAIL}`}>
              Or email me →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
