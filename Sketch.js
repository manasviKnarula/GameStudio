var bao;
var slide1IMG, slide2IMG, slide3IMG, slide4IMG, slide5IMG, slide6IMG, slide7IMG;
var slide1, slide2, slide3, slide4, slide5, slide6, slide7;
var next, nextIMG;
var next1;
var playIMG, play;
var BaoTalk, BaoTalkIMG;
var OkIMG, Ok;
var TableTop, TableTopIMG;
var racks1, racks1IMG;
var racks2, racks2IMG;
var racks3, racks3IMG;
var jug, jugIMG;
var tiltedjug, tiltedjugIMG;
var cherryBlossomIMG, cherryBlossom;
var SakuraIMG, Sakura;
var Sakura2,Sakura3;
var TeapotIMG, Teapot;
var SakuraBao, SakuraBaoIMG;
var money;
var jugClicked;
var gameState="initial";

var princess;
var dress1, dress2, dress3;
var legging1, legging2, legging3;
var shoe1, shoe2, shoe3, shoe4;

var PrincessIMG;
var dress1IMG, dress2IMG, dress3IMG;
var legging1IMG, legging2IMG, legging3IMG;
var shoe1IMG, shoe2IMG, shoe3IMG, shoe4IMG;
var BaoStart, PrincessStart;
var BaoStartIMG, PrincessStartIMG;

var game=0;


var background1;


function preload(){
slide1IMG = loadImage ("slide1.png");
slide2IMG = loadImage ("slide2.png");
slide3IMG = loadImage ("slide3.png");
slide4IMG = loadImage ("slide4.png");
slide5IMG = loadImage ("slide5.png");
slide6IMG = loadImage ("slide6.png");
slide7IMG = loadImage ("slide7.png");
nextIMG = loadImage ("NextButton.png");
playIMG = loadImage ("playButton.png");
BaoTalkIMG = loadImage ("BaoTalking.png");
OkIMG = loadImage ("Ok.png");
TableTopIMG = loadImage("TableTop.png");
racks1IMG = loadImage ("tabletop.png")
racks2IMG = loadImage ("tabletop.png")
racks3IMG = loadImage ("tabletop.png")
jugIMG = loadImage ("waterJug.png");
cherryBlossomIMG = loadImage ("CherryBlossom.png");
TeapotIMG = loadAnimation ("tp1.gif","tp2.gif", "tp3.gif", "tp4.gif", "tp5.gif", "tp6.gif");
tiltedjugIMG = loadImage ("TiltedJug.png");
SakuraIMG = loadImage ("CherryBlossom.png");
SakuraBaoIMG = loadImage ("End of game.png");

PrincessIMG = loadImage("Princess.png");
    dress1IMG = loadImage("dress1.png");
    dress2IMG = loadImage("Dress2.png");
    dress3IMG = loadImage("Dress3.png");
    legging1IMG = loadImage("Legging1.png");
    legging2IMG = loadImage("Legging2.png");
    legging3IMG = loadImage("Legging3.png");
    shoe1IMG = loadImage("Shoe1.png");
    shoe2IMG = loadImage("Shoe2.png");
    shoe3IMG = loadImage("Shoe3.png");
    shoe4IMG = loadImage("Shoe4.png");

    background1 = loadImage("bg.jpg");

    BaoStartIMG = loadImage("BaoGame.png");
    PrincessStartIMG = loadImage("PrincessGame.png");
}


