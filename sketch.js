
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,200,500,34)
ball1 = new Ball(255,450,69)
ball2 = new Ball(325,450,69)
ball3 = new Ball(395,450,69)
ball4 = new Ball(465,450,69)
ball5 = new Ball(535,450,69)

rope1 = new Rope(ball1.body,roof.body,-69*1,0)
rope2 = new Rope(ball2.body,roof.body,-69*0.94,0)
rope3 = new Rope(ball3.body,roof.body,-69*0,0)
rope4 = new Rope(ball4.body,roof.body,69*0.94,0)
rope5 = new Rope(ball5.body,roof.body,69*2,0)
}


function draw() {
  rectMode(CENTER);
  background(903);
  Engine.update(engine);  

 roof.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 drawSprites();
}


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}
