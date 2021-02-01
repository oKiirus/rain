const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint


function setup() {
  createCanvas(1200,800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(600, 790, 1200, 20)

  box1 = new Box(700, 100)
  box2 = new Box(700, 100)
  box3 = new Box(700, 100)
  box4 = new Box(700, 100)
  box5 = new Box(700, 100)
  box6 = new Box(800, 100)
  box7 = new Box(800, 100)
  box8 = new Box(800, 100)
  box9 = new Box(800, 100)
  box10 = new Box(800, 100)
  box11 = new Box(900, 100)
  box12 = new Box(900, 100)
  box13 = new Box(900, 100)
  box14 = new Box(900, 100)
  box15 = new Box(900, 100)

  ball = new Ball(500, 300)

  rope = new Rope(ball.body, {x : 500, y: 200})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box5.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box4.display()

  ball.display()

  rope.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})

}
