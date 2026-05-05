import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { NoisySphere } from './NoisySphere'
import { SectionNav } from './SectionNav'
import './WorkSection.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// each section snaps at a multiple of 25 % of the master scroll
const SNAP_POINTS = [0, 0.25, 0.5, 0.75, 1]

interface Project {
  eyebrow:   string
  title:     string
  paragraphs: string[]
  ctaUrl:    string
  ctaLabel:  string
  images:    string[]
  imageAlt:  string
}

const projects: Project[] = [
  {
    eyebrow:   '01 — Telemedicine',
    title:     'About HealthTok',
    paragraphs: [
      'HealthTok is a telemedicine app that lets users register as doctors or patients. Doctors upload credentials for review before offering paid consultations; once approved, patients can connect with them through the app.',
      'It supports video calls, voice calls, chat, and voice notes — making remote healthcare accessible, easy-to-use, and affordable.',
      'As Head of Development, I led the entire build — architecture, design, and deployment — scalable from day one.',
    ],
    ctaUrl:   'https://play.google.com/store/apps/details?id=com.rukkiecodes.healthTok&pcampaignid=web_share',
    ctaLabel: 'View on Google Play',
    images:   ['https://res.cloudinary.com/rukkiecodes/image/upload/v1753787593/portfolio/healthTok/Slice_4_e4jzlx.png'],
    imageAlt: 'HealthTok Clinic banner',
  },
  {
    eyebrow:   '02 — Institution Management',
    title:     'About Clockee',
    paragraphs: [
      'Clockee is institution management software that tracks staff attendance with high accuracy and runs end-of-month audits to flag penalties — keeping admin overhead low and HR accountable.',
      'For institutions registered as schools, Clockee adds a full academic layer: monitor student performance, manage examinations, and keep parents updated on their child’s progress with automated notifications.',
      'I built the platform end-to-end — frontend, backend, and admin dashboard — designed to scale across multiple institutions on a single deployment.',
    ],
    ctaUrl:   'https://clockee-home.netlify.app',
    ctaLabel: 'Visit live site',
    images:   ['/clockee-home.png', '/clockee-login.png', '/clockee-admin.png'],
    imageAlt: 'Clockee institution management',
  },
]

const SLIDE_INTERVAL_MS = 4000

