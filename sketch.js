
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,330,250,20);
	bob1 = new Bob(335,520);
	bob2 = new Bob(365,520);
	bob3 = new Bob(395,520);
	bob4 = new Bob(425,520);
	bob5 = new Bob(455,520);

	rope1 = new Rope(bob1.body,ground.body,-62,0);
	rope2 = new Rope(bob2.body,ground.body,-32,0);
	rope3 = new Rope(bob3.body,ground.body,-2,0);
	rope4 = new Rope(bob4.body,ground.body,28,0);
	rope5 = new Rope(bob5.body,ground.body,58,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10});
	}
}



