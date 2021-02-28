
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var box1;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

  

	engine = Engine.create();
  world = engine.world;
  
  var abc={
		restitution:3
	}

	//Create the Bodies Here.
  

  paper = Bodies.circle(width/2 , 200 , 5 , {abc, isStatic:true});
	World.add(world, paper);
  
  Engine.run(engine);
  
  
  ground = new Ground (800,650,1600,10,{isStatic:true});
  paper = new Paper (60,40,10);

   box1=new Dustbin(width/2,640,100,10,{isStatic:true});
   box2=new Dustbin(750,620,10,50,{isStatic:true});
   box3=new Dustbin(850,620,10,50,{isStatic:true});


  

}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  console.log(paper.body.position.x);
    console.log(paper.body.position.y);
    console.log(paper.body.angle);
  paper.display();
  ground.display();
 box1.display();
 box2.display();
 box3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-17});
 }
}

