# 3D_Portfolio


1. main.js:

// Constants
const NUM_STARS = 10000;
const GALAXY_RADIUS = 2000;

The code starts by defining two constants. NUM_STARS represents the number of stars in the galaxy, and GALAXY_RADIUS defines the maximum radius within which the stars will be scattered.

// Create the scene
const scene = new THREE.Scene();

Here, a new instance of the THREE.Scene class is created. The scene will hold all the 3D objects in the portfolio.

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 2000;

The code creates a perspective camera using the THREE.PerspectiveCamera class. The parameters passed to the constructor define the field of view (75 degrees), aspect ratio (based on the window's inner width and height), near clipping plane (0.1), and far clipping plane (10000). The camera is then positioned at z = 2000.

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

A new instance of the THREE.WebGLRenderer class is created. This renderer is responsible for rendering the 3D scene using WebGL. The renderer's size is set to match the window's inner width and height. The renderer's DOM element is then appended to the 'canvas-container' div in the HTML.

// Create stars
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(NUM_STARS * 3);

In this section, a buffer geometry is created to efficiently manage large sets of vertices. The starGeometry represents the geometry of the stars. The starPositions array is initialized as a Float32Array with a size of NUM_STARS * 3, where each star position has three components (x, y, z).

for (let i = 0; i < NUM_STARS; i++) {
  const index = i * 3;
  const radius = Math.random() * GALAXY_RADIUS;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  starPositions[index] = radius * Math.sin(phi) * Math.cos(theta);
  starPositions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
  starPositions[index + 2] = radius * Math.cos(phi);
}

The for loop generates random positions for each star in spherical coordinates. The radius is randomized within the GALAXY_RADIUS. The theta angle represents the azimuthal angle around the y-axis, and it is randomized between 0 and 2π (Math.PI * 2). The phi angle represents the polar angle from the positive y-axis, and it is calculated using the inverse cosine of a random value between -1 and 1. The star positions are then calculated using the spherical coordinate formulas and stored in the starPositions array.

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

The 'position' attribute of the starGeometry is set using the starPositions array. This defines the positions of the stars in 3D space.

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starGeometry, starMaterial);

A points material is created using the THREE.PointsMaterial class. It sets the color of the stars to white (0xffffff).

A THREE.Points object is created using the starGeometry and starMaterial. It represents a set of particles rendered as points. The stars object is added to

the scene using the `scene.add(stars)` method.

// Create lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(100, 100, 100);
scene.add(pointLight);

In this section, lighting is added to the scene. An ambient light of color 0x404040 is created using `THREE.AmbientLight` and added to the scene. This light provides overall illumination to all objects in the scene.

A point light of color white (0xffffff) and intensity 1 is created using `THREE.PointLight`. It is positioned at (100, 100, 100) in 3D space. This light will cast light from a specific position.

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.001;

  renderer.render(scene, camera);
}

The `animate` function is defined, which will be called recursively to update the scene and render it continuously. Inside the `animate` function, the `rotation.y` property of the `stars` object is incremented by a small amount to rotate the stars around the y-axis. Then, the `renderer` is used to render the scene with the updated camera perspective.

Finally, outside the `animate` function, the `animate()` function is called to start the animation loop.

2. index.html:

The HTML file sets up the basic structure for the webpage. It includes the necessary HTML elements.

3. style.css:

body {
  margin: 0;
  overflow: hidden;
}

#canvas-container {
  width: 100%;
  height: 100vh;
}

The CSS file contains two styles. The `body` style sets the margin to 0, removing any default spacing around the page. The `overflow` property is set to `hidden`, ensuring that no scrollbars appear even if the content overflows.

The `#canvas-container` style sets the width to 100% and the height to 100vh (100% of the viewport height). This ensures that the canvas container div takes up the entire visible area of the browser window.
