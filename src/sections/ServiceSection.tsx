import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { NoisySphere } from './NoisySphere'
import { SectionNav } from './SectionNav'
import './ServiceSection.css'

interface Service {
  n: string
  title: string
  copy: string
  image?: string
  imageAlt?: string
}

const services: Service[] = [
  {
    n:    '01',
    title: 'Mobile App Development',
    copy: 'Native iOS & Android plus cross-platform builds with React Native and Expo — performant apps that feel right on every device.',
    image: '/service-mobile.jpg',
    imageAlt: 'Code editor with React app',
  },
  {
    n:    '02',
    title: 'Web Application Development',
    copy: 'Full-stack web apps with React, Next.js, Node, and Firebase — auth, real-time data, payments, the works.',
    image: '/service-webapp.jpg',
    imageAlt: 'Team building a web app on MacBooks',
  },
  {
    n:    '03',
    title: 'Website Development',
    copy: 'Marketing sites, portfolios, and content-driven experiences — fast, accessible, and search-engine friendly.',
    image: '/service-website.jpg',
    imageAlt: 'Developer at multi-monitor workstation',
  },
  {
    n:    '04',
    title: 'Instructor',
    copy: 'I teach the tools I work with. 1:1 mentoring, workshops, and curriculum design for teams and individuals.',
    image: '/service-instructor.jpg',
    imageAlt: 'Instructor with students in a classroom',
  },
]

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className={`service-card${s.image ? ' service-card--has-image' : ''}`}>
      {s.image && (
        <img
          className="service-card__image"
          src={s.image}
          alt={s.imageAlt ?? ''}
          loading="lazy"
        />
      )}
      <div className="service-card__body">
        <span className="service-card__num">{s.n}</span>
        <h3 className="service-card__title">{s.title}</h3>
        <p className="service-card__copy">{s.copy}</p>
      </div>
    </article>
  )
}

export function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // open-service event scrolls to the section's snap position; the master
  // scroll timeline (in WorkSection) handles the actual slide-in animation.
  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight * 2,
        duration: 1.4,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-service', onOpen)
    return () => window.removeEventListener('open-service', onOpen)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="service-section"
      id="services"
    >
      <SectionNav active="service" />

      <button
        className="service-section__close"
        type="button"
        aria-label="Close service section"
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

      <div className="service-section__inner">
        <header className="service-section__intro">
          <span className="service-section__eyebrow">[ Service ]</span>
          <h2 className="service-section__title">What I Do</h2>
          <p className="service-section__copy">
            From concept to launch — building products, and teaching the craft.
          </p>
        </header>

        <div className="service-layout">
          <div className="service-column service-column--left">
            <ServiceCard s={services[0]} />
            <ServiceCard s={services[2]} />
          </div>

          <div className="service-model">
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 35, near: 0.1, far: 100 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <NoisySphere followCursor yawRange={1.4} pitchRange={0.9} />
            </Canvas>
          </div>

          <div className="service-column service-column--right">
            <ServiceCard s={services[1]} />
            <ServiceCard s={services[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
