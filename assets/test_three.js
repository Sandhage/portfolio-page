// Sets up the scene, camera, and renderer as global variables...
var scene, camera, renderer;

init();
animate();

function init() {
	// Sets up the scene...
	scene = new THREE.Scene();
	var WIDTH  = window.innerWidth,
		HEIGHT = window.innerHeight;

	// Creates the renderer & adds it to the DOM...
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(WIDTH, HEIGHT);
	document.body.appendChild(renderer.domElement);

	// Creates a camera, zooms out from model, and adds it to the scene...
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
	camera.position.set(0, 6, 0);
	scene.add(camera);

	// Creates an event listener to make scene responzive to window size...
	window.addEventListener('resize', function() {
		var WIDTH  = window.innerWidth,
			HEIGHT = window.innerHeight;

		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
	});

	// Creates a light, sets its position, and adds it to the scene...
	var light = new THREE.PointLight(0xffffff);
	light.position.set(-100, 200, 100);
	scene.add(light);

	// Load Geometry -- need Blender to continue
}