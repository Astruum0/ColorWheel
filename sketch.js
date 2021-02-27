var divider = 1;
var maxIterations = 9;
var looping = false;

function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
    translate(width / 2, height / 2);
    noStroke();
    colorMode(HSL, 100);

    for (var i = 0; i < PI; i += PI / divider) {
        let Hcolor = map(i, 0, PI, 0, 100);

        fill((frameCount / 5 + Hcolor) % 100, 100, 50);

        circle(
            cos(i) * cos(frameCount / 25 + i) * 150,
            sin(i) * cos(frameCount / 25 + i) * 150,
            30
        );
        if (frameCount % 157 == 0) {
            if (divider == 2 ** maxIterations) {
                if (looping) {
                    divider = 1;
                    background(255);
                }
            } else {
                divider *= 2;
            }
            return;
        }
    }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        divider *= 2;
    }
    if (keyCode == LEFT_ARROW) {
        divider /= 2;
        background(255);
    }
    if (keyCode == 32) {
        divider = 1;
        frameCount = 0;
        background(255);
    }
}