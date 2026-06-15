import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getProject, projects } from '../data/projects'
import './ProjectPage.css'

// TODO: replace with the real booking link once set up
const CAL_URL = 'https://cal.com/rukkiecodes'
const EMAIL = 'rukkiecodes@gmail.com'

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  // always start the detail page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <main className="project-page project-page--missing">
        <p className="project-page__eyebrow">[ 404 ]</p>
        <h1 className="project-page__title">Project not found</h1>
        <Link className="project-page__back" to="/">
          <span aria-hidden>←</span> Back home
        </Link>
      </main>
    )
  }

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(idx + 1) % projects.length]
  const comingSoon = project.status === 'coming-soon'
  const total = project.gallery.length

  const caption = (i: number) =>
    project.galleryLayout === 'phone'
      ? `${project.title} — screen ${i + 1}`
      : `${project.title} — ${i + 1} of ${total}`

  return (
    <main className="project-page">
      <header className="project-page__top">
        <Link className="project-page__back" to="/">
          <span aria-hidden>←</span> All projects
        </Link>
      </header>

      {/* ===== HERO: meta rail + cover ===== */}
      <section className="project-page__hero">
        <div className="project-page__meta">
          <span
            className={`project-page__status project-page__status--${comingSoon ? 'soon' : 'live'}`}
          >
            <span className="project-page__status-dot" aria-hidden />
            {comingSoon ? 'Coming soon' : 'Shipped & live'}
          </span>
          <span className="project-page__eyebrow">{project.eyebrow}</span>
          <h1 className="project-page__title">{project.title}</h1>
          <p className="project-page__tagline">{project.tagline}</p>
          <p className="project-page__summary">{project.summary}</p>

          {project.tech.length > 0 && (
            <div className="project-page__stack">
              <span className="project-page__stack-label">Built with</span>
              <ul className="project-page__chips" role="list">
                {project.tech.map((t) => (
                  <li key={t} className="project-page__chip">{t}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-page__actions">
            <a
              className="project-page__cta"
              href={CAL_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a call <span aria-hidden>↗</span>
            </a>
            {comingSoon && project.links.length === 0 ? (
              <span
                className="project-page__cta project-page__cta--disabled"
                aria-disabled="true"
              >
                Not public yet
              </span>
            ) : (
              project.links.map((link) => (
                <a
                  key={link.url}
                  className="project-page__cta project-page__cta--ghost"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              ))
            )}
          </div>
        </div>

        <figure className="project-page__cover">
          <img src={project.images[0]} alt={`${project.title} cover`} />
        </figure>
      </section>

      {/* ===== BODY: constrained reading measure ===== */}
      <article className="project-page__body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
      </article>

      {/* ===== GALLERY ===== */}
      {project.gallery.length > 0 && (
        <section
          className="project-page__gallery-wrap"
          aria-label={`${project.title} screens`}
        >
          <span className="project-page__gallery-label">Screens</span>
          <div className={`project-page__gallery project-page__gallery--${project.galleryLayout}`}>
            {project.gallery.map((src, i) =>
              src.endsWith('.mp4') ? (
                <figure className="project-page__shot" key={src}>
                  <video
                    src={src}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={caption(i)}
                  />
                  <figcaption>{caption(i)}</figcaption>
                </figure>
              ) : (
                <figure className="project-page__shot" key={src}>
                  <img src={src} alt={caption(i)} loading="lazy" />
                  <figcaption>{caption(i)}</figcaption>
                </figure>
              ),
            )}
          </div>
        </section>
      )}

      {/* ===== CONVERSION band (always present) ===== */}
      <section className="project-page__convert">
        <span className="project-page__convert-label">[ Work with me ]</span>
        <h2 className="project-page__convert-title">Have a project like this?</h2>
        <p className="project-page__convert-copy">
          I build AI-powered products, cross-platform mobile apps, and full-stack
          web — end to end. Book a call and let's scope it, or send an email.
        </p>
        <div className="project-page__convert-actions">
          <a
            className="project-page__cta"
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book a call <span aria-hidden>↗</span>
          </a>
          <a
            className="project-page__cta project-page__cta--ghost"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL} <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <footer className="project-page__footer">
        <span className="project-page__footer-label">Next project</span>
        <Link className="project-page__next" to={`/work/${nextProject.slug}`}>
          {nextProject.title} <span aria-hidden>→</span>
        </Link>
      </footer>
    </main>
  )
}
