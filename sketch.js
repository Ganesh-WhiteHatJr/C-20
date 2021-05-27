var car,wall; 
var speed, weight; 
function setup() { 
    createCanvas(800, 400); 
    
    speed=random(55,90) 
    weight=random(400,1500) 

    car=createSprite(50, 200, 50,50); 
    car.velocityX = speed; 
    car.shapeColor="blue"; 
    
    wall=createSprite(700,200, 60, height/2) 
    wall.shapeColor="white"; 
} 
function draw() { 
   
    background(0); 

    if(wall.x-car.x < (car.width+wall.width)/2) { 
        car.velocityX=0; 
          
        var deformation=0.5 * weight * speed* speed/22500; 
          
    if(deformation>180) { 
        car.shapeColor="red"; 
        text("Car name :Zenia", 400,  180);
        text("Lethal for passengers to travel in it ",400,200);
        text("Rating:D-",400,220);

          } 
    if(deformation<180 && deformation>100) { 
        car.shapeColor="Yellow"; 
        text("Good for passengers to travel in it ",400,200);
        text("Car name : Cyclap", 400,  180);
        text("Rating:B+",400,220);
     } 
    if(deformation<100) { 
        car.shapeColor="Green"; 
        text("Perfect for passengers to travel in it ",400,200);
        text("Car name : Tourus", 400,  180);
        text("Rating:A-",400,220); } 
    } 
    
    drawSprites(); 
     }