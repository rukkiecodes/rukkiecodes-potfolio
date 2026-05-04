import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import sphereVert from '../shaders/iridescentSphere.vert.glsl?raw'
import sphereFrag from '../shaders/iridescentSphere.frag.glsl?raw'

export interface NoisySphereProps {
  position?: [number, number, number]
  radius?: number
  /** if true, rotation lerps toward the cursor instead of auto-rotating */
  followCursor?: boolean
  /** rad/s — only used when followCursor is false */
  autoRotateSpeed?: number
  /** how far to swing on each axis (radians) when followCursor is true */
  yawRange?: number
  pitchRange?: number
}

export function NoisySphere({
  position        = [0, 0, 0],
  radius          = 0.855,
  followCursor    = false,
  autoRotateSpeed = 0.04,
  yawRange        = 0.6,
  pitchRange      = 0.4,
}: NoisySphereProps) {
  const meshRef   = useRef<THREE.Mesh>(null)
  const matRef    = useRef<THREE.ShaderMaterial>(null)
  const targetRef = useRef({ x: 0, y: 0 })

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useEffect(() => {
    if (!followCursor) return
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const nx = (e.clientX - cx) / cx
      const ny = (e.clientY - cy) / cy
      targetRef.current.x = -ny * pitchRange
      targetRef.current.y =  nx * yawRange
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [followCursor, yawRange, pitchRange])

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    const m = meshRef.current
    if (!m) return
    if (followCursor) {
      // snappier follow so the motion clearly tracks the cursor
      m.rotation.x += (targetRef.current.x - m.rotation.x) * 0.12
      m.rotation.y += (targetRef.current.y - m.rotation.y) * 0.12
    } else {
      m.rotation.y = state.clock.elapsedTime * autoRotateSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position} renderOrder={10}>
      <icosahedronGeometry args={[radius, 140]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={sphereVert}
        fragmentShader={sphereFrag}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}
