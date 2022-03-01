//declare variables
var city, bgImage, bgImage2, bgImage3, bgImage4;
var catNoir, catNoirImg, catBlanc;
var gameState = "play";
var distance = 0;
var cheese = 0;
var food, foodImg;
var akuma, akumaImg;
var music, canvas;

function preload() {
  //load images
  bgImage = loadImage("Bg.png");
  bgImage2 = loadImage("Bg2.png");
  bgImage3 = loadImage("Bg3.png");
  bgImage4 = loadImage("Bg4.png");

  catNoirImg = loadImage("Cat Noir.png");

  catBlanc = loadImage("Cat Blanc.png");

  foodImg = loadImage("Camembert Cheese.png");

  akumaImg = loadImage("Akuma.png");

  //load sound
  music = loadSound("music.mp3");
}

function setup() {
  //create canvas
  canvas = createCanvas(1510, 720);

  //create background
  city = createSprite(700, 360);
  city.addImage(bgImage);
  city.scale = 3;

  //play the music
  music.play();

  //create Cat Noir(player)
  catNoir = createSprite(100, 450);
  catNoir.addImage(catNoirImg);
  catNoir.scale = 0.4;

  //create Camembert Cheese(power of Cat Noir)
  food = createSprite(random(500, 1000), 600);
  food.addImage(foodImg);
  food.lifetime = 200;

  //create Akuma(villain moth)
  akuma = createSprite(1000, random(300, 600));
  akuma.addImage(akumaImg);
  akuma.scale = 0.5;
  akuma.lifetime = 100;

  //store the value of survival time
  distance = 0;

  //store the value of cheese collected
  cheese = 0;
}

function draw() {
  //add a background image for the background
  background("black");

  //when game state is in play mode
  if (gameState === "play") {
    //prevent akuma from touching food
    if (akuma.isTouching(food)) {
      food.destroy();
    }

    //move Cat Noir right with arrow key
    if (keyDown(RIGHT_ARROW)) {
      catNoir.x = catNoir.x + 8;
    }
    //move Cat Noir left with arrow key
    if (keyDown(LEFT_ARROW)) {
      catNoir.x = catNoir.x - 8;
    }
    //move Cat Noir up with arrow key
    if (keyDown(UP_ARROW)) {
      catNoir.y = catNoir.y - 5;
    }
    //move Cat Noir down with arrow key
    if (keyDown(DOWN_ARROW)) {
      catNoir.y = catNoir.y + 5;
    }

    //reset Cat Noir's position
    if (catNoir.x > 1500) {
      city.addImage(bgImage2);
      city.x = 750;
      city.y = 360;
      city.scale = 1.5;
      catNoir.x = 100;
      //create Camembert Cheese(power of Cat Noir)
      food = createSprite(random(500, 1000), 600);
      food.addImage(foodImg);
      food.lifetime = 200;

      //create Akuma(villain moth)
      akuma = createSprite(1000, random(300, 600));
      akuma.addImage(akumaImg);
      akuma.scale = 0.5;
      akuma.lifetime = 100;
    }
    if (cheese === 2) {
      city.addImage(bgImage3);
      city.x = 750;
      city.y = 300;
      city.scale = 2.5;

      food = createSprite(random(500, 1000), 600);
      food.addImage(foodImg);
      food.lifetime = 200;

      akuma = createSprite(1000, random(300, 600));
      akuma.addImage(akumaImg);
      akuma.scale = 0.5;
    }
    if (cheese === 4) {
      city.addImage(bgImage4);
      city.x = 750;
      city.y = 300;
      city.scale = 1.3;

      food = createSprite(random(500, 1000), 600);
      food.addImage(foodImg);

      akuma = createSprite(1000, random(300, 600));
      akuma.addImage(akumaImg);
      akuma.scale = 0.5;
    }

    //calculate the time survived
    distance = distance + Math.round(getFrameRate() / 1510 + 1.5);

    //update the cheese collected
    if (catNoir.isTouching(food)) {
      cheese = cheese + 1;
      food.destroy();
      food = createSprite(random(1000, 1000), 600);
      food.addImage(foodImg);
    }

    //game state change to end
    if (catNoir.isTouching(akuma)) {
      gameState = "end";
    }
  }
  //when game state is in end mode
  if (gameState === "end") {
    //stop the music
    music.stop();

    //destroy akuma and cheese
    akuma.destroy();
    food.destroy();

    //change Cat Noir to Cat Blanc(as a villain)
    catNoir.addImage(catBlanc);
    catNoir.scale = 0.9;
    catNoir.x = 757.5;
    catNoir.y = 350;
  }

  //display all the functions, properties and the objects
  drawSprites();

  //text for the survival time
  textFont("Freestyle Script");
  textSize(50);
  stroke("black");
  strokeWeight(10);
  fill("red");
  text("Survival:" + distance, 700, 40);

  //text for the cheese collected
  textFont("Freestyle Script");
  textSize(50);
  stroke("black");
  strokeWeight(10);
  fill("red");
  text("Cheese:" + cheese, 1000, 45);
}
