var bullet,wall,speed,weight,thickness;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
   

  wall=createSprite(700,200,thickness,height/2)
 wall.shapeColor="black"

  bullet=createSprite(100,200,30,10)
 bullet.shapeColor="white"

 thickness=random(22,83)
 weight=random(30,52)
 speed=random(223,321)
 bullet.velocityX=speed;
 

}

function draw() {
  background("grey");  

  

    

   

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
     
     bullet.velocityX=0;
      
     var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


     if(Damage>10){

       wall.shapeColor=color(255,0,0)

    }

    if(Damage<10){

      wall.shapeColor=color(0,255,0)

    }





  }

  

  drawSprites();
}





