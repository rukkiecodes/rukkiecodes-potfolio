import healthtokBody from '../content/healthtok.md?raw'
import clockeeBody from '../content/clockee.md?raw'
import fusionuiBody from '../content/fusionui.md?raw'
import quantlowBody from '../content/quantlow.md?raw'
import clearcutBody from '../content/clearcut.md?raw'
import docgrabBody from '../content/docgrab.md?raw'

export interface ProjectLink {
  label: string
  url:   string
}

export interface Project {
  /** url slug — used for /work/:slug routing */
  slug:     string
  /** 'live' = shipped & linkable, 'coming-soon' = in review / not yet public */
  status:   'live' | 'coming-soon'
  eyebrow:  string
  title:    string
  tagline:  string
  /** short teaser shown on the gallery card + detail hero */
  summary:  string
  /** full description (markdown) shown on the project detail page */
  body:     string
  /** card cover image(s) — cycled on the home gallery card */
  images:   string[]
  /** screens shown in the detail-page gallery (images or .mp4 videos) */
  gallery:  string[]
  /** 'phone' = portrait masonry, 'wide' = full-width desktop stack */
  galleryLayout: 'phone' | 'wide'
  /** scannable tech/category chips — shown on the gallery card + detail "Built with". Grounded per-project. */
  tech:     string[]
  imageAlt: string
  /** external links — first is the primary CTA, the rest are ghost buttons */
  links:    ProjectLink[]
}

