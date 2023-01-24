let paddleWidth = 100,paddleHeight = 15, paddle_dx=6;
let ball_dx,ball_dy;
let brickWidth=60, brickHeight=10;

function setup() {
  createCanvas(400, 400);
  background("grey");
  
  
  rect_x = (width/2)-paddleWidth/2;
  rect_y = height-25;
  rect(rect_x,rect_y,paddleWidth,paddleHeight);
  
  circle_x = width/2;
  circle_y = height/2;
  ball_radius=10;
  ball_dx=1.5;
  ball_dy=1.5;
  circle(circle_x,circle_y,ball_radius*2);
  
  brick_x=150;
  brick_y=70;
  rect(brick_x,brick_y,brickWidth,brickHeight);
}

function draw()
{
  background("grey");
  
  if(circle_x+ball_radius>width || circle_x-ball_radius<0)
  {
    ball_dx=-ball_dx;
  }
  if(circle_y-ball_radius<0)
  {
    ball_dy=-ball_dy;
  }
  if(circle_y+ball_radius>height)
  {
    ball_dy=0;
    ball_dx=0;
  }
  circle_x=circle_x+ball_dx;
  circle_y=circle_y+ball_dy;
  
  if(keyIsDown(LEFT_ARROW) && rect_x>0)
  {
    rect_x=rect_x-paddle_dx;
  }
  if(keyIsDown(RIGHT_ARROW) && rect_x<width-paddleWidth)
  {
    rect_x=rect_x+paddle_dx;
  }
  if((circle_x+ball_radius>=rect_x) && 
     (circle_x-ball_radius <= rect_x+paddleWidth) && 
     (circle_y+ball_radius >rect_y))
  {
    ball_dy=-ball_dy;
  }
  
  if((circle_x+ball_radius>=brick_x) &&
     (circle_x-ball_radius <= brick_x+brickWidth) &&
     (((circle_y-ball_radius >= brick_y+brickHeight) &&
     (circle_y-ball_radius <= brick_y) )||
     ((circle_y+ball_radius>= brick_y) &&
     (circle_y+ball_radius <= brick_y+brickHeight)
     )))
    {
      brickWidth=0;
      brickHeight=0;
    }
    
    
  circle(circle_x,circle_y,ball_radius*2);
  rect(brick_x,brick_y,brickWidth,brickHeight);
  rect(rect_x,rect_y,paddleWidth,paddleHeight);
  
}
