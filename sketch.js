const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pacman;
var ghost1, ghost2, ghost3, ghost4, ghost5;
var background_img;

function preload(){
  background_img = loadImage("Ghosts/background.png");
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  engine = Engine.create();
  world = engine.world;


 pacman = new Pacman(400, 250,50, 50);
 ghost1 = new BlueGhost(400, 150, 50, 50);
 ghost2 = new RedGhost(400,200,50, 50);
 ghost3 = new YellowGhost(400,250,50, 50);
 ghost4 = new PinkGhost(400,300,50, 50);


 
}

function draw(){
  background(background_img);
  
  ghost1.display();
  ghost2.display();
  ghost3.display();
  ghost4.display();

  pacman.display(); 


 
 
}