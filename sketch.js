let colors = []; // randome colors 
let colorChange = 15;  
let frameCounter = 0;

function mouseClicked() {
  let newFrameRate = random(5, 225);  
  frameRate(newFrameRate);  //set the new frame rate
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  // colors for array
  for (let i = 0; i < 20; i++) {
    colors.push(color(random(0, 255), random(0, 255), random(0, 255)));
  }

}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  frameCounter++;

  if (frameCounter % colorChange == 0) {
    for (let i = 0; i < 20; i++) {
      colors[i] = color(random(0,225), random(0,255), random(0,255));
          //0blue, 0,purple, 0red/green
    }
  }

  // Draw circles with the stored colors
  for (let i = 20; i > 0; i--) {
    let scaleFactor = map(i, 1, 20, 1, 700);
    fill(colors[i - 1]);
    circle(0, 0, scaleFactor);
  }
}