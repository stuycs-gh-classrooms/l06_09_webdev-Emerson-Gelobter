var h;
var w;
var x;
var y;
var vx;
var vy;

function setup() {
  createCanvas(1000, 500);
  background(0);
  fill(255);
  w = 100;
  h = 50;
  x = int(random(1, width - w));
  y = int(random(1, height - h));
  vx = int(random(-9, 10));
  while(vx == 0){
    vx = int(random(-9, 10));
  }
  vy = int(random(-9, 10));
  while(vy == 0){
    vy = int(random(-9, 10));
  }
  rect(x, y, w, h);
}

function draw(){
  background(0);
  x+=vx;
  y+=vy;
  if(x >= width - w){
    vx *= -1;
  }
  else if(x <= 1){
    vx *= -1;
  }
  if(y >= height - h){
    vy *= -1;
  }
  else if(y <= 1){
    vy *= -1;
  }
  rect(x, y, w, h);
}
