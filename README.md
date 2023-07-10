# 3D_Portfolio

1. main.js:

Sure! Here's the revised description:

I start by defining two constants: `NUM_STARS`, which represents the number of stars in the galaxy, and `GALAXY_RADIUS`, which defines the maximum radius within which the stars will be scattered.

Next, I create a new instance of the `THREE.Scene` class to hold all the 3D objects in the portfolio.

Using the `THREE.PerspectiveCamera` class, I create a perspective camera with a field of view of 75 degrees, an aspect ratio based on the window's inner width and height, and near and far clipping planes that determine the visible range. The camera is positioned at z = 2000.

To render the 3D scene, I create a new instance of the `THREE.WebGLRenderer` class. Its size is set to match the window's inner width and height, and the renderer's DOM element is appended to the 'canvas-container' div in the HTML.

To create the stars, I use a buffer geometry, `THREE.BufferGeometry`, which efficiently manages large sets of vertices. I generate random positions for each star in spherical coordinates, based on the `GALAXY_RADIUS`. The positions are calculated using spherical coordinate formulas and stored in the `starPositions` array.

The positions are then assigned to the `position` attribute of the `starGeometry`. A points material, `THREE.PointsMaterial`, is created, setting the color of the stars to white.

A `THREE.Points` object is created using the `starGeometry` and `starMaterial`, representing a set of particles rendered as points. It is added to the scene using the `scene.add(stars)` method.

I create a moon using a `THREE.SphereGeometry` object with a radius of 200 units and 32 horizontal and vertical segments. The visual properties are defined using a `THREE.MeshPhongMaterial` with a light gray color. The moon object is created as a `THREE.Mesh` combining the geometry and material. It is then added to the scene.

I add lighting to the scene, including an ambient light that provides overall illumination and a point light that casts light from a specific position.

To animate the scene, I define the `animate` function, which is called recursively. Within this function, I increment the rotation of the stars and the moon to create the desired movement. The moon rotates around its vertical axis, and its position is updated based on the current time and a small value to control the speed of movement. The scene is rendered with the updated camera perspective using the `renderer.render(scene, camera)` method.

Finally, I call the `animate()` function to start the animation loop.

2. index.html:

The HTML file sets up the basic structure for the webpage. It includes the necessary HTML elements.


3. style.css:

The CSS file contains two styles. The `body` style sets the margin to 0, removing any default spacing around the page. The `overflow` property is set to `hidden`, ensuring that no scrollbars appear even if the content overflows.

The `#canvas-container` style sets the width to 100% and the height to 100vh (100% of the viewport height). This ensures that the canvas container div takes up the entire visible area of the browser window.

