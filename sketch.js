var PLAY = 1
var END = 0
var gameState = PLAY
var survivalTime = 0


var monkey , monkey_running
var bananaImage, obstacleImage
var bananaGroup, obstacleGroup
var score, ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)

  bananaGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
  background(255)
  stroke("black")
    textSize(20)
  fill("black")
  text("Score :"+score, 500, 50)
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50)
  
  if(gameState === PLAY){
      if(keyDown("space") && monkey.y >= 150){
    monkey.velocityY = -12     
  }
    
   monkey.velocityY = monkey.velocityY +1    
    
     if(ground.x < 0){
    ground.x = ground.width/2
  }
    monkey.collide(ground)
    spawnFruits()
    spawnObstacles()
    
   
  }
  
  drawSprites()  
}

function spawnFruits(){ 
if (frameCount % 80 === 0){
  var banana = createSprite(600,165,10,40)
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.velocityX = -3
  
  bananaGroup.add(banana);
}
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacles = createSprite(200,320,10,40)
    obstacles.addImage(obstacleImage)
    obstacles.velocityX = -3
    
    
    obstacles.scale = 0.2
    obstacles.lifetime = 300
    
    obstacleGroup.add(obstacles);
  }
}


