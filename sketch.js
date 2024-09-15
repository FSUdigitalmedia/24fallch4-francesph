let theFont;

let textX;
let textY;
let textColor;

let distance;
let threshold = 150

//______________________________________________________________
function preload() {
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
}
//______________________________________________________________
function setup() {
  createCanvas(400, 400);

  setPositionAndColor();

  textFont(theFont);
  textSize(35);
  noStroke();
}
//___________________________________________________________
//pt1: when mouse is clicked, word moves
function setPositionAndColor() {
  textX = random(0, width);
  textY = random(0, height);
  textColor = color(0);
}
//_________________________________________________________
function draw() {
  background(0);

  //flashlight
  fill(255);
  ellipse(mouseX, mouseY, 80, 80);
  
  fill(textColor);
  text("Hide", textX, textY, 100);
  
  //makes word move away from the mouse
  distance = dist(mouseX, mouseY, textX, textY);
  
  if (distance < threshold) {
    if (mouseX < textX) {
      textX = textX + 1;
    } else if (mouseX > textX) {
      textX = textX - 1;
    }
    
    if (mouseY < textY) {
      textY = textY + 1;
    } else if (mouseY > textY) {
      textY = textY - 1;
    }
  }
}
//___________________________________________________________
//pt2: when mouse is pressed word spawns elsewhere
function mousePressed() {
  setPositionAndColor();
}