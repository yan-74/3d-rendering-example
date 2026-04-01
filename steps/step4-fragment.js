// STEP 4: FRAGMENT SHADING

const newMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.5,
    roughness: 0.5
});

cube.material = newMaterial;

const light = new THREE.PointLight(0xffffff, 67);
light.position.set(5,5,5);

scene.add(light);