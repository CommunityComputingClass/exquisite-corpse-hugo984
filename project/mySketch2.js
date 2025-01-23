let color = "red"; 
let colors = ["red", "green", "yellow", "purple"];

function setup() {
    createCanvas(500, 500);
    background("violet");
    
    
    
    eyes(250,250);
    beak(350,350);
  }
  
  function draw() {

  }
  
  function eyes(x,y) {
    fill("black");
    arc(x+45, y-75, 80, 80, 0, PI - QUARTER_PI);
    arc(x-45, y-75, 80, 80, QUARTER_PI, PI);
  fill("yellow")
  arc(x-45, y-60, 40, 40, PI/4, PI);
  arc(x+45, y-60, 40, 40, 0, PI - QUARTER_PI)
   fill("black")
  ellipse(x-45, y-50, 10,15)
  ellipse(x+45, y-50, 10,15)
   fill("white")
  circle(x-45, y-52, 5)
  circle(x+45, y-52, 5)
  }
  
  function beak(x,y){
  fill("yellow")
  arc(x, y, 150, 85, 0, PI )
  line(x,y+25,x-75,y)
  line(x+75,y,x-75,y)
  line(x,y+25,x+75,y)
  fill("black")
  
 
  }