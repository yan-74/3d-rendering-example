import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// ======================
// STEP 1: GEOMETRY HERE
// ======================



// ======================
// STEP 4: FRAGMENT SHADING HERE
// ======================



function animate() {

    requestAnimationFrame(animate);

    // ======================
    // STEP 2: VERTEX SHADING HERE
    // ======================



    // ======================
    // STEP 3: RASTERIZATION HERE
    // ======================


    
    renderer.render(scene, camera);
}

animate();