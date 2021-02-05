var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.debug = true;
	fairy.setCollider("circle",500,-50,60)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.debug = true

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  

  if(fairy.isTouching(star)){
	fairy.velocityX = 0;
	star.velocityY = 0;
  }
  else{
	keyPressed();
  }
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode===RIGHT_ARROW){
		fairy.velocityX = 4;
	}

	if(keyCode===UP_ARROW){
		fairyVoice.stop(); 
	}

	if(keyCode===LEFT_ARROW){
		fairy.velocityX=0;
	}

	if(keyCode===DOWN_ARROW){
		star.velocityY = 2;
	}
}
