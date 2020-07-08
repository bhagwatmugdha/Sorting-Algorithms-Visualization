const numberOfElementsSlider = document.querySelector('#numberOfElemsSlider');
const numberOfElementsValue = document.querySelector('#numberOfElems');
numberOfElementsSlider.addEventListener('input', e => {
    numberOfElementsValue.textContent = numberOfElementsSlider.value;
});

let elementList;
let minimumElement;
let maximumElement;

let comparingIndex1;
let comparingIndex2;

let swapIndex1;
let swapIndex2;

async function startSort() {
    document.getElementById('startButton').disabled = true;
    let sortingAlgorithm = document.getElementById('sortingAlgorithm').value;
    let numberOfElements = document.getElementById('numberOfElemsSlider').value;

    elementList = [];
    printOriginalArray(elementList, 'sortedArray');

    elementList = generateRandomElementList(numberOfElements);

    printOriginalArray(elementList, 'originalArray');

    switch (sortingAlgorithm) {
        case 'bubblesort':
            elementList = await bubblesort(elementList);
            break;

        case 'optimizedbubblesort':
            elementList = await optimizedbubblesort(elementList);
            break;

        case 'selectionsort':
            elementList = await selectionsort(elementList);
            break;

        case 'insertionsort':
            elementList = await insertionsort(elementList);
            break;

        // case 'quicksortfirst':
        //     elementList = await quicksortmain(elementList, 'first');
        //     break;

        // case 'quicksortlast':
        //     elementList = await quicksortmain(elementList, 'last');
        //     break;

        // case 'quicksortmiddle':
        //     elementList = await quicksortmain(elementList, 'middle');
        //     break;

        // case 'quicksortrandom':
        //     elementList = await quicksortmain(elementList, 'random');
        //     break;

        default:
            break;
    }

    printOriginalArray(elementList, 'sortedArray');

    document.getElementById('startButton').disabled = false;
}