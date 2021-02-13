const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var invisibleG;

function preload(){
}

function setup() {
	 createCanvas(600,400);

	 userEngine = Engine.create();
	 userWorld = userEngine.world;

	 // creating the objects using class
		bobObject1 = new Bob (200,270,50);
		bobObject2 = new Bob (250,270,50);
		bobObject3 = new Bob (300,270,50);
		bobObject4 = new Bob (350,270,50);
		bobObject5 = new Bob (400,270,50);
	
	     roof = new Roof (285,50,270,15)

		rope1 = new Rope (bobObject1,roof,20,0)
		//rope2 = new Rope (bobObject1,roof,20,0)
		//rope3 = new Rope (bobObject1,roof,20,0)
		//rope4 = new Rope (bobObject1,roof,20,0)
		//rope5 = new Rope (bobObject1,roof,20,0)
		
		Engine.run(userEngine);
    
}

function draw() {
  rectMode(CENTER);
  background(0,255,255);
  Engine.update(userEngine);

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

 roof.display(); 

 rope1.display();
 //rope1.display();
 //rope1.display();
 //rope1.display();
 //rope1.display();

 //text(mouseX+","+mouseY,mouseX,mouseY);

  drawSprites();
 
}



