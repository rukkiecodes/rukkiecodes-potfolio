import './SectionNav.css'

type Key = 'work' | 'service' | 'experience' | 'contact'

const LINKS: { key: Key; label: string; sup?: string; event: string }[] = [
  { key: 'work',       label: 'Work',       sup: '[14]', event: 'open-work' },
  { key: 'service',    label: 'Service',    sup: '[4]',  event: 'open-service' },
  { key: 'experience', label: 'Experience', sup: '[5y+]', event: 'open-experience' },
  { key: 'contact',    label: 'Contact',                  event: 'open-contact' },
]

export function SectionNav({ active }: { active: Key }) {
  return (
    <ul className="section-nav">
      {LINKS.map((l) => (
        <li key={l.key}>
          <a
            href={`#${l.key}`}
            className={l.key === active ? 'is-active' : undefined}
            onClick={(e) => {
              e.preventDefault()
              window.dispatchEvent(new CustomEvent(l.event))
            }}
          >
            {l.label}
            {l.sup && <sup> {l.sup}</sup>}
          </a>
        </li>
      ))}
    </ul>
  )
}
