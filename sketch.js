var car, wall;
var speed,weight;


function setup() {
    createCanvas(1500,400);

speed=random(50,160);
weight=random(400,1500);

car = createSprite(50,200,50,50);
car.velocityX=speed;

wall=createSprite(1300,200,50,300);
wall.shapeColor="white";
}

function draw() {
  background(0);  
 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
   
    var deformation = 0.5*speed*weight*speed/22550;

  if(deformation>180){
    car.shapeColor="red";
  }
  else if (deformation<180 && deformation>100){
    car.shapeColor="yellow";
  }
  else if(deformation<100){
    car.shapeColor="lightgreen";
  }
  }

  drawSprites();
}