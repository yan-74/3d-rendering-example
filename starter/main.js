import * as THREE from 'three';

//scene is the container for all our 3D objects, cameras, and lights
const scene = new THREE.Scene();

//create camera with FOV, aspect ratio, near and far clipping planes
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

//renderer is what draws the scene
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// --- step 1, 3, and 4 code here! ---


//animation loop, which will be called every frame
function animate() {

    requestAnimationFrame(animate);

    // --- step 2 animation code here! ---


    //pass scene and camera to renderer, which draws the 3D scene as a 2D image to the canvas!
    renderer.render(scene, camera);
}

animate();