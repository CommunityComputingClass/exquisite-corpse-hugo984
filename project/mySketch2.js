let color = "red"; 
let colors = ["red", "green", "yellow", "purple"];

function setup() {
    createCanvas(500, 500);
    background("violet");
    fill(255);
    rect(0, 0, 75, 20);
    
    eyes(250,250);
    beak(250,250);
  }
  
  function draw() {

  }
  
  function eyes(x,y) {
    fill(colors[1]);
  ellipse(x-50, y-50, 50, 35)
  ellipse(x+50, y-50, 50, 35)
  fill(colors[3])
  circle(x-50, y-50, 30)
  circle(x+50, y-50, 30)
   fill("black")
  circle(x-50, y-50, 15)
  circle(x+50, y-50, 15)
   fill("white")
  circle(x-50, y-52, 5)
  circle(x+50, y-52, 5)
  }
  
  function beak(x,y){
  fill("yellow")
  arc(x, y, 150, 85, 0, PI )
  line(x,y+25,x-75,y)
  line(x+75,y,x-75,y)
  line(x,y+25,x+75,y)
  fill("black")
  ellipse(x-25,y+10,5,10)
  ellipse(x+25,y+10,5,10)
  }