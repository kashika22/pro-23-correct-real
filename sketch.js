var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var boxpart1,boxpart2,boxpart3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	boxpart1=createSprite(300,610,20,200);
	boxpart1.shapeColor=color(200,0,0);
	
	boxpart2=createSprite(500,610,20,200);
	boxpart2.shapeColor=color(200,0,0);

	boxpart3=createSprite(400,690,200,20);
	boxpart3.shapeColor=color(200,0,0);
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 ,width,10,  {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();

 
}

function keyPressed() {
	  if (keyCode === DOWN_ARROW)
	  {
		  Matter.Body.setStatic(packageBody,false); 
			
	   }
	}



