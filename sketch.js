
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var right,left,bottum;
var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	left=new Box1(600,620,10,100);
	right=new Box1(700,620,10,100);
	bottum=new Box(605,577,100,100);
	ground=new Ground(390,680,800,10);
	ball=new Ball(100,655,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175);
  right.display()
  left.display()
  bottum.display()
  ground.display()
  ball.display()
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:200 , y:-140} )
	}
}

