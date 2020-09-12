// creating the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the variables
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;

function preload(){
	// no images given
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	// creating the ground.
	ground = new Ground(400,750,800,15);

	// creating the objects.	
	ball1 = new Circle(400,400,60);
	ball2 = new Circle(600,400,60);
	ball3 = new Circle(200,400,70);
	ball4 = new Circle(400,200,30);
	ball5 = new Circle(400,600,30);
	ball6 = new Circle(200,600,20);
	ball7 = new Circle(200,200,30);
	ball8 = new Circle(600,200,80);
	ball9 = new Circle(600,600,80);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  
  ground.display();
  drawSprites();
 
}



