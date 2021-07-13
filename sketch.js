const World =  Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;


var engine, world;
var ground;
var ball;
var box1;
var box2;


function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    // //JSON OBJECT
    // var options={
    //     isStatic : true
    // }
    // var ballOptions={
    //     restitution : 1
    // }

    // ground = Bodies.rectangle(200,380,400,20,options);
    // World.add(world,ground);

    // ball = Bodies.circle(200,100,50,ballOptions)
    // World.add(world,ball);

  //  console.log(object);

     box1 = new Box(200,300,50,50);
     box2 = new Box(230,100,50,100);
     ground = new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    // rectMode(CENTER);
    // rect(ground.position.x,ground.position.y,400,20);
    // ellipseMode(RADIUS)
    // ellipse(ball.position.x,ball.position.y,20,20);

    box1.display();
    box2.display();
    ground.display();

}