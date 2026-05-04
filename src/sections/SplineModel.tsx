import Spline from '@splinetool/react-spline'
import { Component, type ReactNode, useEffect, useRef, useState } from 'react'

interface SplineModelProps {
  scene: string
  headName?: string
  yawRange?: number
  pitchRange?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SplineApp = any

// Catches both runtime errors and load errors so a bad scene doesn't kill
// the whole service section.
class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(err: unknown) {
    // eslint-disable-next-line no-console
    console.error('[SplineModel] failed to render scene', err)
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function Fallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(245,243,255,0.4)',
        fontSize: '0.85rem',
        textAlign: 'center',
        padding: '1rem',
        fontFamily: 'ui-monospace, monospace',
      }}
    >
      Spline scene unavailable —<br />
      export your file as runtime code (.splinecode)
    </div>
  )
}

function SplineInner({ scene, headName, yawRange, pitchRange }: SplineModelProps) {
  const headRef = useRef<SplineApp | null>(null)
  const [, setLoaded] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const head = headRef.current
      if (!head) return
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const nx = (e.clientX - cx) / cx
      const ny = (e.clientY - cy) / cy
      head.rotation.y =  nx * (yawRange ?? 0.45)
      head.rotation.x = -ny * (pitchRange ?? 0.28)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [yawRange, pitchRange])

  return (
    <Spline
      scene={scene}
      onLoad={(app) => {
        const candidates = [headName ?? 'Head', 'Head', 'head', 'Robot Head', 'RobotHead']
        for (const name of candidates) {
          const obj = app.findObjectByName(name)
          if (obj) {
            headRef.current = obj
            break
          }
        }
        if (!headRef.current) {
          // eslint-disable-next-line no-console
          console.warn(
            '[SplineModel] head object not found. Top-level scene names:',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (app as any)._scene?.children?.map?.((c: any) => c.name) ?? '(unavailable)',
          )
        }
        setLoaded(true)
      }}
      onError={(err) => {
        // eslint-disable-next-line no-console
        console.error('[SplineModel] scene load error', err)
      }}
    />
  )
}

export function SplineModel(props: SplineModelProps) {
  return (
    <SplineErrorBoundary fallback={<Fallback />}>
      <SplineInner {...props} />
    </SplineErrorBoundary>
  )
}
