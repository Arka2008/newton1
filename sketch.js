
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(100,500,20,20);
	ball2=new Ball(200,500,20,20);
	ball3=new Ball(300,500,20,20);
	ball4=new Ball(400,500,20,20);
	ball5=new Ball(500,500,20,20);
	roof=new Log(250,200,250,20);
	rope1=new Chain(ball1.body,roof.body,-ballDiameter*2,0)
	rope2=new Chain(ball2.body,roof.body,-ballDiameter*2,0)
	rope3=new Chain(ball3.body,roof.body,-ballDiameter*2,0)
	rope4=new Chain(ball4.body,roof.body,-ballDiameter*2,0)
	rope5=new Chain(ball5.body,roof.body,-ballDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



