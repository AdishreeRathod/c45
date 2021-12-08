var bg,arrow,skeleton,olis,bgImg,arrowImg,skeletonImg,olisImg,door,doorImg;

function preload(){
  bgImg=loadImage("images/bg.png");
  skeletonImg=loadImage("images/skeleton.png");
  olisImg=loadImage("images/olis.png");
  arrowImg=loadImage("images/arrow.png");
  doorImg=loadImage("images/door.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
   
  olis= createSprite(50,height-250,100,100);
  olis.addImage(olisImg);
  olis.scale=0.4;

  door=createSprite(width-90,height-250,50,50);
  door.addImage(doorImg);
  door.scale=0.45;

  skeleton=createSprite(width-130,height-250,100,100);
  skeleton.addImage(skeletonImg);
  skeleton.scale=0.3;
  
}

function draw() {
  background("brown");  
  image(bgImg,0,0,width*3,height);  
  drawSprites();
}