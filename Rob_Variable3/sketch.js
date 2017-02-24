//these are all variables
// this is the position of the shape
var x = 0; 
var y = 200;
var diameter = 50; // this is the size of the shape
var r = 23; //this is the color of the shape
var g = 160;
var b = 135;

function setup() {
  createCanvas(600, 400); //this is the size of the canvas
}

function draw() {
  background(r, g, b); //this is the color of the background
  fill(250, 200, 200); //this is the color of the shape
  ellipse(x, y, diameter, diameter);
  
  x = x + 1;
  y = y + 0.3; // this makes the shape move at a angle
}
