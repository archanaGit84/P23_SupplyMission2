const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopter, helicopterImg, package,packageImg;
var packageBody,groundBody, ground
var wall1,wall2,wall3;

function preload()
{
	helicopterImg=loadImage("helicopter.png");
	packageImg=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageImg);
	package.scale=0.2;

	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.6;


	var groundOptions = {
		isStatic: true
	}
	//Create a Ground
	groundBody = Bodies.rectangle (400, 600, 800, 20 , groundOptions );
	World.add(world, groundBody);
	 
	 
	 rectMode(CENTER);
	ground = createSprite(400,610+20,800,20);
	//console.log(groundBody);
	ground.shapeColor = color(255);

	
	var packageOptions = {
		restitution: 1,
		isStatic: true
	}
	packageBody = Bodies.rectangle(width/2 , 200 , 15 ,15, packageOptions);
	World.add(world, packageBody);
	
	wall1 = new Wall(400,590, 200,20);
	wall2 = new Wall(290,550,20,100);
	wall3 = new Wall(510,550,20,100)
	console.log(wall1);


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  package.x= packageBody.position.x ;
  package.y= packageBody.position.y ;
  

  wall1.show();
  wall2.show();
  wall3.show();
 // keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Body.setStatic(packageBody,false);
    
  }

  if (keyCode === LEFT_ARROW) {
	helicopter.x -=5;
	var changeOption = {x: -5,
		 y:0 }
   Body.translate(packageBody, changeOption);
    
  }

  if (keyCode === RIGHT_ARROW) {
    
	helicopter.x +=5;
	var changeOption = {x: 5,
	  y:0}

	  Body.translate(packageBody, changeOption)
	 
   }

}



