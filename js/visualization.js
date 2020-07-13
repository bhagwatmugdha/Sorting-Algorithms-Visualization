const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 600;

function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas-container');
}

function findHeight(element) {
    return CANVAS_HEIGHT / 5 + 2 / 5 * CANVAS_HEIGHT * (element - minimumElement) / (maximumElement - minimumElement);
}

function quicksortVisualization() {
    if (elementList) {
        stroke('#73C2FB');
        fill('#73C2FB');

        findMinMaxElement();

        const numberOfElements = elementList.length;
        const barWidth = 50;
        const leftSpacing = (CANVAS_WIDTH - (2 * numberOfElements - 1) * barWidth) / 2;

        let xCoord = leftSpacing;

        for (element in elementList) {
            stroke('#73C2FB');
            fill('#73C2FB');

            if (element == pivotIndex) {
                stroke('#000000');
                fill('#000000');
            }

            if (element == comparingIndex1 || element == comparingIndex2) {
                stroke('#0080FF');
                fill('#0080FF');
            }

            if (element == swapIndex1 || element == swapIndex2) {
                stroke('#3FE0D0');
                fill('#3FE0D0');
            }

            let height = findHeight(elementList[element]);

            let yCoord = 4 / 5 * CANVAS_HEIGHT - height;

            rect(xCoord, yCoord, barWidth, height);


            stroke('#000000');
            fill('#000000');
            text(element, xCoord + 10, yCoord + height + 40);

            if (element == comparingIndex1 || element == comparingIndex2 || element == swapIndex1 || element == swapIndex2 || element == pivotIndex) {
                stroke('#FFFFFF');
                fill('#FFFFFF');
            }

            textSize(24);

            text(elementList[element], xCoord + 10, yCoord + height - 20);


            xCoord += 2 * barWidth;
        }

        stroke('#000000');
        fill('#000000');
        rect(25, 5, 200, 50);

        stroke('#FFFFFF');
        fill('#FFFFFF');
        textSize(24);
        text('Pivot', 90, 40);

        stroke('#0080FF');
        fill('#0080FF');
        rect(275, 5, 200, 50);

        stroke('#FFFFFF');
        fill('#FFFFFF');
        textSize(24);
        text('Comparisons', 300, 40);

        stroke('#3FE0D0');
        fill('#3FE0D0');
        rect(525, 5, 200, 50);

        stroke('#FFFFFF');
        fill('#FFFFFF');
        textSize(24);
        text('Swaps', 590, 40);

        stroke('#73C2FB');
        fill('#73C2FB');
        rect(775, 5, 800, 50);

        stroke('#000000');
        fill('#000000');
        textSize(24);
        text(algorithmStep, 810, 40);
    }
}

function basicVisualization() {
    if (elementList) {
        stroke('#73C2FB');
        fill('#73C2FB');

        findMinMaxElement();

        const numberOfElements = elementList.length;
        const barWidth = 50;
        const leftSpacing = (CANVAS_WIDTH - (2 * numberOfElements - 1) * barWidth) / 2;

        let xCoord = leftSpacing;

        for (element in elementList) {
            stroke('#73C2FB');
            fill('#73C2FB');

            if (element == comparingIndex1 || element == comparingIndex2) {
                stroke('#0080FF');
                fill('#0080FF');
            }

            if (element == swapIndex1 || element == swapIndex2) {
                stroke('#3FE0D0');
                fill('#3FE0D0');
            }

            let height = findHeight(elementList[element]);

            let yCoord = 4 / 5 * CANVAS_HEIGHT - height;

            rect(xCoord, yCoord, barWidth, height);


            stroke('#000000');
            fill('#000000');
            text(element, xCoord + 10, yCoord + height + 40);

            if (element == comparingIndex1 || element == comparingIndex2 || element == swapIndex1 || element == swapIndex2) {
                stroke('#FFFFFF');
                fill('#FFFFFF');
            }

            textSize(24);

            text(elementList[element], xCoord + 10, yCoord + height - 20);


            xCoord += 2 * barWidth;
        }

        stroke('#0080FF');
        fill('#0080FF');
        rect(155, 5, 200, 50);

        stroke('#FFFFFF');
        fill('#FFFFFF');
        textSize(24);
        text('Comparisons', 180, 40);

        stroke('#3FE0D0');
        fill('#3FE0D0');
        rect(405, 5, 200, 50);

        stroke('#FFFFFF');
        fill('#FFFFFF');
        textSize(24);
        text('Swaps', 470, 40);

        stroke('#73C2FB');
        fill('#73C2FB');
        rect(655, 5, 800, 50);

        stroke('#000000');
        fill('#000000');
        textSize(24);
        text(algorithmStep, 695, 40);
    }
}

function draw() {
    background(255);
    // frameRate(FPS);
    stroke(0, 0, 0);

    if (sortingAlgorithm == 'quicksort') {
        quicksortVisualization();
    } else {
        basicVisualization();
    }
}

