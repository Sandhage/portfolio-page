var camera, scene, renderer;
var mesh;

$('document').ready(function() {
	init();
	animate();
});

function init() {
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 350;

	scene = new THREE.Scene();

	var material,
		loader = new THREE.TextureLoader();
	loader.load(
		// Function when resource is loaded
		function(texture) {
			// do something with the texture
			material = new THREE.MeshBasicMaterial({
				map: texture
			});
		},
		// Function called when download progresses
		function(xhr) {
			console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
		},
		// Function called when download errors
		function(xhr) {
			console.log( 'An error happened' );
		}
	);

	var geometry = new THREE.BoxGeometry(200, 200, 200);

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// 

	window.addEventListener('resize', onWindowResize, false);

	//

	// renderer.setClearColorHex(0xFFFFFF, 1); -- out of date, breaks page
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.001;

	renderer.render(scene, camera);
}