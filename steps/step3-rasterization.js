// STEP 3: Rasterization

// To show the rasterization process of turning our 3d model into pixels, we decrease the pixel ratio / resolution to show them more clearly

material.wireframe = false;

//increase size of cube and pixel ratio
cube.scale.set(4,4,4);

renderer.setPixelRatio(0.4);