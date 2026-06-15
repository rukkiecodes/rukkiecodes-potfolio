import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import './WorkSection.css'

gsap.registerPlugin(ScrollToPlugin)

const SLIDE_INTERVAL_MS = 4000

function ProjectCard({ project }: { project: Project }) {
  const [imageIdx, setImageIdx] = useState(0)

  // auto-cycle images for projects that have more than one
  useEffect(() => {
    if (project.images.length <= 1) return
    const id = window.setInterval(() => {
      setImageIdx((i) => (i + 1) % project.images.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [project.images.length])

  const comingSoon = project.status === 'coming-soon'

  return (
    <Link
      className={`project-card${comingSoon ? ' is-coming-soon' : ''}`}
      to={`/work/${project.slug}`}
    >
      <div className="project-card__media">
        {project.images.map((src, i) => (
          <img
            key={src}
            className={`project-card__banner${i === imageIdx ? ' is-active' : ''}`}
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
                className={`project-card__dot${i === imageIdx ? ' is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setImageIdx(i)
                }}
              />
            ))}
          </div>
        )}

        <span
          className={`project-card__status project-card__status--${comingSoon ? 'review' : 'live'}`}
        >
          <span className="project-card__status-dot" aria-hidden />
          {comingSoon ? 'In review' : 'Live'}
        </span>
      </div>

      <div className="project-card__body">
        <span className="project-card__eyebrow">{project.eyebrow}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__copy">{project.summary}</p>

        {project.tech.length > 0 && (
          <ul className="project-card__tags" role="list">
            {project.tech.map((t) => (
              <li key={t} className="project-card__tag">{t}</li>
            ))}
          </ul>
        )}

        <span className="project-card__cta">
          {comingSoon ? 'Preview' : 'View project'} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  )
}

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: '#work',
        duration: 1.2,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-work', onOpen)
    return () => window.removeEventListener('open-work', onOpen)
  }, [])

  return (
    <section ref={sectionRef} className="work-section" id="work">
      <div className="work-section__main">
        <header className="work-section__intro">
          <span className="work-section__eyebrow">[ Work ]</span>
          <h2 className="work-section__title">Selected Projects</h2>
          <p className="work-section__copy">
            Shipped products across AI tools, cross-platform mobile, full-stack
            web, and browser extensions — plus the occasional shader experiment.
          </p>
        </header>

        <div className="project-gallery">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
