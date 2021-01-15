const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, mainGround, rope,backgroundImg;
var score=0;


function preload(){
  //  backgroundImg=loadImage("bg2.jpg")
    getBackgroundImg();
}
function setup() {
    var canvas = createCanvas(1525, 750);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(150, 400, 50, 50);
    mainGround = new Ground(758, 708, 1530, 20);
   // sGround1 = new Ground(650, 600, 350, 20);
  //  sGround2 = new Ground(1150, 350, 200, 20);


    block1 = new Block(650, 700, 60, 90,);
   block2 = new Block(650+65, 700, 60, 90);
    block3 = new Block(650+65+65, 700, 60, 90);
   block4 = new Block(650+65+65+65, 700, 60, 90);
   block5 = new Block(650+65+65+65+65, 700, 60, 90);
    block6 = new Block(650+65+65+65+65+65, 700, 60, 90);


/////////////////////////////////////////////////////////////////////////    
/////////////////////////////////////////////////////////////////////////
block7 = new Block(650+35, 700-250, 60, 90);                      //////                |||||||| 
block8 = new Block(650+35+65, 700-250, 60, 90);                   /////////////////     |||   || 
block9 = new Block(650+35+65+65, 700-250, 60, 90);                /////////////////     |||===||  
block10 = new Block(650+35+65+65+65, 700-250, 60, 90);            //////                |||  \\   
block11 = new Block(650+35+65+65+65+65, 700-250, 60, 90);         //////                |||   \\  
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



    block12 = new Block(650+35+34, 700-250-100, 60, 90);
    block13 = new Block(650+35+65+35, 700-250-100, 60, 90);
    block14 = new Block(650+35+65+65+35, 700-250-100, 60, 90);
    block15 = new Block(650+35+65+65+65+35, 700-250-100, 60, 90);




   block16 = new Block(650+35+34+35, 700-250-100-100, 60, 90);
   block17 = new Block(650+35+34+60+40, 700-250-100-100, 60, 90);
  block18 = new Block(650+35+34+60+60+40, 700-250-100-100, 60, 90);



    block19 = new Block(650+35+34+35+35, 700-250-100-100-100, 60, 90,);
    block20 = new Block(650+35+34+35+35+35+35, 700-250-100-100-100, 60, 90,);
    block21 = new Block(650+35+34+35+35+35, 700-250-100-100-100-100, 60, 90,);


    rope = new launcher(ball.body, { x: 150, y: 350 });

}

function draw() {
    background(0);
    Engine.update(engine);
    ball.display();
    mainGround.display();
   
    block1.display();
    block1.score();
   block2.display();
   block2.score();
   block3.display();
   block3.score();
    block4.display();
    block4.score();
   block5.display();
   block5.score();
    block6.display();
    block6.score();

    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();

   block10.display();
   block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    block13.display();
    block13.score();

    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();

    block17.display();
    block17.score();
   block18.display();
   block18.score();

   block19.display();
   block19.score(1);
   block20.display();
   block20.score();
   block21.display();
   block21.score();

    rope.display();


    textSize(30);
    text("score="+score,200,100)

}


function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(ball.body, { x: 220, y: 450 });
        rope.attach(ball.body);
        console.log(ball.body.speed);

    }
}
async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
       var datetime = responseJSON.datetime;
       var hour = datetime.slice(11,13);
       if (hour>=06 && hour <=19){
           bg="255";
          
       }
       else{
  bg="0";
       }
  }