var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
    for (var i = 0; i < 100; i++) {
      
    x[i] = random(200, 220);
    y[i] = random(50, 300);
    r[i] = random(1,360);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for (var i = 0; i < 100; i++) {
  push();
  fill(y[i]);
  translate(x[i], y[i]);
  rotate(r[i]);
  rect(10, 5, 20, 20);
  pop(accelerationX);
  
    
  // up 3 pixels
  y[i] -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.05
  
  // if reach past the top a bunch
  if (y[i] < 50) {
    y[i] = 280;
  }
}
}
