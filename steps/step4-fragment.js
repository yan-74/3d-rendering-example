// STEP 4: FRAGMENT SHADING

//Fragment shading is where we determine the color of each pixel, adding lighting and material properties to make our cube look more realistic

//play around with the color and properties of the material to see how it affects the final rendered image!
const newMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.5,
    roughness: 0.5
});

cube.material = newMaterial;

//create light source with color and intensity and add it to scene
const light = new THREE.PointLight(0xffffff, 67);
light.position.set(5,5,5);

scene.add(light);