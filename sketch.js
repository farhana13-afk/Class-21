var fixedR, movingR;
var rect1, rect2;

var rect3, rect4, rect5, rect6;

function setup() {
  createCanvas(800,400);
  fixedR= createSprite (400,200,40,50);
  fixedR.shapeColor= "grey";
  movingR= createSprite(200,300,40,50);
  movingR.shapeColor="grey";
  rect1 = createSprite(400, 10, 60, 60);
  rect1.shapeColor= "green";
  rect1.velocityY= 4;
  rect2 = createSprite(400, 390, 60, 60);
  rect2.shapeColor="yellow";
  rect2.velocityY=-4;
  rect3 = createSprite(400, 390, 60, 60);
  rect3.shapeColor="red";
  //rect3.velocityY=-4;
  rect4 = createSprite(200, 150, 60, 60);
  rect4.shapeColor="red";
  rect5 = createSprite(200, 150, 60, 60);
  rect5.shapeColor="red";
  rect6 = createSprite(250, 150, 60, 60);
  rect6.shapeColor="red";
  
}

function draw() {
  background("blue");  
   movingR.x = mouseX;
   movingR.y= mouseY;
   
     bounceOff(rect1,rect2);

   if(isTouching(movingR, rect4)){
     movingR.height= movingR.height *2;
     rect4.height= rect4.height *2;
   } else{
     movingR.height=50;
     rect4.height=60;
   }
  
  drawSprites();
}
