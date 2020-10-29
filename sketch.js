var fixedRect , movingRect;



function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 100);
 fixedRect.shapeColor="green";
 fixedRect.debug= true;
  movingRect=createSprite(200,200,100,50)
  movingRect.shapeColor="green";
  movingRect.debug= true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";


  gameObject1.velocityX= 5;
  gameObject4.velocityX=-5
}

function draw() {
  background(255,255,255);  
  movingRect.x= mouseX;
  movingRect.y= mouseY;


bounceOff(gameObject1 ,gameObject4)



if(isColliding(movingRect,gameObject4))


{
  movingRect.shapeColor="blue";
 gameObject4.shapeColor="blue"
}
else
{
  movingRect.shapeColor="green";
 
 gameObject4.shapeColor="green"
}

  
  drawSprites();
}







