let theFont;
var angle = 0;
var d1;

var textX = 200
var textY = 200


function preload() {
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(theFont);
  textSize(35);
  noStroke();
}

function draw() {
  background(0);
  
  ellipse(mouseX, mouseY, 100, 100);
  text("Hide", textX, textY, 100, 100);

  if (keyIsPressed){
    if (keyCode ==  RIGHT_ARROW) {
      textX +=5;
    } else if (keyCode == LEFT_ARROW) {
      textX -= 5;
    } else if (keyCode == UP_ARROW) {
      textY -= 5;
    }else if (keyCode == DOWN_ARROW) {
      textY +=5;
    }
  }
}
