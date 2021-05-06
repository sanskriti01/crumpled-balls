var arr = [1,2,3,4,5]
arr.push(6);
arr.pop();






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world, paper, ground, leftSide, bottom, rightSide;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,600,30);
	ground = new Ground(400,680,800,20);

	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);

var   render = Render.create ({
	element: document.body,
	engine: engine,
	options: {
		width: 1200,
		height: 700
		//wireframes: false
	}
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

 
  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();

  console.log(arr);

 //keyPressed();
 // drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 30, y:-35})
	}
}



