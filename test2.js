function setup() {
  createCanvas(640, 480);
  stroke(255);
  noFill();
}

function draw() {
  background(mouseX,mouseY,100);
  ellipse(mouseX, mouseY, 50, 50);  
}