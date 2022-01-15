var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(50,50,30,30,3)
  box2=new Box(200,200,25,25,5)
}

function draw() 

{
  background(220);
  fill ("blue")
  box1.show()
  box1.move()
  fill ("pink")
  box2.show()
  box2.move()

}

