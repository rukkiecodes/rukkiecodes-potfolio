uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normal;

  vec3 pos = position;
  float wave = sin(pos.x * 3.0 + uTime) * 0.15
             + cos(pos.y * 2.5 + uTime * 1.3) * 0.15;
  pos += normal * wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
