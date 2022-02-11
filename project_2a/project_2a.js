// Sample code for Project 2A
// Draws 3D Primitives (box, cylinder, sphere, cone, torus)


let time = 0;  // track the passage of time, used to move the objects

// called once at the start
function setup() {
  createCanvas(600, 600, WEBGL);
  
  let fov = 60.0;  // 60 degrees FOV
  perspective(PI * fov / 180.0, width / height, 0.1, 2000);
}

// this is called repeatedly to draw new per-frame images
function draw() {
  
  background(220, 220, 255);  // light blue background
  
  // set the virtual camera position
  camera(0, 0, 85, 0, 0, 0, 0, 1, 0);  // from, at, up
  
  // include some light even in shadows
  ambientLight(60, 60, 60);
  
  // set light position
  pointLight(255, 255, 255, 100, -100, 300);

  noStroke();  // do not draw polygon outlines
  
  let delta = 25;

  fill(250);
  push();
  translate(0, 0);
  translate (-5.0 * sin(time), 0.0, 0.0);
  sphere(15);
  pop();
  
  fill(50, 200, 100);
  push();
  translate(-delta, -delta);
  let box_axis = createVector (0.0, 1.0, 0.0);
  rotate (-time, box_axis);
  box(20);
  pop();
  
  fill(100, 150, 250);
  push();
  translate(-delta, delta);
  rotateX(PI)
  let cone_axis = createVector (1.0, 0.0, 0.0);
  rotate (-time, cone_axis);
  cone(10, 25);
  pop();
  
  fill(250, 50, 100);
  push();
  translate(delta, -delta);
  let cyl_axis = createVector (0.0, 0.0, 1.0);
  rotate (-time, cyl_axis);
  cylinder(10, 20);
  pop();
  
  fill(150, 0, 150);
  push();
  translate(delta, delta);
  scale (0.3 * (sin (time) + 2.5));
  torus(12, 6, 32, 20);
  pop();
  
  time += 0.03;  // update the time
}
