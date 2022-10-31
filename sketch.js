var suelo ,suelo_running;
var trex ,trex_running;
function preload(){
trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");
suelo_running = loadImage ("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,120);
trex.addAnimation("running",trex_running);
trex.scale = 0.7;
suelo = createSprite(20,150);
suelo.addImage("running",suelo_running);

}


function draw(){
  background("white");
  if(keyDown("space")){
    trex.velocityY= -6;
  
    }
trex.velocityY = trex.velocityY +0.8;
trex.collide(suelo);

  drawSprites();


}
