var tom, tom_running, tom_sitting, toms;
var jerry, jerry_teasing, jerry_happy, jerrys;
var bg, bg_display;


function preload() {
    //load the images here
    bg_display=loadImage("garden.png");

   tom=loadAnimation("silent","cat1.png");
   tom_running=loadAnimation("running","cat2.png", "cat3.png");
   tom_sitting=loadAnimation("sitting","cat4.png");

   jerry=loadAnimation("silent","mouse2.png");
   jerry_teasing=loadAnimation("teasing","mouse3.png");
   jerry_happy=loadAnimation("happy","mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   bg=createSprite(500,400,500,400);
   bg.addImage(bg_display);
   bg.scale=0.8;

   toms=createSprite(850,750,50,50);
   toms.addAnimation(tom);

   jerrys=createSprite(150,750,50,50);
   jerrys.addAnimation(jerry);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 if(jerrys.x-toms.x < jerrys.width/2 + toms.width/2){
     jerrys.addAnimation("happy","mouse4.png");
     jerrys.changeAnimation("happy");

     toms.addAnimation("sitting","cat4.png");
     toms.changeAnimation("sitting");
     toms.velocityX=0;
   
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown("left")){
    jerrys.addAnimation("teasing", "mouse3.png");   
    jerrys.changeAnimation("teasing");

    toms.addAnimation("running","cat2.png", "cat3.png");
    toms.changeAnimation("running");
    toms.velocityX=-3;
}

}
