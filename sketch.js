const Engine = Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ball;

function setup(){
  createCanvas(700,700)
  engine = Engine.create();
  world=engine.world
 
  

  var options = {
    isStatic : true

  }
  ground= Bodies.rectangle(200,500,600,50,options)
  World.add(world,ground)

  var ball_options={

    restitution:0.2
    
  }

  ball=Bodies.circle(200,20,20,ball_options)
  World.add(world,ball)

}


function draw(){
background("white")
Engine.update(engine)
rectMode(CENTER)
rect (ground.position.x,ground.position.y,50,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,30)

}