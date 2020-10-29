var player, playerani;

var background1,backgroundimg;

var tree, treeimg, treegroup;

var stone,stoneimg, stonegroup;

var invisibleground;

var coins, coinsimg, coingroup;

var birds, birdsimg, birdsgroup;

var snake, snakeimg, snakegroup;

var score = 0;

var coinscollect = 0;

var gameover, gameoverimg;

var diamonds, diamondimg;

var treasure, treasureimg;

function preload() {
  
  playerani = loadAnimation("character2back.png","character3back.png");
  
  backgroundimg = loadImage("20200818_074616.jpg");
  
  treeimg = loadImage("tree.png");
  
  stoneimg = loadImage("stone.png");
  
  gameoverimg = loadImage("gameover.png")
  
  coinsimg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
  
  birdsimg = loadAnimation("bird1.png", "bird2.png", "bird3.png");
  
  snakeimg = loadAnimation("snake1.png","snake2.png","snake3.png","snake4.png","snake1.png","snake5.png","snake6.png")
}

function setup() {
  
   background1 = createSprite(200,300,10,10);
   background1.addImage(backgroundimg);
   background1.velocityX = -(6 + 3*score/100);
  
   player = createSprite(35,310,10,10);
   player.addAnimation("playerani",playerani);
   player.scale = 0.4;
  
 
  
   invisibleground = createSprite(200,355,800,5);
  
   invisibleground.visible = false;
  
   treegroup = new Group();
   stonegroup = new Group();
   coingroup = new Group();
   birdsgroup = new Group();
   snakegroup = new Group();
  
   coinscollect = 0;
  
}

function draw() {
  background("YELLOW");
  
  spawntree();
  spawnStones();
  spawncoins1();
  spawncoins2();
  spawnbirds();
  spawnsnake();
  
   player.collide(invisibleground);
  
  
    textSize(20);
    fill("RED")
    text("Score: "+ score, 20,50);
    text("Coins Collected: "+ coinscollect,20,100);
  
    score = score + Math.round(getFrameRate()/60);
  
   if (background1.x<0 ){
       background1.x=background1.width/2 
   }
  
  if (player.isTouching(coingroup)) {
       coingroup.destroyEach();
    coinscollect = coinscollect + 1;
    score = score + 20;
  }
  
    if (keyDown("space") && player.y >=310 ) {
         player.velocityY = -23;
    }
  
  if (player.isTouching(stonegroup) ||player.isTouching(snakegroup))      {
       player.velocity = 0;
       gameover = createSprite(200,200,10,10);
       gameover.addImage(gameoverimg);
       gameover.scale = 2.7;
      }
  
  player.velocityY = player.velocityY + 2;
  
  drawSprites();
}

function spawntree() {
    if(frameCount % 400 === 0) {
     tree = createSprite(800,250,10,40);
     tree.addImage(treeimg);
     tree.velocityX = -(6 + 3*score/100);
     tree.scale = 0.3; 
     tree.lifetime = 220;

  treegroup.add(tree);
}
}

function spawnStones() {
  if(frameCount % 250 === 0) {
      stone = createSprite(800,330,10,40);
      stone.addImage(stoneimg);
      stone.velocityX = -(6 + 3*score/100);
      stone.scale = 0.1; 
      stone.lifetime = 220;
    
    //stone.debug = true;
    stone.setCollider("rectangle",0,0,30,30)

  stonegroup.add(stone);
}
}

function spawncoins1() {
    if(frameCount % 125 === 0) {
      coins = createSprite(800,230,10,40);
      coins.addAnimation("coinsimg",coinsimg);
      coins.velocityX = -(6 + 3*score/100);
      coins.scale = 0.1; 
      coins.lifetime = 220;

  coingroup.add(coins);
}
}

function spawncoins2() {
    if(frameCount % 135 === 0) {
      coins = createSprite(800,250,10,40);
      coins.addAnimation("coinsimg",coinsimg);
      coins.velocityX = -(6 + 3*score/100);
      coins.scale = 0.1; 
      coins.lifetime = 220;

  coingroup.add(coins);
}
}

function spawnbirds() {
      if(frameCount % 110 === 0) {
      birds = createSprite(800,200,10,40);
      birds.addAnimation("birdsimg",birdsimg);
      birds.velocityX = -(6 + 3*score/100);
      birds.scale = 0.250; 
      birds.lifetime = 220;

  birdsgroup.add(birds);
}  
}

function spawnsnake() {
    if(frameCount % 185 === 0) {
      snake = createSprite(800,320,10,40);
      snake.addAnimation("snakeimg",snakeimg);
      snake.velocityX = -(6 + 3*score/100);
      snake.scale = 0.250; 
      snake.lifetime = 220;
      
     // snake.debug = true;
      snake.setCollider("rectangle",0,0,20,20)

  snakegroup.add(snake);
}
}