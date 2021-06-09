//constructing Matter.....

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring variables..

var engine, world;

var backgroundImage;

var ground, stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygonStone, slingshot;

//function to load images....
function preload()
{
    backgroundImage = loadImage("bg2.png");
}

//function setup....
function setup()
{
    //creating canvas
    createCanvas(1300, 400);

    //creating and runing engine....
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //creating the ground and stands....
    ground = new Ground(650, 390, 1300, 25);
    stand1 = new Ground(300, 225, 250, 15);
    stand2 = new Ground(800, 300, 325, 15);

    //creating Pyramid 1 {

    //level three
    block1 = new Block(300, 200, 35, 50);
    block2 = new Block(335, 200, 35, 50);
    block3 = new Block(265, 200, 35, 50);
    block4 = new Block(235, 200, 35, 50);
    block5 = new Block(365, 200, 35, 50);
    //level two
    block6 = new Block(335, 150, 35, 50);
    block7 = new Block(300, 150, 35, 50);
    block8 = new Block(265, 150, 35, 50);
    //top level
    block9 = new Block(300, 100, 35, 50);
   // }

   //creating Pyramid 2 {

    //level four
    block10 = new Block(800, 275, 35, 50);
    block11 = new Block(835, 275, 35, 50);
    block12 = new Block(865, 275, 35, 50);
    block13 = new Block(900, 275, 35, 50);
    block14 = new Block(765, 275, 35, 50);
    block15 = new Block(735, 275, 35, 50);
    block16 = new Block(700, 275, 35, 50);
    //level three
    block17 = new Block(735, 225, 35, 50);
    block18 = new Block(770, 225, 35, 50);
    block19 = new Block(835, 225, 35, 50);
    block20 = new Block(865, 225, 35, 50);
    block21 = new Block(800, 225, 35, 50);
    //level two
    block22 = new Block(770, 175, 35, 50);
    block23 = new Block(800, 175, 35, 50);
    block24 = new Block(835, 175, 35, 50);
    //top level
    block25 = new Block(800, 125, 35, 50);

   // }

   //creating the stone
   polygonStone = new Stone(1200, 230, 30, 30);

   //creating the slingshot
   slingshot = new Slingshot(polygonStone.body, {x : 1200, y : 210});

}

//draw function
function draw()
{
    //giving background Image.
    background(backgroundImage);

    //adding text instruction.....
    textSize(20);
    fill("white");
    text("Drag the polygon to destroy the blocks", 10, 30);
    text("Press SPACE BAR  to get another chance", 800, 350);
    
    //updating the engine
    Engine.update(engine);

    //displaying everything in the output screen.

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("turquoise");
    block6.display();
    block7.display();
    block8.display();
    fill("pink");
    block9.display();
    fill("skyblue");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    fill("pink");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("turquoise");
    block22.display();
    block23.display();
    block24.display();
    fill("grey");
    block25.display();
    polygonStone.display();
    slingshot.display();
}

function mouseDragged()
{
   Matter.Body.setPosition(polygonStone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygonStone.body, {x:1200, y:230}) 
    slingshot.attach(polygonStone.body);
	}
  }
