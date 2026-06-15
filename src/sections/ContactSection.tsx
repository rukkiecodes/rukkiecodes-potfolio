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
// TODO: replace with the real booking link once set up
const CAL_URL = 'https://cal.com/rukkiecodes'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onOpen = () => {
      gsap.to(window, {
        scrollTo: '#contact',
        duration: 1.2,
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
      <div className="contact-section__inner">
        <span className="contact-section__eyebrow">[ Contact ]</span>
        <h2 className="contact-section__title">Let's build something</h2>
        <p className="contact-section__copy">
          Have a product, an idea, or a problem to ship? Book a call and we'll
          talk through it — or email me directly. I usually reply within a day.
        </p>

        <div className="contact-section__actions">
          <a
            className="contact-section__book"
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book a call <span aria-hidden>↗</span>
          </a>
          <a className="contact-section__email-btn" href={`mailto:${EMAIL}`}>
            Email me
          </a>
          <button
            type="button"
            className="contact-section__copy-btn"
            onClick={copyEmail}
            aria-live="polite"
          >
            {copied ? 'Copied' : 'Copy email'}
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