export function WorkSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const progressRef = useRef(0)

  const [projectIdx, setProjectIdx] = useState(0)
  const [imageIdx, setImageIdx]     = useState(0)
  const project = projects[projectIdx]

  // reset image cycle when the active project changes
  useEffect(() => {
    setImageIdx(0)
  }, [projectIdx])

  // auto-cycle images for projects that have more than one
  useEffect(() => {
    if (project.images.length <= 1) return
    const id = window.setInterval(() => {
      setImageIdx((i) => (i + 1) % project.images.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [project])

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 1.4,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-work', onOpen)
    return () => window.removeEventListener('open-work', onOpen)
  }, [])

  const nextProject = () =>
    setProjectIdx((i) => (i + 1) % projects.length)
  const prevProject = () =>
    setProjectIdx((i) => (i - 1 + projects.length) % projects.length)

  useEffect(() => {
    if (!sectionRef.current) return

    // park every overlay section off-screen so the master timeline can pull
    // them in one after another.
    gsap.set(
      [
        '.work-section',
        '.service-section',
        '.experience-section',
        '.contact-section',
      ],
      { xPercent: -100 },
    )

    const setPE = (sel: string, active: boolean) => {
      const el = document.querySelector(sel) as HTMLElement | null
      if (el) el.style.pointerEvents = active ? 'auto' : 'none'
    }

    const ctx = gsap.context(() => {
      // Master timeline pinned to the hero, scrubbed across 400 % of scroll.
      // Each tween covers a 25 % slice and animates one section in.
      gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end:   '+=400%',
          pin:   '.hero',
          scrub: 1,
          snap: {
            // 30 %-into-a-segment threshold for "snap forward", otherwise snap back
            snapTo: (value: number) => {
              for (let i = 0; i < SNAP_POINTS.length - 1; i++) {
                const start = SNAP_POINTS[i]
                const end   = SNAP_POINTS[i + 1]
                if (value >= start && value < end) {
                  return (value - start) / (end - start) >= 0.3 ? end : start
                }
              }
              return SNAP_POINTS[SNAP_POINTS.length - 1]
            },
            duration: { min: 0.4, max: 0.9 },
            delay: 0.05,
            ease: 'power2.inOut',
          },
          onUpdate: (st) => {
            const p = st.progress
            progressRef.current = p

            // pointer-events: only the topmost active overlay catches events
            setPE('.work-section',       p >= 0.20 && p < 0.45)
            setPE('.service-section',    p >= 0.45 && p < 0.70)
            setPE('.experience-section', p >= 0.70 && p < 0.95)
            setPE('.contact-section',    p >= 0.95)

            // hero nav exits up during the first 25 % (work slide-in)
            const sub      = p / 0.25
            const heroOut  = Math.min(1, Math.max(0, (sub - 0.05) / 0.35))
            const heroNav  = document.querySelector('.hero__navlinks') as HTMLElement | null
            if (heroNav) {
              heroNav.style.opacity   = (1 - heroOut).toFixed(3)
              heroNav.style.transform = `translateY(${(-30 * heroOut).toFixed(1)}px)`
            }
          },
        },
      })
        .to('.work-section',       { xPercent: 0, duration: 0.25, ease: 'none' }, 0.00)
        .to('.service-section',    { xPercent: 0, duration: 0.25, ease: 'none' }, 0.25)
        .to('.experience-section', { xPercent: 0, duration: 0.25, ease: 'none' }, 0.50)
        .to('.contact-section',    { xPercent: 0, duration: 0.25, ease: 'none' }, 0.75)

    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="work-section" id="work">
      <Canvas
        className="work-section__canvas"
        camera={{ position: [0, 0, 4.5], fov: 35, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
      >
        <NoisySphere position={[-1.35, 0, 0]} />
      </Canvas>

      <SectionNav active="work" />

      <button
        className="work-section__close"
        type="button"
        aria-label="Close work section"
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

      <div className="work-section__main">
        <header className="work-section__intro">
          <span className="work-section__eyebrow">[ Work ]</span>
          <h2 className="work-section__title">Selected Projects</h2>
          <p className="work-section__copy">
            Interactive web experiences, shader experiments, and product work.
          </p>
        </header>

        <article className="project-card" key={projectIdx}>
          <div className="project-card__media">
            {project.images.map((src, i) => (
              <img
                key={src}
                className={`project-card__banner${
                  i === imageIdx ? ' is-active' : ''
                }`}
                src={src}
                alt={project.imageAlt}
                loading="lazy"
              />
            ))}
            {project.images.length > 1 && (
              <div className="project-card__dots">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show image ${i + 1}`}
                    className={`project-card__dot${
                      i === imageIdx ? ' is-active' : ''
                    }`}
                    onClick={() => setImageIdx(i)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="project-card__body">
            <span className="project-card__eyebrow">{project.eyebrow}</span>
            <h3 className="project-card__title">{project.title}</h3>

            {project.paragraphs.map((p, i) => (
              <p className="project-card__copy" key={i}>{p}</p>
            ))}

            <a
              className="project-card__cta"
              href={project.ctaUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.ctaLabel} <span aria-hidden>↗</span>
            </a>
          </div>
        </article>

        <div className="project-nav">
          <button
            type="button"
            className="project-nav__btn"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <span aria-hidden>←</span> Prev
          </button>
          <span className="project-nav__indicator">
            {String(projectIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="project-nav__btn"
            onClick={nextProject}
            aria-label="Next project"
          >
            Next <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