export const projects: Project[] = [
  {
    slug:    'healthtok',
    status:  'live',
    eyebrow: '01 — Telemedicine',
    title:   'HealthTok',
    tagline: 'Telemedicine, in Your Pocket',
    summary:
      'A mobile telemedicine app that connects patients with licensed doctors for instant and scheduled consultations — chat, voice, and video — with secure payments, digital prescriptions, and an AI health assistant, all in one place.',
    body:    healthtokBody,
    images:  ['/healthtok/healthtok-banner.png'],
    gallery: [
      '/healthtok/healthtok-1.png',
      '/healthtok/healthtok-2.png',
      '/healthtok/healthtok-3.png',
      '/healthtok/healthtok-4.png',
      '/healthtok/healthtok-5.png',
    ],
    galleryLayout: 'phone',
    tech:     ['React Native', 'Expo', 'AI assistant', 'Payments'],
    imageAlt: 'HealthTok app screen',
    links: [
      {
        label: 'View on Google Play',
        url:   'https://play.google.com/store/apps/details?id=com.rukkiecodes.healthTok&pcampaignid=web_share',
      },
    ],
  },
  {
    slug:    'clockee',
    status:  'live',
    eyebrow: '02 — Workforce Accountability',
    title:   'Clockee',
    tagline: 'Verified Attendance & Workforce Accountability',
    summary:
      'A mobile-first attendance platform that gives organisations a trustworthy answer to a deceptively simple question: was this person actually here, on time, where they were supposed to be?',
    body:    clockeeBody,
    images:  ['/clockee/clockee-banner.png'],
    gallery: [
      '/clockee/clockee-1.png',
      '/clockee/clockee-2.png',
      '/clockee/clockee-3.png',
      '/clockee/clockee-4.png',
      '/clockee/clockee-5.png',
      '/clockee/clockee-6.png',
      '/clockee/clockee-admin.png',
    ],
    galleryLayout: 'phone',
    tech:     ['React Native', 'Expo', 'Offline-first', 'Geolocation'],
    imageAlt: 'Clockee app screen',
    links: [
      { label: 'Visit live site', url: 'https://clockee-home.netlify.app' },
    ],
  },
  {
    slug:    'fusionui',
    status:  'live',
    eyebrow: '03 — Design System',
    title:   'FusionUI',
    tagline: 'A Vue 3 Design System for Shipping Beautiful Apps Fast',
    summary:
      'An open-source UI toolkit for Vue 3 (with a React Native companion): 50+ accessible components, light & dark theming, a built-in 737-icon set, and signature liquid-glass effects — all from one cohesive design language, with a one-command project starter.',
    body:    fusionuiBody,
    images:  ['/fusionui/fusionui-1.png'],
    gallery: [
      '/fusionui/fusionui-1.png',
      '/fusionui/fusionui-2.png',
      '/fusionui/fusionui-3.png',
      '/fusionui/fusionui-4.png',
      '/fusionui/fusionui-5.png',
      '/fusionui/fusionui-6.png',
      '/fusionui/fusionui-7.png',
    ],
    galleryLayout: 'wide',
    tech:     ['Vue 3', 'TypeScript', 'React Native', 'npm', 'Design system'],
    imageAlt: 'FusionUI documentation screen',
    links: [
      { label: 'View docs & demos', url: 'https://rukkiecodes.github.io/fusionui/' },
      { label: 'Icon gallery',      url: 'https://rukkiecodes.github.io/fusionui-icons/' },
    ],
  },
  {
    slug:    'quantlow',
    status:  'live',
    eyebrow: '04 — AI Trading Tool',
    title:   'Quantlow',
    tagline: 'Scan any chart. Instant BUY / SELL verdict.',
    summary:
      'An AI chart-analysis tool — web app plus Chrome extension — that turns any forex, crypto, stock, or index chart into a structured trade verdict: direction, entry, stop, target, confidence, and plain-English reasoning, in one click.',
    body:    quantlowBody,
    images:  ['/quantlow/quantlow-cover.png'],
    gallery: [
      '/quantlow/quantlow-1.png',
      '/quantlow/quantlow-2.png',
      '/quantlow/quantlow-3.png',
      '/quantlow/quantlow-4.png',
      '/quantlow/quantlow-5.png',
      '/quantlow/quantlow-6.png',
      '/quantlow/quantlow-vid-1.mp4',
      '/quantlow/quantlow-vid-2.mp4',
      '/quantlow/quantlow-vid-3.mp4',
      '/quantlow/quantlow-vid-4.mp4',
    ],
    galleryLayout: 'wide',
    tech:     ['AI', 'Chrome extension', 'Web app', 'Telegram'],
    imageAlt: 'Quantlow scanner screen',
    links: [
      { label: 'Visit quantlow.com', url: 'https://quantlow.com' },
      {
        label: 'Chrome extension',
        url:   'https://chromewebstore.google.com/detail/dccefjlpjheodfgafdffckfcagpibpjd?utm_source=item-share-cb',
      },
    ],
  },
  {
    slug:    'clearcut',
    status:  'live',
    eyebrow: '05 — Image Tools',
    title:   'ClearCut',
    tagline: 'Remove backgrounds, convert, resize & clean up images — in your browser.',
    summary:
      'A private, on-device image toolkit that runs entirely in your browser: remove backgrounds with AI, convert between PNG/JPEG/WebP/AVIF, resize to exact dimensions or a target file size, and erase watermarks — all 100% local, so your images never leave your device.',
    body:    clearcutBody,
    images:  ['/clearcut/clearcut-cover.png'],
    gallery: [
      '/clearcut/clearcut-1.png',
      '/clearcut/clearcut-2.png',
      '/clearcut/clearcut-3.png',
      '/clearcut/clearcut-4.png',
    ],
    galleryLayout: 'wide',
    tech:     ['In-browser AI', 'On-device', 'Web app'],
    imageAlt: 'ClearCut image tool screen',
    links: [
      { label: 'Try ClearCut', url: 'https://rukkiecodes.github.io/ClearCut/' },
    ],
  },
  {
    slug:    'docgrab',
    status:  'coming-soon',
    eyebrow: '06 — Browser Extension',
    title:   'DocGrab',
    tagline: 'Save any documentation as clean Markdown or JSON you own.',
    summary:
      'A Chrome extension that turns the page you are reading — or an entire documentation site — into clean Markdown or JSON, saved straight into a folder you choose. It reads the already-rendered page, strips ads and pop-ups, and works offline with no servers.',
    body:    docgrabBody,
    images:  ['/docgrab/docgrab-1.png'],
    gallery: [
      '/docgrab/docgrab-2.png',
      '/docgrab/docgrab-3.png',
      '/docgrab/docgrab-4.png',
      '/docgrab/docgrab-5.png',
    ],
    galleryLayout: 'wide',
    tech:     ['Chrome extension', 'Markdown', 'JSON', 'CLI tools'],
    imageAlt: 'DocGrab extension screen',
    links: [],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
