var divider = 1;

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
            divider *= 2;
            if (divider == 256) {
                divider = 1;
                background(255);
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
}