function setup(){
  createCanvas(1000, 1000);


  princess = createSprite(200,400,100,100);
  princess.addImage(PrincessIMG);
  princess.scale = 0.7;

  dress1 = createSprite(450,130,20,50);
  dress1.addImage(dress1IMG);
  dress1.scale = 0.5;

  dress2 = createSprite(600,130,20,50);
  dress2.addImage(dress2IMG);
  dress2.scale = 0.5;

  dress3 = createSprite(750,130,20,50);
  dress3.addImage(dress3IMG);
  dress3.scale = 0.5;

  legging1 = createSprite(450,360,20,50);
  legging1.addImage(legging1IMG);
  legging1.scale = 0.5;

  legging2 = createSprite(600,360,20,50);
  legging2.addImage(legging2IMG);
  legging2.scale = 0.5;

  legging3 = createSprite(750,360,20,50);
  legging3.addImage(legging3IMG);
  legging3.scale = 0.5;

  shoe1 = createSprite(400,560,20,50);
  shoe1.addImage(shoe1IMG);
  shoe1.scale = 0.5;

  shoe2 = createSprite(550,560,20,50);
  shoe2.addImage(shoe2IMG);
  shoe2.scale = 0.5;

  shoe3 = createSprite(700,560,20,50);
  shoe3.addImage(shoe3IMG);
  shoe3.scale = 0.5;

  shoe4 = createSprite(850,560,20,50);
  shoe4.addImage(shoe4IMG);
  shoe4.scale = 0.5;



  slide1 = createSprite(200,250,20,50);
  slide1.addImage(slide1IMG);
  slide1.scale=0.2;

  slide2 = createSprite(400,250,20,50);
  slide2.addImage(slide2IMG);
  slide2.scale=0.2;

  slide3 = createSprite(650,250,20,50);
  slide3.addImage(slide3IMG);
  slide3.scale=0.2;

  slide4 = createSprite(900,250,20,50);
  slide4.addImage(slide4IMG);
  slide4.scale=0.2;

  slide5 = createSprite(300,500,20,50);
  slide5.addImage(slide5IMG);
  slide5.scale=0.2;

  slide6 = createSprite(550,500,20,50);
  slide6.addImage(slide6IMG);
  slide6.scale=0.2;

  slide7 = createSprite(800,500,20,50);
  slide7.addImage(slide7IMG);
  slide7.scale=0.25;

  BaoTalk = createSprite(550,400,20,50);
  BaoTalk.addImage(BaoTalkIMG);
  BaoTalk.scale=0.7;

  next1 = createSprite (550, 400, 20,50);
  next1.addImage(nextIMG);
  next1.scale=0.3;
  next1.visible=false;

  next = createSprite (550, 700, 20,50);
  next.addImage(nextIMG);
  next.scale=0.3;

  Ok = createSprite (520, 750, 20,50);
  Ok.addImage(OkIMG);
  Ok.scale=0.2;

  TableTop = createSprite (500, 900, 20,50);
  TableTop.addImage(TableTopIMG);
  TableTop.scale=0.9;

  racks1 = createSprite (850, 300, 20,50);
  racks1.addImage(racks1IMG);
  racks1.scale=0.4;

  racks2 = createSprite (850, 500, 20,50);
  racks2.addImage(racks2IMG);
  racks2.scale=0.4;

  racks3 = createSprite (850, 700, 20,50);
  racks3.addImage(racks2IMG);
  racks3.scale=0.4;

  jug = createSprite (830, 200, 20,50);
  jug.addImage(jugIMG);
  jug.scale=0.3;

  cherryBlossom = createSprite (830, 450, 20,50);
  cherryBlossom.addImage(cherryBlossomIMG);
  cherryBlossom.scale=0.2;

  Teapot = createSprite (400, 700, 20,50);
  Teapot.addAnimation("boil",TeapotIMG);


  tiltedjug = createSprite (500, 600, 20,50);
  tiltedjug.addImage(tiltedjugIMG);
  tiltedjug.scale=0.2;

  Sakura = createSprite (500, 650, 20,50);
  Sakura.addImage(SakuraIMG);
  Sakura.scale=0.2;

  Sakura2 = createSprite (550, 600, 20,50);
  Sakura2.addImage(SakuraIMG);
  Sakura2.scale=0.2;

  Sakura3 = createSprite (600, 550, 20,50);
  Sakura3.addImage(SakuraIMG);
  Sakura3.scale=0.2;

  SakuraBao = createSprite (500, 500, 20,50);
  SakuraBao.addImage(SakuraBaoIMG);
  SakuraBao.scale=0.5;

  money =  Math.round(random(1,500));

  PrincessStart = createSprite (250, 250, 20,50);
  PrincessStart.addImage(PrincessStartIMG);
  PrincessStart.scale=0.5;

  BaoStart = createSprite (750, 250, 20,50);
  BaoStart.addImage(BaoStartIMG);
  BaoStart.scale=0.5

  BaoStart.visible=true;
  PrincessStart.visible=true;


}

 function draw(){

  if (game===0){
    background("white");

    slide1.visible=false;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    BaoTalk.visible=false;
    Ok.visible=false;
    TableTop.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;
    tiltedjug.visible=false;
    Sakura.visible=false;
    Sakura2.visible=false;
    Sakura3.visible=false;
    SakuraBao.visible=false; 
    princess.visible=false
    dress1.visible=false
    dress2.visible=false
    dress3.visible=false
    legging1.visible=false
    legging2.visible=false
    legging3.visible=false
    shoe1.visible=false
    shoe2.visible=false
    shoe3.visible=false
    shoe4.visible=false

    textSize(30);
    strokeWeight(10);
    fill("black");
    text("choose a game to begin!",500,600)



   next.visible=false;
      next1.visible=false;

    if (mousePressedOver(PrincessStart)){
      game=2;
      PrincessStart.visible=false;
      BaoStart.visible=false;
    }
    if(mousePressedOver(BaoStart)){
      game=1;
      BaoStart.visible=false;
      PrincessStart.visible=false;
    }
    drawSprites();
  }
  if(game===1){

  


  background("white");
  drawSprites();

  if(gameState==="initial"){
    slide1.visible=true;
    slide2.visible=true;
    slide3.visible=true;
    slide4.visible=true;
    slide5.visible=true;
    slide6.visible=true;
    slide7.visible=true;
    BaoTalk.visible=false;
    Ok.visible=false;
    TableTop.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;
    tiltedjug.visible=false;
    Sakura.visible=false;
    Sakura2.visible=false;
    Sakura3.visible=false;
    SakuraBao.visible=false; 
    next.visible=true;
    

    if (mousePressedOver(next)){
      gameState="start";
       }
  }

   if (gameState==="start"){
    textSize(25);
    fill("black");
   text("To play, make the recipe that Bao asks you to make.",300,500);
   text("Suceed and win Dollars. Click NEXT to begin",300,550);

   slide1.visible=false;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    BaoTalk.visible=false;
    Ok.visible=false;
    TableTop.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;
    tiltedjug.visible=false;
    Sakura.visible=false;
    Sakura2.visible=false;
    Sakura3.visible=false;
    SakuraBao.visible=false; 


   next.visible=false;
      next1.visible=true;

   if (mousePressedOver(next1)){
     gameState="play"
   }
 }

 if (gameState==="play"){
   next1.visible=false;
   BaoTalk.visible=true;
   Ok.visible=true;
   TableTop.visible=false;
   racks1.visible=false;
   racks2.visible=false;
   racks3.visible=false;
   jug.visible=false;
   cherryBlossom.visible=false;
   Teapot.visible=false;
   tiltedjug.visible=false;
   Sakura.visible=false;
   Sakura2.visible=false;
   Sakura3.visible=false;
   SakuraBao.visible=false; 

   textSize(15);
   fill("black");
   text("Make cherry blossom tea by following these steps: ", 370,140);
   text("1. Boil water",450, 160);
   text ("2. Add dried cherry Blossom", 450, 180);
   text("3. Leave for 1 minute ", 450, 200);

   if (mousePressedOver(Ok)){
    gameState="play2"
  }
 }

 if (gameState==="play2"){
  BaoTalk.visible=false;
  Ok.visible=false;
  slide1.visible=false;
  TableTop.visible=true;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    next.visible=false;
    next1.visible=false;
    racks1.visible=true;
    racks2.visible=true;
    racks3.visible=true;
    jug.visible=true;
    cherryBlossom.visible=true;
    Teapot.visible=true;
    tiltedjug.visible=false;
    Sakura.visible=false;
    Sakura2.visible=false;
    Sakura3.visible=false;
    SakuraBao.visible=false; 

    textSize(20);
    fill("red");
    text ("Hint: Add the water first then the cherry blossom",200,200);

    if (mousePressedOver(jug)){
      tiltedjug.visible=true;
      jugClicked=true;
    }

    if (mousePressedOver(cherryBlossom)){
    Sakura.visible=true;
    Sakura2.visible=true;
    Sakura3.visible=true;
    }


    strokeWeight(12);
    fill ("black");
    text ("click here to pour water",750, 200 );

    strokeWeight(12);
    fill ("black");
    text ("click here to add cherry blossom",750, 450 );
   }


   if (mousePressedOver(cherryBlossom) && (jugClicked===false)){
    textSize(30);
    fill("black")
    text("oops, you forgot to add something!",200, 200);
   }

   if (mousePressedOver(cherryBlossom) && (jugClicked===true)){
    gameState="end";
   }
   if (gameState==="end"){

    BaoTalk.visible=false;
  Ok.visible=false;
  slide1.visible=false;
  TableTop.visible=false;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    next.visible=false;
    next1.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;
    tiltedjug.visible=false;
    Sakura.visible=false;
    Sakura2.visible=false;
    Sakura3.visible=false;
    SakuraBao.visible=true; 

    if (money>150){
    textSize(30);
    fill("black");
    text ("yay! you did it well done!",300, 200)
    }

    if (money<150){
    textSize(30);
    fill("black");
    text ("Good try but the costumers did not seem to like your recipe",200, 200)
    }

    textSize(30);
    fill("black");
    strokeWeight(20);
    text ("You earned $ " +  money  + " with your recipe", 200,850)
  
  
  }
}

if(game===2){
  background(background1);

  princess.visible=true
    dress1.visible=true
    dress2.visible=true
    dress3.visible=true
    legging1.visible=true
    legging2.visible=true
    legging3.visible=true
    shoe1.visible=true
    shoe2.visible=true
    shoe3.visible=true
    shoe4.visible=true

    text(mouseX +" , "+ mouseY,100,150);
    drawSprites();

    if(mousePressedOver(legging1)){
      legging1.x = 165;
      legging1.y = 465;
      legging1.scale=0.7;
      legging2.x = 600;
      legging2.y = 360;
      legging2.scale=0.5;
      legging3.x = 750;
      legging3.y = 360;
      legging3.scale=0.5;
    }

    if(mousePressedOver(legging2)){
      legging2.x = 162;
      legging2.y = 520;
      legging2.scale=0.7;
      legging1.x = 450;
      legging1.y = 360;
      legging1.scale=0.5;
      legging3.x = 750;
      legging3.y = 360;
      legging3.scale=0.5;
    }

    if(mousePressedOver(legging3)){
      legging3.x = 162;
      legging3.y = 516;
      legging3.scale=0.7;
      legging1.x = 450;
      legging1.y = 360;
      legging1.scale=0.5;
      legging2.x = 600;
      legging2.y = 360;
      legging2.scale=0.5;
    }

    if(mousePressedOver(dress1)){
      dress1.x = 166;
      dress1.y = 340;
      dress1.scale=0.7
      dress2.x = 600;
      dress2.y = 130;
      dress2.scale=0.5;
      dress3.x = 750;
      dress3.y = 130;
      dress3.scale=0.5;
    }

    if(mousePressedOver(dress2)){
      dress2.x = 166;
      dress2.y = 335;
      dress2.scale=0.7;
      dress1.x = 450;
      dress1.y = 130;
      dress1.scale=0.5;
      dress3.x = 750;
      dress3.y = 130;
      dress3.scale=0.5;

    }

    if(mousePressedOver(dress3)){
      dress3.x = 167;
      dress3.y = 340;
      dress3.scale=0.7;
      dress2.x = 600;
      dress2.y = 130;
      dress2.scale=0.5;
      dress1.x = 450;
      dress1.y = 130;
      dress1.scale=0.5;
    }

    if(mousePressedOver(shoe1)){
      shoe1.x = 165;
      shoe1.y = 615;
      shoe1.scale=0.7;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
    }

    if(mousePressedOver(shoe2)){
      shoe2.x = 167;
      shoe2.y = 615;
      shoe2.scale=0.7;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
    }

    if(mousePressedOver(shoe3)){
      shoe3.x = 178;
      shoe3.y = 615;
      shoe3.scale=0.7;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
    }

    if(mousePressedOver(shoe4)){
      shoe4.x = 165;
      shoe4.y = 619;
      shoe4.scale=0.7;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
    }
}
 }
