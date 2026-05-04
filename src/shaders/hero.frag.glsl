uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec3 light = normalize(vec3(0.5, 1.0, 0.8));
  float lambert = max(dot(normalize(vNormal), light), 0.0);
  float fres    = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.5);

  // moonlit blue/violet palette — 100% dark theme
  vec3 deep   = vec3(0.015, 0.020, 0.045);
  vec3 mid    = vec3(0.060, 0.090, 0.180);
  vec3 hilite = vec3(0.55, 0.72, 1.00);

  float t = 0.5 + 0.5 * sin(uTime * 0.4 + vUv.x * 6.2831);
  vec3 grad = mix(deep, mid, vUv.y);
  vec3 color = grad * (0.35 + 0.65 * lambert);
  color += hilite * fres * (0.25 + 0.15 * t);

  gl_FragColor = vec4(color, 1.0);
}
