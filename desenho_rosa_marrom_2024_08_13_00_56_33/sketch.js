
function setup() {
  createCanvas(600, 600);
   background("black");
}


function draw() {
  
  stroke("pink");
  fill ("brown");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    circle(mouseX, mouseY,mouseY, mouseX);
        point(mouseY, mouseX, 20, 35);
          rect(mouseX, mouseY,mouseY, mouseX)

  }console.log(mouseIsPressed)
}
