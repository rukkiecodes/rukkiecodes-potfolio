import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from './SocialIcons'
import './ContactSection.css'

const EMAIL = 'rukkiecodes@gmail.com'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight * 4,
        duration: 1.4,
        ease: 'power2.inOut',
      })
    }
    window.addEventListener('open-contact', onOpen)
    return () => window.removeEventListener('open-contact', onOpen)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      id="contact"
    >
      <button
        className="contact-section__close"
        type="button"
        aria-label="Close contact section"
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

      <div className="contact-section__inner">
        <span className="contact-section__eyebrow">[ Contact ]</span>
        <h2 className="contact-section__title">Let's Talk</h2>
        <p className="contact-section__copy">
          Got a project, idea, or just want to say hi? Drop me a line —
          I usually reply within a day.
        </p>

        <div className="contact-section__email">
          <a className="contact-section__mailto" href={`mailto:${EMAIL}`}>
            {EMAIL} <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            className="contact-section__copy-btn"
            onClick={copyEmail}
            aria-live="polite"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <div className="contact-section__divider">
          <span>Or find me here</span>
        </div>

        <ul className="contact-section__socials">
          <li>
            <a href="https://github.com/rukkiecodes" target="_blank" rel="noreferrer">
              <GitHubIcon className="contact-icon" /> GitHub
            </a>
          </li>
          <li>
            <a href="https://instagram.com/rukkiecodes" target="_blank" rel="noreferrer">
              <InstagramIcon className="contact-icon" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/rukkiecodes" target="_blank" rel="noreferrer">
              <LinkedInIcon className="contact-icon" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/rukkiecodes" target="_blank" rel="noreferrer">
              <XIcon className="contact-icon" /> X
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
