var x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500];
var y = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500];
var d = [10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 10, 30, 10, 30, 10, 10, 30, 10, 30, 10, 10, 30, 10, 30, 10, 10, 30, 10, 30, 10, 10, 30, 10, 30, 10];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

  // draw ellipses
  for (var i = 0; i < 50; i++) {
    noFill();
  fill(i*8+10, i*20+20, i*50+50);
  ellipse(x[i], y[i], d[i]);
  
  // 1% of the time
  if (random() < 0.01*(i +1)) {
    // random diameter between 10 and 80
    d[i] = random(10, 80);
  }
}
}
