// Constants
const NUM_STARS = 10000;
const GALAXY_RADIUS = 2000;

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 2000;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create stars
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(NUM_STARS * 3);

for (let i = 0; i < NUM_STARS; i++) {
  const index = i * 3;
  const radius = Math.random() * GALAXY_RADIUS;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  starPositions[index] = radius * Math.sin(phi) * Math.cos(theta);
  starPositions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
  starPositions[index + 2] = radius * Math.cos(phi);
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starGeometry, starMaterial);

scene.add(stars);

// Create lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(100, 100, 100);
scene.add(pointLight);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();
