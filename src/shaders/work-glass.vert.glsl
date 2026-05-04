varying vec2 vUv;

void main() {
  vUv = uv;
  // PlaneGeometry(2,2) is already in clip space — bypass projection.
  gl_Position = vec4(position, 1.0);
}
