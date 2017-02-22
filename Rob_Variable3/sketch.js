var x = 0;
var y = 200;
var diameter = 50;
var r = 23;
var g = 160;
var b = 135;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r, g, b);
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);
  
  x = x + 1;
  y = y + 0.3;
}