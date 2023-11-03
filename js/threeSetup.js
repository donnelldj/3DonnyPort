// Step 1: The inclusion of Three.js should be done in your HTML file, 
// so we'll skip that here and move directly to the setup.

// Step 2: Basic Three.js Setup
import * as THREE from 'three';

let scene, camera, renderer, cube;

function initThreeJS() {
    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create the cube
    createCube();

    // Call the animation function
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Step 3: Handle Dynamic Resizing for Responsiveness

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Step 4: Add a 3D Object

function createCube() {
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0xffaa00 }); // orange color
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// Finally, initialize everything
initThreeJS();
