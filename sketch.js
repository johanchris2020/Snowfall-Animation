const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;
var snow;
var snowFlakes = [];

function preload() {
    bg = loadImage("snow1.jpg");
}



function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    snow = new Snow();

    if (frameCount % 5000 === 0) {
        for (var i = 0; i < 10; i++) {
            snowFlakes.push(new Snow(random(0, 1280), random(0, 720)));
        }

    }
}

function draw() {
    background(bg);
    drawSprites();
    snow.display();
    // snow.snow();
    Engine.update(engine);
}