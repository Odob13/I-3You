var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(1, 32, 32);
geometry.scale(-1, 1, 1); // Invertir la esfera
var material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('demo/Background.jpg')
});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

renderer.domElement.addEventListener('mousemove', function(e) {
    var x = (e.clientX / window.innerWidth) * 2 - 1;
    var y = -(e.clientY / window.innerHeight) * 2 + 1;
    camera.rotation.y = x;
    camera.rotation.x = y;
});