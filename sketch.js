const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground;
var dustbinImage;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,650);
	paper=new Paper(250,450,40);
	ground=new Ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	 
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  paper.display();
  ground.display();
  dustbin.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
    
  	}
}
