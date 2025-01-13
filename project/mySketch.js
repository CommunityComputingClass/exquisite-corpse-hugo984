function setup() {
  createCanvas(500, 500);
  background("violet");
  fill(255);
  rect(0, 0, 75, 20);
  
  eyes(250,250);
  mouth(250,250);
}

function draw() { 
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);
}

function eyes(x,y) {
 fill("green")
ellipse(x-50, y-50, 50, 35)
ellipse(x+50, y-50, 50, 35)
 fill("purple")
circle(x-50, y-50, 30)
circle(x+50, y-50, 30)
 fill("black")
circle(x-50, y-50, 15)
circle(x+50, y-50, 15)
 fill("white")
circle(x-50, y-52, 5)
circle(x+50, y-52, 5)
}

function mouth(x,y){
  fill("white")
arc(x, y, 150, 85, 0, PI )
  fill("black")
line(x,y+25,x-75,y)
}