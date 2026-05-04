vec3 coords = normal;
coords.y += uTime;
vec3 noisePattern = vec3(pnoise(coords / 1.5));
float pattern = wave(noisePattern + uTime);

vDisplacement = pattern;
// gentler displacement → less stretch per triangle → fewer visible facets
float displacement = vDisplacement / 5.5;

transformed += normalize(objectNormal) * displacement;
