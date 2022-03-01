//declaring variables
var engine, world;
var bgImg, akumaImg;
var stick, stickImg;
var ball, ballImg;
var akuma1, akuma2, akuma3, akuma4, akuma5;
var akuma6, akuma7, akuma8, akuma9, akuma10;
var akuma11, akuma12, akuma13, akuma14, akuma15;
var akuma16, akuma17, akuma18, akuma19, akuma20;
var akuma21, akuma22, akuma23, akuma24, akuma25;
var score = 0;
var edge1, edge2, edge3;
var music, gmImg, gm, bgImg2;

function preload() {
  //loading images
  bgImg = loadImage("Bg.png");
  stickImg = loadImage("Stick.png");
  ballImg = loadImage("Ball.png");
  akumaImg = loadImage("Akuma.png");
  bgImg2 = loadImage("Bg2.png");
  gmImg = loadImage("Gm.png");
}

function setup() {
  // creating a canvas
  var canvas = createCanvas(1536, 749.9);

  // creating the edges
  edge1 = createSprite(765, 5, 1540, 10);
  edge1.shapeColor = "black";
  edge2 = createSprite(5, 375, 10, 750);
  edge2.shapeColor = "black";
  edge3 = createSprite(1532, 375, 10, 750);
  edge3.shapeColor = "black";

  // creating the stick
  stick = createSprite(740, 700, 20, 20);
  stick.addImage(stickImg);
  stick.scale = 0.7;

  // creating the ball
  ball = createSprite(740, 650, 20, 20);
  ball.addImage(ballImg);
  ball.scale = 0.1;

  // creating moths
  akuma1 = createSprite(740, 100, 20, 20);
  akuma1.addImage(akumaImg);
  akuma1.scale = 0.5;
  akuma2 = createSprite(600, 200, 20, 20);
  akuma2.addImage(akumaImg);
  akuma2.scale = 0.5;
  akuma3 = createSprite(890, 200, 20, 20);
  akuma3.addImage(akumaImg);
  akuma3.scale = 0.5;
  akuma4 = createSprite(1010, 200, 20, 20);
  akuma4.addImage(akumaImg);
  akuma4.scale = 0.5;
  akuma5 = createSprite(1150, 200, 20, 20);
  akuma5.addImage(akumaImg);
  akuma5.scale = 0.5;
  akuma6 = createSprite(890, 100, 20, 20);
  akuma6.addImage(akumaImg);
  akuma6.scale = 0.5;
  akuma7 = createSprite(600, 100, 20, 20);
  akuma7.addImage(akumaImg);
  akuma7.scale = 0.5;
  akuma8 = createSprite(1270, 200, 20, 20);
  akuma8.addImage(akumaImg);
  akuma8.scale = 0.5;
  akuma9 = createSprite(480, 200, 20, 20);
  akuma9.addImage(akumaImg);
  akuma9.scale = 0.5;
  akuma10 = createSprite(480, 300, 20, 20);
  akuma10.addImage(akumaImg);
  akuma10.scale = 0.5;
  akuma11 = createSprite(1270, 300, 20, 20);
  akuma11.addImage(akumaImg);
  akuma11.scale = 0.5;
  akuma12 = createSprite(600, 300, 20, 20);
  akuma12.addImage(akumaImg);
  akuma12.scale = 0.5;
  akuma13 = createSprite(1010, 100, 20, 20);
  akuma13.addImage(akumaImg);
  akuma13.scale = 0.5;
  akuma14 = createSprite(1150, 100, 20, 20);
  akuma14.addImage(akumaImg);
  akuma14.scale = 0.5;
  akuma15 = createSprite(1270, 100, 20, 20);
  akuma15.addImage(akumaImg);
  akuma15.scale = 0.5;
  akuma16 = createSprite(480, 100, 20, 20);
  akuma16.addImage(akumaImg);
  akuma16.scale = 0.5;
  akuma17 = createSprite(350, 100, 20, 20);
  akuma17.addImage(akumaImg);
  akuma17.scale = 0.5;
  akuma18 = createSprite(230, 100, 20, 20);
  akuma18.addImage(akumaImg);
  akuma18.scale = 0.5;
  akuma19 = createSprite(230, 200, 20, 20);
  akuma19.addImage(akumaImg);
  akuma19.scale = 0.5;
  akuma20 = createSprite(350, 200, 20, 20);
  akuma20.addImage(akumaImg);
  akuma20.scale = 0.5;
  akuma21 = createSprite(350, 300, 20, 20);
  akuma21.addImage(akumaImg);
  akuma21.scale = 0.5;
  akuma22 = createSprite(230, 300, 20, 20);
  akuma22.addImage(akumaImg);
  akuma22.scale = 0.5;
  akuma23 = createSprite(1010, 300, 20, 20);
  akuma23.addImage(akumaImg);
  akuma23.scale = 0.5;
  akuma24 = createSprite(890, 300, 20, 20);
  akuma24.addImage(akumaImg);
  akuma24.scale = 0.5;
  akuma25 = createSprite(1150, 300, 20, 20);
  akuma25.addImage(akumaImg);
  akuma25.scale = 0.5;
}

