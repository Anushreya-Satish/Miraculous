var bg;
var start, startImg;
var c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20;
var c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
  c34,
  c35,
  c36,
  c37,
  c38,
  c39,
  c40;
var c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52;
var i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20;
var i21, i22, i23, i24, i25, i26;
var flip1, flip2, flip1Img, flip2Img;
var gameState, titleImg, title;

function preload() {
  bg = loadImage("bg.jpg");
  startImg = loadImage("Start.png");
  i1 = loadImage("1.jpg");
  i2 = loadImage("2.jpg");
  i3 = loadImage("3.png");
  i4 = loadImage("4.jpg");
  i5 = loadImage("5.png");
  i6 = loadImage("6.png");
  i7 = loadImage("7.jpg");
  i8 = loadImage("8.png");
  i9 = loadImage("9.png");
  i10 = loadImage("10.jpg");
  i11 = loadImage("11.png");
  i12 = loadImage("12.jpg");
  i13 = loadImage("13.jpg");
  i14 = loadImage("14.png");
  i15 = loadImage("15.png");
  i16 = loadImage("16.jpg");
  i17 = loadImage("17.png");
  i18 = loadImage("18.png");
  i19 = loadImage("19.jpg");
  i20 = loadImage("20.jpg");
  i21 = loadImage("21.png");
  i22 = loadImage("22.png");
  i23 = loadImage("23.png");
  i24 = loadImage("24.jpg");
  i25 = loadImage("25.jpg");
  i26 = loadImage("26.jpg");
  flip1Img = loadImage("flip1.jpg");
  flip2Img = loadImage("flip2.jpg");
  titleImg = loadImage("Title.png");
}
function setup() {
  var canvas = createCanvas(1505, 730);

  start = createSprite(720, 500, 20, 20);
  start.addImage(startImg);

  title = createSprite(700, 300, 20, 20);
  title.addImage(titleImg);
  title.scale = 0.7;

  gameState = 0;
}
function draw() {
  background(bg);

  if (gameState === 0) {
    if (mousePressedOver(start)) {
      start.destroy();
      title.destroy();
      gameState = 1;
    }
  }
  if (gameState === 1) {
    c1 = createSprite(50, 50, 5, 10);
    c1.addImage(flip1Img);
    c2 = createSprite(150, 50, 5, 10);
    c2.addImage(flip2Img);
    c2.scale = 0.8;
    c3 = createSprite(250, 50, 5, 10);
    c3.addImage(flip1Img);
    c4 = createSprite(350, 50, 5, 10);
    c4.addImage(flip2Img);
    c4.scale = 0.8;
    c5 = createSprite(450, 50, 5, 10);
    c5.addImage(flip1Img);
    c6 = createSprite(550, 50, 5, 10);
    c6.addImage(flip2Img);
    c6.scale = 0.8;
    c7 = createSprite(650, 50, 5, 10);
    c7.addImage(flip1Img);
    c8 = createSprite(750, 50, 5, 10);
    c8.addImage(flip2Img);
    c8.scale = 0.8;
    c9 = createSprite(850, 50, 5, 10);
    c9.addImage(flip1Img);
    c10 = createSprite(950, 50, 5, 10);
    c10.addImage(flip2Img);
    c10.scale = 0.8;
    c11 = createSprite(50, 150, 5, 10);
    c11.addImage(flip2Img);
    c11.scale = 0.8;
    c12 = createSprite(150, 150, 5, 10);
    c12.addImage(flip1Img);
    c13 = createSprite(250, 150, 5, 10);
    c13.addImage(flip2Img);
    c13.scale = 0.8;
    c14 = createSprite(350, 150, 5, 10);
    c14.addImage(flip1Img);
    c15 = createSprite(450, 150, 5, 10);
    c15.addImage(flip2Img);
    c15.scale = 0.8;
    c16 = createSprite(550, 150, 5, 10);
    c16.addImage(flip1Img);
    c17 = createSprite(650, 150, 5, 10);
    c17.addImage(flip2Img);
    c17.scale = 0.8;
    c18 = createSprite(750, 150, 5, 10);
    c18.addImage(flip1Img);
    c19 = createSprite(850, 150, 5, 10);
    c19.addImage(flip2Img);
    c19.scale = 0.8;
    c20 = createSprite(950, 150, 5, 10);
    c20.addImage(flip1Img);
    c21 = createSprite(50, 250, 5, 10);
    c21.addImage(flip1Img);
    c22 = createSprite(150, 250, 5, 10);
    c22.addImage(flip2Img);
    c22.scale = 0.8;
    c23 = createSprite(250, 250, 5, 10);
    c23.addImage(flip1Img);
    c24 = createSprite(350, 250, 5, 10);
    c24.addImage(flip2Img);
    c24.scale = 0.8;
    c25 = createSprite(450, 250, 5, 10);
    c25.addImage(flip1Img);
    c26 = createSprite(550, 250, 5, 10);
    c26.addImage(flip2Img);
    c26.scale = 0.8;
    c27 = createSprite(650, 250, 5, 10);
    c27.addImage(flip1Img);
    c28 = createSprite(750, 250, 5, 10);
    c28.addImage(flip2Img);
    c28.scale = 0.8;
    c29 = createSprite(850, 250, 5, 10);
    c29.addImage(flip1Img);
    c30 = createSprite(950, 250, 5, 10);
    c30.addImage(flip2Img);
    c30.scale = 0.8;
    c31 = createSprite(50, 350, 5, 10);
    c31.addImage(flip2Img);
    c31.scale = 0.8;
    c32 = createSprite(150, 350, 5, 10);
    c32.addImage(flip1Img);
    c33 = createSprite(250, 350, 5, 10);
    c33.addImage(flip2Img);
    c33.scale = 0.8;
    c34 = createSprite(350, 350, 5, 10);
    c34.addImage(flip1Img);
    c35 = createSprite(450, 350, 5, 10);
    c35.addImage(flip2Img);
    c35.scale = 0.8;
    c36 = createSprite(550, 350, 5, 10);
    c36.addImage(flip1Img);
    c37 = createSprite(650, 350, 5, 10);
    c37.addImage(flip2Img);
    c37.scale = 0.8;
    c38 = createSprite(750, 350, 5, 10);
    c38.addImage(flip1Img);
    c39 = createSprite(850, 350, 5, 10);
    c39.addImage(flip2Img);
    c39.scale = 0.8;
    c40 = createSprite(950, 350, 5, 10);
    c40.addImage(flip1Img);
    c41 = createSprite(50, 450, 5, 10);
    c41.addImage(flip1Img);
    c42 = createSprite(150, 450, 5, 10);
    c42.addImage(flip2Img);
    c42.scale = 0.8;
    c43 = createSprite(250, 450, 5, 10);
    c43.addImage(flip1Img);
    c44 = createSprite(350, 450, 5, 10);
    c44.addImage(flip2Img);
    c44.scale = 0.8;
    c45 = createSprite(450, 450, 5, 10);
    c45.addImage(flip1Img);
    c46 = createSprite(550, 450, 5, 10);
    c46.addImage(flip2Img);
    c46.scale = 0.8;
    c47 = createSprite(650, 450, 5, 10);
    c47.addImage(flip1Img);
    c48 = createSprite(750, 450, 5, 10);
    c48.addImage(flip2Img);
    c48.scale = 0.8;
    c49 = createSprite(850, 450, 5, 10);
    c49.addImage(flip1Img);
    c50 = createSprite(950, 450, 5, 10);
    c50.addImage(flip2Img);
    c50.scale = 0.8;
    c51 = createSprite(550, 550, 5, 10);
    c51.addImage(flip1Img);
    c52 = createSprite(450, 550, 5, 10);
    c52.addImage(flip2Img);
    c52.scale = 0.8;
    if (mousePressedOver(c1)) {
      c1.addImage(i1);
      c1.scale = 0.8;
    }
    if (mousePressedOver(c2)) {
      c2.addImage(i4);
    }
    if (mousePressedOver(c3)) {
      c3.addImage(i6);
      c3.scale = 0.7;
    }
    if (mousePressedOver(c4)) {
      c4.addImage(i7);
      c4.scale = 1;
    }
    if (mousePressedOver(c5)) {
      c5.addImage(i10);
      c5.scale = 0.7;
    }
    if (mousePressedOver(c6)) {
      c6.addImage(i12);
      c6.scale = 1;
    }
    if (mousePressedOver(c7)) {
      c7.addImage(i14);
      c7.scale = 0.7;
    }
    if (mousePressedOver(c8)) {
      c8.addImage(i16);
      c8.scale = 1;
    }
    if (mousePressedOver(c9)) {
      c9.addImage(i18);
      c9.scale = 0.7;
    }
    if (mousePressedOver(c10)) {
      c10.addImage(i20);
      c10.scale = 1;
    }
    if (mousePressedOver(c11)) {
      c11.addImage(i22);
      c11.scale = 0.8;
    }
    if (mousePressedOver(c12)) {
      c12.addImage(i24);
      c12.scale = 0.7;
    }
    if (mousePressedOver(c13)) {
      c13.addImage(i25);
      c13.scale = 0.7;
    }
    if (mousePressedOver(c14)) {
      c14.addImage(i1);
      c14.scale = 0.8;
    }
    if (mousePressedOver(c15)) {
      c15.addImage(i4);
    }
    if (mousePressedOver(c16)) {
      c16.addImage(i6);
      c16.scale = 0.7;
    }
    if (mousePressedOver(c17)) {
      c17.addImage(i7);
      c17.scale = 1;
    }
    if (mousePressedOver(c18)) {
      c18.addImage(i10);
      c18.scale = 0.7;
    }
    if (mousePressedOver(c19)) {
      c19.addImage(i12);
      c19.scale = 1;
    }
    if (mousePressedOver(c20)) {
      c20.addImage(i14);
      c20.scale = 0.7;
    }
    if (mousePressedOver(c21)) {
      c21.addImage(i16);
      c21.scale = 1;
    }
    if (mousePressedOver(c22)) {
      c22.addImage(i18);
      c22.scale = 0.7;
    }
    if (mousePressedOver(c23)) {
      c23.addImage(i20);
      c23.scale = 1;
    }
    if (mousePressedOver(c24)) {
      c24.addImage(i22);
      c24.scale = 0.8;
    }
    if (mousePressedOver(c25)) {
      c25.addImage(i24);
      c25.scale = 0.7;
    }
    if (mousePressedOver(c26)) {
      c26.addImage(i25);
      c26.scale = 0.7;
    }
    if (mousePressedOver(c27)) {
      c27.addImage(i2);
      c27.scale = 0.7;
    }
    if (mousePressedOver(c28)) {
      c28.addImage(i3);
    }
    if (mousePressedOver(c29)) {
      c29.addImage(i5);
      c29.scale = 0.7;
    }
    if (mousePressedOver(c30)) {
      c30.addImage(i8);
    }
    if (mousePressedOver(c31)) {
      c31.addImage(i9);
    }
    if (mousePressedOver(c32)) {
      c32.addImage(i11);
      c32.scale = 0.7;
    }
    if (mousePressedOver(c33)) {
      c33.addImage(i13);
    }
    if (mousePressedOver(c34)) {
      c34.addImage(i15);
      c34.scale = 0.6;
    }
    if (mousePressedOver(c35)) {
      c35.addImage(i17);
    }
    if (mousePressedOver(c36)) {
      c36.addImage(i19);
    }
    if (mousePressedOver(c37)) {
      c37.addImage(i21);
    }
    if (mousePressedOver(c38)) {
      c38.addImage(i23);
      c38.scale = 0.7;
    }
    if (mousePressedOver(c39)) {
      c39.addImage(i26);
    }
    if (mousePressedOver(c40)) {
      c40.addImage(i2);
      c40.scale = 0.7;
    }
    if (mousePressedOver(c41)) {
      c41.addImage(i3);
    }
    if (mousePressedOver(c42)) {
      c42.addImage(i5);
      c42.scale = 0.7;
    }
    if (mousePressedOver(c43)) {
      c43.addImage(i8);
    }
    if (mousePressedOver(c44)) {
      c44.addImage(i9);
    }
    if (mousePressedOver(c45)) {
      c45.addImage(i11);
      c45.scale = 0.7;
    }
    if (mousePressedOver(c46)) {
      c46.addImage(i13);
    }
    if (mousePressedOver(c47)) {
      c47.addImage(i15);
      c47.scale = 0.6;
    }
    if (mousePressedOver(c48)) {
      c48.addImage(i17);
    }
    if (mousePressedOver(c49)) {
      c49.addImage(i19);
    }
    if (mousePressedOver(c50)) {
      c50.addImage(i21);
    }
    if (mousePressedOver(c51)) {
      c51.addImage(i23);
      c51.scale = 0.7;
    }
    if (mousePressedOver(c52)) {
      c52.addImage(i26);
    }
  }

  drawSprites();
}