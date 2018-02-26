var x = 230;
var y = [220, 220, 220];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);

  var speed = [random(2, 5), random(4, 6), random(4, 10)];

  // draw drip
  for (var i = 0; i < 3; i++) {
    ellipse(x, y[i], 10);
    y[i] = y[i] + speed[i];

    //first
    // 	fill(255);
    //   ellipse(x, y[0], 10);
    //   y[0] = y[0] + speed[0];

    //   // if (y > height) {
    //   //   y[0] = 220;
    //   //   print('done');
    //   // }

    //   second
    // 	ellipse(x, y[1], 10);
    //   y[1] = y[1] + speed[1];

    //   //third
    //   ellipse(x, y[2], 10);
    //   y[2] = y[2] + speed[2];

    //   // for (y = 0; y > 400; y++) {
    //   //   y = 220;
    //   // }


    if (y[i] > height * 2) {
      // reset
      print('done ', i);
      y[i] = 220;
    }
  }
}