function draw() {
  // adding a background image
  background(bgImg);

  // setting the movement of stick's "x" position to mouse's "x" position
  stick.x = mouseX;

  // destroying the moth
  if (ball.isTouching(akuma1)) {
    ball.bounceOff(akuma1);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma1.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma2)) {
    ball.bounceOff(akuma2);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma2.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma3)) {
    ball.bounceOff(akuma3);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma3.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma4)) {
    ball.bounceOff(akuma4);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma4.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma5)) {
    ball.bounceOff(akuma5);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma5.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma6)) {
    ball.bounceOff(akuma6);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma6.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma7)) {
    ball.bounceOff(akuma7);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma7.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma8)) {
    ball.bounceOff(akuma8);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma8.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma9)) {
    ball.bounceOff(akuma9);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma9.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma10)) {
    ball.bounceOff(akuma10);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma10.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma11)) {
    ball.bounceOff(akuma11);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma11.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma12)) {
    ball.bounceOff(akuma12);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma12.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma13)) {
    ball.bounceOff(akuma13);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma13.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma14)) {
    ball.bounceOff(akuma14);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma14.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma15)) {
    ball.bounceOff(akuma15);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma15.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma16)) {
    ball.bounceOff(akuma16);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma16.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma17)) {
    ball.bounceOff(akuma17);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma17.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma18)) {
    ball.bounceOff(akuma18);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma18.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma19)) {
    ball.bounceOff(akuma19);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma19.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma20)) {
    ball.bounceOff(akuma20);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma20.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma21)) {
    ball.bounceOff(akuma21);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma21.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma22)) {
    ball.bounceOff(akuma22);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma22.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma23)) {
    ball.bounceOff(akuma23);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma23.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma24)) {
    ball.bounceOff(akuma24);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma24.destroy();
    score = score + 1;
  }
  if (ball.isTouching(akuma25)) {
    ball.bounceOff(akuma25);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
    akuma25.destroy();
    score = score + 1;
  }

  // making the ball bounce from the edges
  if (ball.isTouching(edge1)) {
    ball.bounceOff(edge1);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
  }
  if (ball.isTouching(edge2)) {
    ball.bounceOff(edge2);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
  }
  if (ball.isTouching(edge3)) {
    ball.bounceOff(edge3);
    ball.x = random(100, 1500);
    ball.y = random(100, 700);
  }

  // making the ball stay still on the stick
  if (ball.isTouching(stick)) {
    ball.velocityY = 0;
    ball.x = stick.x;
  }

  // if space key is pressed the ball will shoot
  if (keyDown("space")) {
    ball.velocityY = -5;
  }

  // game over
  if (ball.y > 700) {
    akuma1.destroy();
    akuma2.destroy();
    akuma3.destroy();
    akuma4.destroy();
    akuma5.destroy();
    akuma6.destroy();
    akuma7.destroy();
    akuma8.destroy();
    akuma9.destroy();
    akuma10.destroy();
    akuma11.destroy();
    akuma12.destroy();
    akuma13.destroy();
    akuma14.destroy();
    akuma15.destroy();
    akuma16.destroy();
    akuma17.destroy();
    akuma18.destroy();
    akuma19.destroy();
    akuma20.destroy();
    akuma21.destroy();
    akuma22.destroy();
    akuma23.destroy();
    akuma24.destroy();
    akuma25.destroy();
    ball.x = 740;
    ball.y = 650;
    stick.x = 740;
    ball.velocityY = 0;
    gm = createSprite(800,400,10,10);
    gm.addImage(gmImg);
  }

  // winning the game
  if (score === 25) {
    background(bgImg2);
    stick.destroy();
    ball.destroy();
  }

  // scoring system
  stroke("black");
  strokeWeight(10);
  fill("red");
  textSize(80);
  textFont("Freestyle Script");
  text("Score:" + score, 10, 70);

  drawSprites();
}