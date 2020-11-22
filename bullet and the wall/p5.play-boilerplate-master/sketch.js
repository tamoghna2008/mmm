var car,wall;
var Speed,Weight;
var thickness;




function setup() {
  createCanvas(1600,400);
  Speed=random(223,321);
  car=createSprite(100, 200, 50, 50);
  car.shapeColor="black"
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
  Weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  car.velocityX=Speed;
 // if(Collided(bullet,wall))
 if(wall.x-car.x<=(car.width+wall.width)/2){
  car.velocityX=0;
    var damage=0.5*Weight*Speed*Speed/(thickness*thickness*thickness)
    if(damage>10){
    car.shapeColor="white";
    wall.shapeColor="red"
  }
  if(damage<10){
   car.shapeColor="white" 
   wall.shapeColor="green";
  }
  
  
  }

  
  drawSprites();
}
 
 
 
  
