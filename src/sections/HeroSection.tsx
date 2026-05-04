import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './SocialIcons'
import { NameBanner3D } from './NameBanner3D'
import './HeroSection.css'

gsap.registerPlugin(ScrollToPlugin)

export function HeroSection() {
  const grayRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const gray = grayRef.current
    if (!gray) return
    const rect = gray.getBoundingClientRect()
    gray.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    gray.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    if (!grayRef.current) return
    grayRef.current.style.setProperty('--mx', '-9999px')
    grayRef.current.style.setProperty('--my', '-9999px')
  }

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault()
    gsap.to(window, {
      scrollTo: window.innerHeight,
      duration: 1.4,
      ease: 'power2.inOut',
    })
  }

  const openService = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-service'))
  }

  const openExperience = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-experience'))
  }

  const openContact = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-contact'))
  }

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="hero__nav">
        <div className="status-pill">
          <span className="status-dot" />
          Available for New Project
        </div>

        <ul className="hero__navlinks">
          <li><a href="#work" onClick={scrollToWork}>Work <sup>[14]</sup></a></li>
          <li><a href="#services" onClick={openService}>Service <sup>[4]</sup></a></li>
          <li><a href="#experience" onClick={openExperience}>Experience <sup>[5y+]</sup></a></li>
          <li><a href="#contact" onClick={openContact}>Contact</a></li>
        </ul>

        <a className="cta-pill cta-pill--primary" href="#contact" onClick={openContact}>
          Let's Talk <span aria-hidden>↗</span>
        </a>
      </nav>

      <NameBanner3D />

      <div className="hero__portrait-wrap">
        <img
          className="hero__portrait-img"
          src="/portrait.png"
          alt="rukkiecodes portrait"
        />
        <img
          ref={grayRef}
          className="hero__portrait-img hero__portrait-img--reveal"
          src="/portrait.png"
          alt=""
          aria-hidden
        />
      </div>

      <div className="hero__intro">
        <h2>Creative Developer</h2>
        <p>
          Software developer with 10+ years building scalable web and mobile
          applications. I work with modern frameworks and AI-driven tooling to
          ship high-performing, user-focused products — clean design, reliable
          delivery, on time.
        </p>
        <a className="cta-pill cta-pill--primary cta-pill--lg" href="#contact" onClick={openContact}>
          Let's collaborate <span aria-hidden>↗</span>
        </a>
      </div>

      <ul className="hero__socials">
        <li><a href="https://github.com/rukkiecodes" target="_blank" rel="noreferrer">
          <GitHubIcon className="social-icon" /> GitHub
        </a></li>
        <li><a href="https://instagram.com/rukkiecodes" target="_blank" rel="noreferrer">
          <InstagramIcon className="social-icon" /> Instagram
        </a></li>
        <li><a href="https://linkedin.com/in/rukkiecodes" target="_blank" rel="noreferrer">
          <LinkedInIcon className="social-icon" /> LinkedIn
        </a></li>
        <li><a href="https://x.com/rukkiecodes" target="_blank" rel="noreferrer">
          <XIcon className="social-icon" /> X
        </a></li>
      </ul>
    </section>
  )
}
