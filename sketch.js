let theFont;
let posX;
let posY;

let distance;
let threshold = 100


function preload() {
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  posX = 200;
  posY = 200;
  textFont(theFont);
  textSize(35);
  noStroke();
}

function draw() {
  background(110);

  fill(255);
  ellipse(mouseX, mouseY, 80, 80);
  
  fill(0)
  text("Hide", posX, posY, 100, 100);
  
  distance = dist(mouseX, mouseY, posX, posY);
  
  if (distance < threshold) {
    if (mouseX < posX) {
      posX = posX + 1;
    } else if (mouseX > posX) {
      posX = posX - 1;
    }
    
    if (mouseY < posY) {
      posY = posY + 1;
    } else if (mouseY > posY) {
      posY = posY - 1;
    }
  }
}
