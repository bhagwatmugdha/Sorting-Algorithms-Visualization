function choose_pivot(elementList, pivot_type, left, right) {
    if (typeof (left) === 'undefined') {
        left = 0;
    }
    if (typeof (right) === 'undefined') {
        right = elementList.length - 1;
    }

    var pivot = null;

    if (pivot_type === 'random') {
        pivot = Math.floor(Math.random() * (right - left + 1) + left);
    } else if (pivot_type === 'first') {
        pivot = left;
    } else if (pivot_type === 'last') {
        pivot = right;
    } else if (pivot_type === 'middle') {
        pivot = Math.round((left + right) / 2);
    }

    return pivot;
}


async function partition(elementList, pivot_type, left, right) {
    swapIndex1 = -1;
    swapIndex2 = -1;
    comparingIndex1 = -1;
    comparingIndex2 = -1;

    
    var pivot = choose_pivot(elementList, pivot_type, left, right);
    
    algorithmStep = 'Pivot chosen as the ' + pivot_type + ' element at index ' + pivot;
    pivotIndex = pivot;
    await delay(1500);

    algorithmStep = 'Swapping the pivot with the righmost element of current array ' + elementList[right];

    swapIndex1 = pivot;
    swapIndex2 = right;

    swap(elementList, pivot, right);

    await delay(1500);

    pivotIndex = right;

    swapIndex1 = -1;
    swapIndex2 = -1;

    algorithmStep = 'Partition the array around the pivot ' + elementList[right]
    await delay(500);
    
    pivot = left;

    for (var i = left; i < right; i++) {
        comparingIndex1 = i;
        comparingIndex2 = right;

        algorithmStep = 'Comparing element at left with pivot: ' + elementList[comparingIndex1] + ' and ' + elementList[comparingIndex2];
        await delay(1500);

        comparingIndex1 = -1;
        comparingIndex2 = -1;

        if (elementList[i] < elementList[right]) {
            if (i != pivot) {
                swapIndex1 = i;
                swapIndex2 = pivot;

                algorithmStep = 'Element is smaller the pivot, swapping elements ' + elementList[swapIndex1] + ' and ' + elementList[swapIndex2];

                swap(elementList, i, pivot);

                await delay(1500);

                swapIndex1 = -1;
                swapIndex2 = -1;
            }
            pivot += 1
        } else {
            algorithmStep = 'Element is not smaller that pivot';
            await delay(500);
        }
    }

    swapIndex1 = right;
    swapIndex2 = pivot;

    algorithmStep = 'Placing pivot in its place!'

    swap(elementList, right, pivot);

    await delay(1500);

    swapIndex1 = -1;
    swapIndex2 = -1;
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    pivotIndex = -1;
    algorithmStep = '';

    return pivot;
}


async function quicksort(elementList, pivot_type, left, right) {
    if (typeof (left) === 'undefined') {
        left = 0;
    }
    if (typeof (right) === 'undefined') {
        right = elementList.length - 1;
    }

    if (left >= right) return;

    arrayInFocus = [];
    arrayInFocus.push(left);
    arrayInFocus.push(right);

    algorithmStep = 'Current array in focus is from index ' + left + ' till index ' + right;
    await delay(1500);

    algorithmStep = '';

    var pivot = await partition(elementList, pivot_type, left, right);

    await quicksort(elementList, pivot_type, left, pivot - 1);
    await quicksort(elementList, pivot_type, pivot + 1, right);
}

async function quicksortmain(elementList, pivotType) {
    await quicksort(elementList, pivotType);

    swapIndex1 = -1;
    swapIndex2 = -1;
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    pivotIndex = -1;

    arrayInFocus = [];

    algorithmStep = 'Sorting complete!';

    return elementList;
}