// STEP 1: Create geometry and material, then combine them into a mesh and add it to the scene

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);