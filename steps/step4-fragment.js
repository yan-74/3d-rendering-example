// STEP 4: FRAGMENT SHADING

//Fragment shading is where we determine the color of each pixel, adding lighting and material properties to make our cube look more realistic

//play around with the color and properties of the material to see how it affects the final rendered image!
const newMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.5,
    roughness: 0.5
});

cube.material = newMaterial;

//also feel free to edit the light source we created in step 1 to simulate different kinds of lighting!
