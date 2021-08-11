let ground;
let lander;
var lander_img;
var bg_img;
var score=0;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.velocityY=0.2;
  lander.setCollider("rectangle",0,0,500,500)
  lander.debug=true

  ground1=createSprite(550,550,200,10);
  ground1.visible=false

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("landing score : "+score,800,75);
  pop();
  score=score+round(frameRate()/60);

  //fall down

  lander.velocityY=lander.velocityY+0.1;

  if(keyDown("left")){
    lander.x=lander.x-5;
  }
  if(keyDown("right")){
    lander.x=lander.x+5;

  }
  lander.collide(ground1);

  drawSprites();
}


