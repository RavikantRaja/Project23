var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1, wall2, wall2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	wall1 = createSprite(width/2,640,width/3,20);
	wall2 = createSprite(width/3,height-100,20,100);
    wall3 = createSprite(width*2/3,height-100,20,100);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1 = Bodies.rectangle(width/2,625,width/3,20,{isStatic:true});
	World.add(world, wall1);

	wall2 = Bodies.rectangle(width/3,height-100,20,100,{isStatic:true});
	World.add(world, wall2);

	wall3 = Bodies.rectangle(width*2/3,height-100,20,100,{isStatic:true});
	World.add(world, wall3);

	
	wall1.shapeColor = "red";
	wall2.shapeColor = "red";
	wall3.shapeColor = "red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;
 if (keyCode === DOWN_ARROW) {
	Matter. Body.setStatic(packageBody,false);
  }
  drawSprites();
}



