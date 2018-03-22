function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(47,103,221);
    //line following mouse
    strokeWeight(1.2);

     
    for (i = 30; i < width - 140; i+=65) {
        for (j = height/7; j < 4*height/7; j+=20) {
  //custom shape 
            beginShape();
            noFill();
            stroke(255,255,237);

            let vertices = map(mouseX, 0, width, 5, 50);

            for(let a = 0; a < 360; a += vertices) {
                let x = 25 * sin(a) + 180;
                let y = 50 * cos(a) + 180;
                vertex (x + random(i-10, i) - 90, y + random(j));
            }
            endShape(CLOSE);
        }
    }
    
    for (i = -180; i < width; i+=65) {
        for (j = height/8; j < 3*height/7; j+=20) {
  //custom shape 
            beginShape();
            noFill();
            stroke(233,150,122);

            let vertices = map(mouseX, 0, width, 5, 50);

            for(let a = 0; a < 360; a += vertices) {
                let x = 25 * sin(a) + 180;
                let y = 50 * cos(a) + 180;
                vertex (x + random(i-10, i+10) - 90, y + random(j-10, j+10));
            }
            endShape(CLOSE);
        }
    }
    
    for (i = 0; i < width - 140; i+=65) {
        for (j = height/2; j > 0; j-=70) {
            beginShape();
            noFill;
            stroke(47,103,221);
            let verticesTwo = map(mouseY, 0, height, 3, 50);

            for(let b = 0; b < 360; b += verticesTwo) {
                let x2 = 30 * cos(b) + 180;
                let y2 = 50 * sin(b) + 200;
                vertex (x2 + random(i-10,i) - 90, y2 + random(-j, j) - 90);
            }
            endShape(CLOSE);
        }
    }
}