async function choose_pivot(elementList, pivot_type, left, right) {

    if (typeof (left) === 'undefined') left = 0;
    if (typeof (right) === 'undefined') right = elementList.length() - 1;
    
    var pivot = null;
    
    if (pivot_type === 'random') {
        pivot = randint(left, right);
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

    var pivot = await choose_pivot(elementList, pivot_type, left, right);
    
    swapIndex1 = pivot;
    swapIndex2 = right;

    swap(elementList, pivot, right);

    await delay(1000);

    swapIndex1 = -1;
    swapIndex2 = -1;

    // Partition the array around the pivot.
    
    pivot = left;
    
    for (var i = left; i < right; i++) {

        if (elementList[i] < elementList[right]) {
            if (i != pivot) {
                swapIndex1 = i;
                swapIndex2 = pivot;

                swap(elementList, i, pivot);

                await delay(1000);

                swapIndex1 = -1;
                swapIndex2 = -1;
            }
            pivot += 1
        }
    }

    swapIndex1 = right;
    swapIndex2 = pivot;

    swap(elementList, right, pivot);

    await delay(1000);

    swapIndex1 = -1;
    swapIndex2 = -1;

    return pivot;
}


async function quicksort(elementList, pivot_type, left, right) {
    
    var numberOfElements = elementList.length;
    
    if (typeof (left) === 'undefined') left = 0;
    if (typeof (right) === 'undefined') right = numberOfElements - 1;

    if (left >= right) return;

    var pivot = partition(elementList, pivot_type, left, right);

    await delay(2000);

    await quicksort(elementList, pivot_type, left, pivot - 1);
    await quicksort(elementList, pivot_type, pivot + 1, right);

    swapIndex1 = -1;
    swapIndex2 = -1;
}

async function quicksortmain(elementList, pivot_type) {
    await quicksort(elementList, pivot_type);

    return elementList;
}