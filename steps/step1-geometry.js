// STEP 1: GEOMETRY

//box geometry contains all the points (vertices) and faces (triangles) that make up a cube
const geometry = new THREE.BoxGeometry();

//material of the cube to color it
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    wireframe: true,
});

//mesh takes the geometry and applies a material to it, which we can then add to the scene
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);