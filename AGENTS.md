# rukkiecodes-v2

Personal portfolio website for rukkiecodes — fully interactive, built with three.js and custom GLSL shaders.

## Stack

- three.js for 3D scenes, geometry, materials, animation, interaction
- Custom GLSL shaders (vertex + fragment) for bespoke visual effects
- Vite + React + TypeScript
- `@react-three/fiber` (R3F) + `@react-three/drei` for declarative scenes
- Shader files (`.vert.glsl` / `.frag.glsl`) imported as strings via Vite's native `?raw` suffix

## Project layout

- `src/App.tsx` — root, mounts the R3F `<Canvas>` + DOM overlay
- `src/scene/` — R3F scene components (e.g. `HeroMesh.tsx`)
- `src/shaders/` — `.vert.glsl` / `.frag.glsl` files imported as strings

## Scripts

- `npm run dev` — Vite dev server with HMR (shaders hot-reload)
- `npm run build` — production build
- `npm run preview` — preview the build

## Skills installed (.agents/skills)

- `threejs-fundamentals` — scene, camera, renderer, loop basics
- `threejs-geometry` — geometries, BufferGeometry, instancing
- `threejs-materials` — built-in materials and ShaderMaterial
- `threejs-shaders` — custom vertex/fragment shaders in three.js
- `threejs-animation` — clocks, tweening, AnimationMixer
- `threejs-interaction` — raycasting, pointer events, controls
- `glsl` — GLSL language reference and shader patterns

Use these skills when working on the matching subsystem.

## Goals

- High-performance, interactive 3D portfolio
- Original shader-driven visuals (not stock effects)
- Smooth across desktop + mobile, with graceful degradation
