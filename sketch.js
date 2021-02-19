const Bodies=Matter.Bodies
const World=Matter.World
const Body=Matter.Body
const Constraint=Matter.Constraint
const Engine=Matter.Engine
const Render=Matter.Render
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ball;
var ground;
var rope;
function setup() {
    
createCanvas(1000,800)
engine=Engine.create()
world=engine.world;

ground=new Ground(500,750,1000,10);
box1=new Box(900,700,70,70);
box2=new Box(800,700,70,70);
box3=new Box(700,700,70,70);
box4=new Box(600,700,70,70);
box5=new Box(650,650,70,70);
box6=new Box(750,650,70,70);
box7=new Box(850,650,70,70);
box8=new Box(700,600,70,70);
box9=new Box(800,600,70,70);
box10=new Box(750,550,70,70);
ball=new Ball(200,400,80,80)
rope=new Rope(ball.body,{x:200,y:300})



}

function draw() {
    background(0)
    Engine.update(engine)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
rope.display()
ball.display()




}

function mouseDragged(){
Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){
    rope.fly();
}
function keyPressed() {
    if (keyCode===32) {
     
      rope.attach(ball.body);
    }
}
