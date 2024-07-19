function setup() {
  //create a surface to draw in
 createCanvas(700, 480);
background(225,204,0);
//console.log('A canvas with yellow background')

//take big brush
  strokeWeight(10);
  //dip in color purple
  stroke('red');
  frameRate(50)
  //place a dot on a screen
//point(700/2,480/2);
  //rect(350, 240, 60, 90);
}

function draw() {
  let posX=mouseX;
  let posY=mouseY;
  point(posX,posY)
 // background(220);
}