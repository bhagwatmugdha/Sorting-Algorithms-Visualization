// Initiate a delay between the swaps in sorts
const delay = ms => new Promise(res => setTimeout(res, ms));

// Initialize a random list of elements
function generateRandomElementList(numberOfElements) {
    elementList = []
    for (itr = 0; itr < numberOfElements; itr++) {
        elementList.push(Math.floor((Math.random() * 100) + 1));
    }

    return elementList;
}

// Swap elements in array
function swap(elementList, index1, index2) {
    temp = elementList[index1];
    elementList[index1] = elementList[index2];
    elementList[index2] = temp;

    return elementList;
}

// Find min and max in array
function findMinMaxElement() {
    if (elementList) {
        minimumElement = elementList[0];
        maximumElement = elementList[0];

        for (var i = 1; i < elementList.length; i++) {
            minimumElement = elementList[i] < minimumElement ? elementList[i] : minimumElement;
            maximumElement = elementList[i] > maximumElement ? elementList[i] : maximumElement;
        }
    }
}

// Print the original and sorted array
function printOriginalArray(elementList, arrayName) {
    elements = '';

    elementList.forEach((element) => {
        elements += element + "    ";
    });

    document.getElementById(arrayName).innerHTML = elements;
}

function printArray(elementList) {
    // var e = "";
    // for (var y = 0; y < elementList.length; y++) {
    //     e += elementList[y] + "   ";
    // }
    // e += "<br/>";
    // document.getElementById("Result").innerHTML = e;
}