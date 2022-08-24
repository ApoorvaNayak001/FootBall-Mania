var canvas, bg;
var ground;
var player, playerImg;
var computer, computerImg;
var ball, ballimg;
var edges;

function preload() {

    //playerImg = loadAnimation("Pictures1/Player1.png", "Pictures1/Player 2.png");
    computerImg = loadImage("Pictures1/computer.png");
    ballimg = loadImage("Pictures1/ball.png");
    playerImg = loadImage("Pictures1/player.png");
}

function setup() {
    canvas = createCanvas(600, 400);
    player = createSprite(540, 35, 25, 25);
    player.addImage("player", playerImg);
    player.scale = 0.28;
    computer = createSprite(50, 35, 25, 25);
    computer.addImage("computer",computerImg);
    computer.velocityY = 4;
    computer.scale = 0.28;

    ball = createSprite(195, 195, 15, 15)
    ball.addImage("ball",ballimg);
    ball.scale = 0.1;
    ball.velocityX = 6;
    ball.velocityY = 3;
 edges =  createEdgeSprites();
   

}
function draw() {
    background("green");

    computer.y = ball.y;
    player.y = World.mouseY;


    for (var i = 0; i < 400; i=i+20) {
        line(300,i,300,i+10);
      }

      for (var i = 0; i < 400; i=i+20) {
        line(540,i,540,i+10);
      }

      for (var i = 0; i < 400; i=i+20) {
        line(50,i,50,i+10);
      }


    //createEdgeSprites();
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(player);
    ball.bounceOff(computer);

    if(ball.x > 600 || ball.x <0) {
    
        if (ball.x > 600) {
            display.text("gameover");
        }
        
        reset();
      }
      
    
      
    drawSprites();
}
