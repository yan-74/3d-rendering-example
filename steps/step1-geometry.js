// STEP 1: GEOMETRY

//This first step is us creating the 3d model of our cube

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

//create light source with color and intensity and add it to scene
const light = new THREE.PointLight(0xffffff, 67);
light.position.set(5,5,5);

scene.add(light);

//^^^ technically part of fragment shading but we need a light to see our cube