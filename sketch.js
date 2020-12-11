var wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  thickness = random(22,83);

  bullet=createSprite(50, 200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "blue";


  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("gray");  
  
  if (wall.x-bullet.x<(bullet.width+wall.widht)/2){
    bullet.velocityX=0;
    var deformatiom=0.5*bulletweight*bulletspeed*bulletspeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall)
    {
      bullet.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 &&deformation>100){
      bullet.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }

  
  
}
  
  
  drawSprites();
}