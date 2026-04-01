//STEP 2: Vertex shading

//Simulate the transformations done in vertex shading, these animations are run every frame
//Pick any animation and try them out!

//rotate
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

//scale
cube.scale.x = 1 + 0.5 * Math.sin(Date.now() * 0.002);
cube.scale.y = 1 + 0.5 * Math.cos(Date.now() * 0.002);

//move the camera!
camera.position.x = 5 * Math.sin(Date.now() * 0.001);
camera.lookAt(cube.position);