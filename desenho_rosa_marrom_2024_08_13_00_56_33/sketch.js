
function setup() {
  createCanvas(600, 600);
   background("black");
}


function draw() {
  
z  fill ("brown");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    circle(mouseX, mouseY,mouseY, mouseX);
        circle(mouseY, mouseX, 20, 35);
          circle(mouseX, mouseY,mouseY, mouseX)

  }console.log(mouseIsPressed)
}