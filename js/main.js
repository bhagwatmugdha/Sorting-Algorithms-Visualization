const numberOfElementsSlider = document.querySelector('#numberOfElemsSlider');
const numberOfElementsValue = document.querySelector('#numberOfElems');
numberOfElementsSlider.addEventListener('input', e => {
    numberOfElementsValue.textContent = numberOfElementsSlider.value;
});

let sortingAlgorithm;
let algorithmStep;

let elementList;
let minimumElement;
let maximumElement;

let comparingIndex1;
let comparingIndex2;

let swapIndex1;
let swapIndex2;

let pivotIndex;

let arrayInFocus = [];

async function startSort() {
    document.getElementById('startButton').disabled = true;
    sortingAlgorithm = document.getElementById('sortingAlgorithm').value;
    let numberOfElements = document.getElementById('numberOfElemsSlider').value;

    algorithmStep = '';
    
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

        case 'quicksortfirst':
            sortingAlgorithm = 'quicksort';
            elementList = await quicksortmain(elementList, 'first');
            break;

        case 'quicksortlast':
            sortingAlgorithm = 'quicksort';
            elementList = await quicksortmain(elementList, 'last');
            break;

        case 'quicksortmiddle':
            sortingAlgorithm = 'quicksort';
            elementList = await quicksortmain(elementList, 'middle');
            break;

        case 'quicksortrandom':
            sortingAlgorithm = 'quicksort';
            elementList = await quicksortmain(elementList, 'random');
            break;

        default:
            break;
    }

    printOriginalArray(elementList, 'sortedArray');

    document.getElementById('startButton').disabled = false;
}