function setup() {
  createCanvas(500, 500);
  

}

function draw() {
  background(84,169,209);
  fill(255);
  rect(0, 0, 75, 20);
  
  //text showing mouse coordinates
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);
  fill("white")
  arc(150, 150, 80, 80, 0, PI );
  arc(275, 150, 80, 80, 0, PI );
  fill("brown")
  circle(150, 170, 30)
  circle(275, 170, 30)
  fill("black")
  circle(275, 170, 15)
  circle(150, 170, 15)
}
