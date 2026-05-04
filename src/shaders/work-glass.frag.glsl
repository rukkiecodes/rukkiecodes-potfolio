uniform float uTime;
uniform float uProgress;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  vec2 uv = vUv;
  float t = smoothstep(0.0, 1.0, uProgress);

  // base — very subtle cool dark tint, much lighter than glassmorphism
  vec3 col = vec3(0.04, 0.05, 0.08);

  // shortest distance to any edge (in normalized UV)
  float edgeMin = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));

  // thin bright outer rim — the curved glass edge catching light.
  // Apple's liquid glass: a 1–2px luminous border around the panel.
  float rimMask    = (1.0 - smoothstep(0.0, 0.004, edgeMin));
  vec3 rimColor    = vec3(0.85, 0.90, 1.00);
  col += rimColor * rimMask * 0.55;

  // slightly broader inner highlight that fades inward — sells the thickness
  float innerEdge  = (1.0 - smoothstep(0.0, 0.030, edgeMin)) * 0.5;
  col += vec3(0.18, 0.22, 0.30) * innerEdge;

  // top-edge sheen — concentrated highlight where light catches the top
  float topMask = smoothstep(0.75, 1.0, uv.y) *
                  smoothstep(0.0,  0.15, uv.x) *
                  smoothstep(1.0,  0.85, uv.x);
  col += topMask * vec3(0.10, 0.12, 0.16);

  // gentle radial darkening toward the corners — feels like glass with depth
  vec2 fc = uv - 0.5;
  float radial = length(fc * vec2(1.4, 1.0));
  col *= 1.0 - smoothstep(0.5, 0.85, radial) * 0.35;

  // very fine micro-grain (barely visible)
  float grain = noise2(uv * 280.0) - 0.5;
  col += grain * 0.008;

  // slow internal shimmer — the "liquid" qualifier
  float shimmer = sin(uv.y * 5.0 + uTime * 0.35) *
                  cos(uv.x * 3.0 + uv.y * 1.4 + uTime * 0.28);
  col += shimmer * 0.01;

  // alpha — significantly more transparent than glassmorphism so the
  // hero behind reads as a real glass overlay, not a frosted pane.
  float alpha = mix(0.36, 0.55, t);

  gl_FragColor = vec4(col, alpha);
}
