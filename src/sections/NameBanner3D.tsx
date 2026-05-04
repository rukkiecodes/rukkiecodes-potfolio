import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader, type Font } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

// RectAreaLight needs its uniforms registered before first use.
RectAreaLightUniformsLib.init()

const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'

function NameMesh() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const font = useLoader(FontLoader as any, FONT_URL) as Font
  const { viewport } = useThree()

  const { geometry, naturalWidth } = useMemo(() => {
    const g = new TextGeometry('TERRY AMAGBORO', {
      font,
      size: 0.62,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.015,
      bevelSegments: 5,
    })
    g.computeBoundingBox()
    const bb = g.boundingBox!
    const naturalWidth = bb.max.x - bb.min.x
    g.translate(
      -(bb.max.x + bb.min.x) / 2,
      -(bb.max.y + bb.min.y) / 2,
      -(bb.max.z + bb.min.z) / 2,
    )
    return { geometry: g, naturalWidth }
  }, [font])

  // Fit the text to ~88 % of the visible viewport width — scales down on
  // narrower screens, capped at 1× so it never grows beyond the original size.
  const scale = Math.min(1, (viewport.width * 0.88) / naturalWidth)

  return (
    <mesh geometry={geometry} scale={scale}>
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.95}
        roughness={0.18}
        clearcoat={1}
        clearcoatRoughness={0.08}
        envMapIntensity={1}
      />
    </mesh>
  )
}

interface AreaLightProps {
  position: [number, number, number]
  intensity?: number
  width?: number
  height?: number
  color?: string
}

function AreaLight({
  position,
  intensity = 5,
  width = 5,
  height = 3,
  color = '#ffffff',
}: AreaLightProps) {
  const ref = useRef<THREE.RectAreaLight>(null)
  useEffect(() => {
    ref.current?.lookAt(0, 0, 0)
  }, [])
  return (
    <rectAreaLight
      ref={ref}
      position={position}
      intensity={intensity}
      width={width}
      height={height}
      color={color}
    />
  )
}

export function NameBanner3D() {
  return (
    <div className="hero__banner-3d">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* tiny ambient so deep shadows don't go fully black */}
        <ambientLight intensity={0.08} />

        {/* 1. top-left soft key */}
        <AreaLight position={[-5, 3.5, 4]}  intensity={6.6}  width={6} height={4} color="#ffffff" />

        {/* 2. top-right cool fill */}
        <AreaLight position={[ 5, 3.5, 4]}  intensity={5.5}  width={6} height={4} color="#bccaff" />

        {/* 3. bottom-center warm uplight */}
        <AreaLight position={[ 0, -3,  3]}  intensity={4.4}  width={8} height={3} color="#ffe4c4" />

        <Suspense fallback={null}>
          <NameMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
