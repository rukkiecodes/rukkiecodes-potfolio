precision highp float;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying float vDisplacement;
varying vec3 vViewPos;

#define TAU 6.28318530718

// Reconstructs the perturbed surface normal from the displacement gradient.
// Smoother than pure dFdx-of-position (which gives faceted face normals).
vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
  vec3 vSigmaX = dFdx(surf_pos.xyz);
  vec3 vSigmaY = dFdy(surf_pos.xyz);
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3  vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}

// 5-stop spectral palette tuned to the reference image:
// deep blue-purple → violet → magenta-red → orange → cyan.
// Each stop transition is smoothstep-eased so the gradient slope is C¹
// continuous — no visible "kinks" at the segment boundaries.
vec3 spectrum(float t) {
  t = fract(t);
  vec3 c1 = vec3(0.08, 0.05, 0.55);
  vec3 c2 = vec3(0.55, 0.10, 0.92);
  vec3 c3 = vec3(0.95, 0.15, 0.30);
  vec3 c4 = vec3(1.00, 0.50, 0.08);
  vec3 c5 = vec3(0.08, 0.65, 0.98);
  float p = t * 4.0;
  vec3 col = c1;
  col = mix(col, c2, smoothstep(0.0, 1.0, p));
  col = mix(col, c3, smoothstep(1.0, 2.0, p));
  col = mix(col, c4, smoothstep(2.0, 3.0, p));
  col = mix(col, c5, smoothstep(3.0, 4.0, p));
  return col;
}

void main() {
  // perturb normal using the displacement gradient so the lighting reads
  // smooth across the bumpy surface, not faceted.
  vec3 surf_norm = normalize(vWorldNormal);
  vec2 dHdxy = vec2(dFdx(vDisplacement), dFdy(vDisplacement));
  vec3 N = perturbNormalArb(vWorldPos, surf_norm, dHdxy, 1.0);

  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 R = reflect(-V, N);

  float NdotV   = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - NdotV, 1.4);

  // Treat the reflection vector as a sampling direction into a procedural
  // "colorful sky" — different facing surfaces pick up different colors,
  // exactly like a chrome ball under colorful studio lighting.
  float horizAngle = atan(R.z, R.x) / TAU + 0.5;
  float vertical   = R.y * 0.5 + 0.5;

  vec3 colA = spectrum(horizAngle + uTime * 0.04);
  vec3 colB = spectrum(horizAngle * 1.4 + vertical * 0.7 + uTime * 0.025);
  vec3 reflectionColor = mix(colA, colB, 0.45);

  // primary color = reflection (it's a metal)
  vec3 color = reflectionColor;

  // darker where surface faces away from the camera
  color *= 0.28 + NdotV * 0.90;

  // saturate edges (Fresnel boost)
  color += reflectionColor * fresnel * 0.85;

  // sharp specular kick from a fixed key direction → wet shine
  vec3 L1 = normalize(vec3( 0.5,  0.7,  0.6));
  vec3 H1 = normalize(L1 + V);
  float spec1 = pow(max(dot(N, H1), 0.0), 90.0);
  color += vec3(1.0) * spec1 * 1.3;

  // softer colored secondary highlight
  vec3 L2 = normalize(vec3(-0.6, -0.2,  0.7));
  vec3 H2 = normalize(L2 + V);
  float spec2 = pow(max(dot(N, H2), 0.0), 50.0);
  color += vec3(0.55, 0.30, 1.00) * spec2 * 0.8;

  // soft Reinhard tonemap + slight contrast pop
  color = color / (1.0 + color * 0.55);
  color = pow(color, vec3(0.92));

  gl_FragColor = vec4(color, 1.0);
}
