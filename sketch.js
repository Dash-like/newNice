
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;


var ball, ball2, ball3, ball4, ball5;
var roof, roof2, roof3, roof4, roof5;
var chain, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	roof = new Ground(300, 50, 600, 10);
	// roof2 = new Ground(400, 50, 120, 10);
	// roof3 = new Ground(200, 50, 120, 10);
	// roof4 = new Ground(100, 50, 120, 10);
	// roof5 = new Ground(500, 50, 120, 10);
	ball= new Ball(200, 400, 50);
	ball2= new Ball(400, 400, 50);
	ball3= new Ball(300, 400, 50);
	ball4= new Ball(500, 400, 50);
	ball5= new Ball(100, 400, 50);
	chain = new Chain(ball5.body, roof.body, {x:-200, y:0});
	chain2 = new Chain(ball.body, roof.body, {x: -100, y: 0});
	chain3 = new Chain(ball3.body, roof.body, {x: 0, y:0});
	chain4 = new Chain(ball2.body, roof.body, {x: 100, y:0});
	chain5 = new Chain(ball4.body, roof.body, {x: 200, y:0});
	 

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();
  
  ball.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode = 32){
		Matter.Body.applyForce(ball5.body, ball5.body.position,{x:-100, y:-100});
	}
}
