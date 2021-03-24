
const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	s1 = new stone(400, 50);
	c1 = new bob(200, 400);
	c2 = new bob(310, 400);

	rope1 = new chain(c1.body, s1.body, 0, 0)
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  s1.display();
  c1.display();
  c2.display();
  rope1.display();

}
