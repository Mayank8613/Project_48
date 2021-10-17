var canvas;
var Jack, Hydrant, backgroundImage;
var text1, text2;
var ground;

function preload(){
  JackImage = loadImage("Jack Project 44.webp");
  HydrantImage = loadImage("Fire Hydrant Project 44.jpg");
  StreetLightImage = loadImage("Screen Shot 2021-09-26 at 5.29.21 PM.png");
  HouseImage = loadImage("Screen Shot 2021-10-13 at 2.15.19 PM.png");
  backgroundImage = loadImage("Screen Shot 2021-10-10 at 11.51.33 AM.png");
  text1Image = loadImage("Gameover.webp")
  text2Image = loadImage("You win.jpg");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  Jack = createSprite(100,400);
  Jack.addImage(JackImage);
  Jack.scale = 0.15;
  Jack.visible = true;
  Hydrant = createSprite(400,575);
  Hydrant.addImage(HydrantImage);
  Hydrant.scale = 0.1;
  StreetLight = createSprite(800,490);
  StreetLight.addImage(StreetLightImage);
  StreetLight.scale = 0.3;
  House = createSprite(1250,565);
  House.addImage(HouseImage);
  House.scale = 0.8;
  text1 = createSprite(700,300);
  text1.addImage(text1Image);
  text1.scale = 0.3;
  text1.visible = false;
  text2 = createSprite(700,300);
  text2.addImage(text2Image);
  text2.scale = 0.9;
  text2.visible = false;
  ground = createSprite(720,700,1450,100);

}

function draw() {
  background(backgroundImage);  

  if(keyDown("space")){
    Jack.position.y += -50;
  }

  Jack.position.y += 6;

  if(keyDown(RIGHT_ARROW)){
    Jack.position.x += 4;
  }

  if(Jack.collide(Hydrant)){
    text1.visible = true;
    Jack.visible = false;
  }

  if(Jack.collide(StreetLight)){
    text1.visible = true;
    Jack.visible = false;
  }

  if(Jack.collide(ground)){
    text1.visible = true;
    Jack.visible = false;
  }

  if(Jack.collide(House)){
    text2.visible = true;
    Jack.visible = false;
  }

  drawSprites();
}