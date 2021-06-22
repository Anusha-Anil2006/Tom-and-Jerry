var canvas,bgImg;
var cat,cat1Img,cat2Img,cat3Img,cat3Img;
var mouse,mouse1Img,mouse2Img,mouse3Img;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
cat1Img=loadAnimation("images/cat1.png");
cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
cat3Img=loadAnimation("images/cat4.png");
mouse1Img=loadAnimation("images/mouse1.png");
mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3Img=loadAnimation("images/mouse4.png");
 }
  function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites

    cat=createSprite(870,600)
    cat.addAnimation("catSleeping",cat1Img);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1Img);
    mouse.scale=0.15;
}
  function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){
 cat.velocityX=0;
 cat.addAnimation("cat3Img",cat3Img)
 cat.X=300;
 cat.changeAnimation("cat3Img");

 mouse.addAnimation("mouse3Img",mouse3Img)
 mouse.X=300;
 mouse.changeAnimation("mouse3Img");
  }

    drawSprites();
 }
function keyPressed(){

    //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
cat.velocityX=-5;
mouse.addAnimation("mouseTeasing",mouse2Img)
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;

cat.addAnimation("catTeasing",cat2Img)
cat.changeAnimation("catTeasing");
cat.frameDelay = 25;
 }
}