var bullet, wall;
var  thickness, speed, weight;
var wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  speed=random(221,321);
  weight=random(25,30);

 bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1350,200,60,thickness,height/2);
 
bullet.velocityX = speed;






thickness=random(22,83);

}

function draw() {
  background("black");
  
  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=speed;
    var damage=0.5 * speed*speed/(thickness*thickness*thickness);


   if(damage>10)
   {
     wall.shapeColor="red";

   }

   if(damage<10)
   {
     wall.shapeColor="green";
   }
  }
  


  drawSprites();


  hascollided(bullet,wall);
}

function hascollided(_bullet,_wall)
{

  bulletRightEdge=_bullet.x +_bullet.width;
  bulletLeftEdge=_wall.x;
 if(bulletRightEdge>=wallLeftEdge);
  {
    return true;
  }
  return false;
}

