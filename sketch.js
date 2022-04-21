var student = {
  name:"Joshua",
  year:8,
  favouritesubject:"ICT",
  marks:[34,50,100]
}

var ball = {
  x:20,
  y:30,
  r:30,
  xspeed:1,
  yspeed:0,
  color:["red","green","blue","yellow"]
}









function setup() {
  createCanvas(400, 400);
  console.log(student.name)
}

function draw() {
  background(0);
  circle(ball.x,ball.y,ball.r)
  fill (ball.color[3])
  ball.x=ball.x+ball.xspeed
}